import React, { useState } from 'react';
import { makeStyles, Grid, IconButton } from '@material-ui/core';
import { Brightness4, Brightness7 } from '@material-ui/icons';

import { usePaletteModeStore } from '@hoc/palette-mode';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
});

const DarkModeSwitch = () => {
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [forceCount, setForceCount] = useState(false);
  const { darkMode, setDarkMode } = usePaletteModeStore();

  setTimeout(() => {
    setForceCount(true);
  }, 0);
  return (
    <Grid
      className={classes.root}
      container
      justify="flex-end"
      alignItems="center"
    >
      <IconButton
        onClick={() => setDarkMode(!darkMode)}
        color="primary"
        aria-label="Toggle light/dark theme"
      >
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Grid>
  );
};

export default DarkModeSwitch;
