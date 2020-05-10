import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setMode } from '@store/reducers/storage';
import { RootState } from '@store/reducers';

interface IContextProps {
  darkMode: boolean;
  setDarkMode(darkMode: boolean): void;
}

const PaletteModeContext = React.createContext<IContextProps>({
  darkMode: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDarkMode: () => {},
});

interface IPaletteModeProps {
  children?: React.ReactNode;
}

export const LOCAL_KEY = 'darkMode';

const PaletteModeProvider: React.FC<IPaletteModeProps> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.storageStore.mode);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(darkMode));
    }
  }, [darkMode]);

  useEffect(() => {
    const storageMode = localStorage.getItem(LOCAL_KEY);
    dispatch(
      setMode({
        mode: JSON.parse(storageMode || 'false'),
      })
    );

    setIsInitialized(true);
  }, []);

  return (
    <PaletteModeContext.Provider
      value={{
        darkMode,
        setDarkMode: (mode: boolean) => dispatch(setMode({ mode })),
      }}
    >
      {children}
    </PaletteModeContext.Provider>
  );
};

export const usePaletteModeStore = () => useContext(PaletteModeContext);

export function withPaletteModeProvider(Component: any) {
  return function PaletteModeWrapperComponent(props: any) {
    return (
      <PaletteModeProvider>
        <Component {...props} />
      </PaletteModeProvider>
    );
  };
}
