import React, { useCallback, useEffect, useRef } from 'react';
import cx from 'classnames';
import { useImmer } from 'use-immer';
import ProgressiveImage, {
  ProgressiveImageProps,
} from 'react-progressive-image';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { makeStyles, Typography, IconButton, Theme } from '@material-ui/core';
import { ZoomIn, ZoomOut, ZoomOutMap } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    margin: '32px 0',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    filter: 'blur(0)',
    transition: '0.3s ease-out',
  },
  imageZoom: {
    margin: 0,
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 100,
    padding: '24px 0',
  },
  vertical: {
    height: 'auto',
    width: 'auto',
  },
  zoomWrapper: {
    position: 'absolute',
    zIndex: 100,
    top: '-2.5rem',
    right: 0,
  },
  zoomWrapperZoomed: {
    top: '-1rem',
  },
  blur: {
    filter: 'blur(3px)',
  },
  description: {
    margin: 0,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 400,
    fontSize: '0.8rem',
    color: '#aaa',
  },
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background:
      theme.palette.type === 'dark'
        ? 'rgba(0, 0, 0, 0.90)'
        : 'rgba(255, 255, 255, 0.90)',
    zIndex: 99,
  },
}));

interface IImageProps extends ProgressiveImageProps {
  alt: string;
}

interface IImageState {
  isZoomed: boolean;
  imageLoading: boolean;
  isVertical: boolean;
  imageWidth: string | number;
  imageHeight: string | number;
}

export default function Image(props: IImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [state, setState] = useImmer<IImageState>({
    isZoomed: false,
    imageLoading: true,
    isVertical: false,
    imageWidth: '100%',
    imageHeight: 'auto',
  });
  const classes = useStyles();
  const rootClasses = cx(classes.root, {
    [classes.imageZoom]: state.isZoomed,
    [classes.vertical]: state.isVertical,
  });
  const descriptionClasses = cx(classes.description);
  const zoomWrapperClasses = cx(classes.zoomWrapper, {
    [classes.zoomWrapperZoomed]: state.isZoomed,
  });

  const handleZoom = useCallback(() => {
    setState((draft) => {
      if (!state.isZoomed && imgRef.current) {
        const ratio = window.innerWidth / window.innerHeight;
        const imageRatio =
          imgRef.current.naturalWidth / imgRef.current.naturalHeight;
        const isVertical = imageRatio < ratio;
        if (isVertical) {
          draft.imageHeight = window.innerHeight - 96;
          draft.imageWidth = draft.imageHeight * imageRatio;
        }
        draft.isVertical = isVertical;
      } else {
        draft.isVertical = false;
        draft.imageHeight = 'auto';
        draft.imageWidth = '100%';
      }
      draft.isZoomed = !state.isZoomed;
    });
  }, [state.isZoomed]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.keyCode === 27) {
        setState((draft) => {
          draft.isZoomed = false;
        });
      }
    }
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <TransformWrapper
      options={{
        disabled: !state.isZoomed,
      }}
      wheel={{
        wheelEnabled: false,
      }}
      doubleClick={{
        mode: 'reset',
      }}
    >
      {({ zoomIn, zoomOut }: any) => (
        <>
          {state.isZoomed && (
            <div className={classes.backdrop} onClick={handleZoom} />
          )}
          <div className={rootClasses}>
            <ProgressiveImage src={props.src} placeholder={props.placeholder}>
              {(src: string, loading: boolean) => {
                setTimeout(
                  () =>
                    setState((draft) => {
                      draft.imageLoading = loading;
                    }),
                  0
                );
                const rootClasses = cx(classes.image, {
                  [classes.blur]: loading,
                });
                return (
                  <>
                    <TransformComponent>
                      <img
                        ref={imgRef}
                        className={rootClasses}
                        style={{
                          width: state.imageWidth,
                          height: state.imageHeight,
                        }}
                        src={src}
                        alt={props.alt}
                      />
                    </TransformComponent>
                    {state.isZoomed && (
                      <div className={zoomWrapperClasses}>
                        <IconButton aria-label="zoom-in" onClick={zoomIn}>
                          <ZoomIn fontSize="inherit" />
                        </IconButton>
                        <IconButton aria-label="zoom-out" onClick={zoomOut}>
                          <ZoomOut fontSize="inherit" />
                        </IconButton>
                      </div>
                    )}
                  </>
                );
              }}
            </ProgressiveImage>
            <Typography className={descriptionClasses} variant="body2">
              {props.alt}
            </Typography>
            {!state.isZoomed && (
              <div className={zoomWrapperClasses}>
                <IconButton aria-label="zoom-in" onClick={handleZoom}>
                  <ZoomOutMap fontSize="inherit" />
                </IconButton>
              </div>
            )}
          </div>
        </>
      )}
    </TransformWrapper>
  );
}
