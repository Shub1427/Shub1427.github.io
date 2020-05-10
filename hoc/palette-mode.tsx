import React, { useContext } from 'react';
import { useLocalStorage } from '@hooks/use-local-storage';

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

const PaletteModeProvider: React.FC<IPaletteModeProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  return (
    <PaletteModeContext.Provider
      value={{
        darkMode,
        setDarkMode,
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
