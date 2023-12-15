'use client';
import { memo, PropsWithChildren } from 'react';
import { LIGHT_THEME } from '@theme/themes';
import { ThemeProvider } from '@ui/index';

export const ThemeWrapper = memo(function ThemeWrapper({ children }: PropsWithChildren) {
  return <ThemeProvider theme={LIGHT_THEME}>{children}</ThemeProvider>;
});
