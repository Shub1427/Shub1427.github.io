import React from 'react';
import { IconButton } from '@material-ui/core';
import { Brightness4, Brightness7 } from '@material-ui/icons';

import { usePaletteModeStore } from '@hoc/palette-mode';

const DarkModeSwitch = () => {
  const { darkMode, setDarkMode } = usePaletteModeStore();

  return (
    <IconButton
      onClick={() => setDarkMode(!darkMode)}
      color="primary"
      aria-label="Toggle light/dark theme"
    >
      {darkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default DarkModeSwitch;
