import React from 'react';
import cx from 'classnames';
import ProgressiveImage, {
  ProgressiveImageProps,
} from 'react-progressive-image';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '100%',
    margin: '32px 0',
  },
  image: {
    width: '100%',
    filter: 'blur(0)',
    transition: '0.3s ease-out',
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
});

interface IImageProps extends ProgressiveImageProps {
  alt: string;
}

export default function Image(props: IImageProps) {
  const classes = useStyles();
  const rootClasses = cx(classes.root);
  return (
    <div className={rootClasses}>
      <ProgressiveImage src={props.src} placeholder={props.placeholder}>
        {(src: string, loading: boolean) => {
          const rootClasses = cx(classes.image, {
            [classes.blur]: loading,
          });
          return <img className={rootClasses} src={src} alt={props.alt} />;
        }}
      </ProgressiveImage>
      <Typography className={classes.description} variant="body2">
        {props.alt}
      </Typography>
    </div>
  );
}
