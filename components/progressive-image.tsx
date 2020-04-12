import React from 'react';
import ProgressiveImage, {
  ProgressiveImageProps,
} from 'react-progressive-image';
import { makeStyles } from '@material-ui/core';
import cx from 'classnames';

const useStyles = makeStyles({
  root: {
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
    color: '#aaa',
  },
});

interface IImageProps extends ProgressiveImageProps {
  alt: string;
}

export default function Image(props: IImageProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ProgressiveImage src={props.src} placeholder={props.placeholder}>
        {(src: string, loading: boolean) => {
          const rootClasses = cx(classes.image, {
            [classes.blur]: loading,
          });
          return <img className={rootClasses} src={src} alt={props.alt} />;
        }}
      </ProgressiveImage>
      <p className={classes.description}>{props.alt}</p>
    </div>
  );
}
