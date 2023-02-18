import { ThemeProvider } from '@emotion/react';
import { EnvieThemeProvider, useEnvieTheme } from '@envie/theme';
import React from 'react';

const EmotionProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useEnvieTheme();

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export const TestProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <EnvieThemeProvider>
      <EmotionProvider>
        {children}
      </EmotionProvider>
    </EnvieThemeProvider>
  );
};
