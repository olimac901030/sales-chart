import { PropsWithChildren, ReactNode } from 'react';
import { AppBar, Box, Toolbar, Typography } from '@ui/index';

export interface ITitleBar extends PropsWithChildren {
  title?: string;
  toolBarActions?: ReactNode;
}
export function TitleBar({ title, toolBarActions = <></> }: ITitleBar) {
  return (
    <AppBar position="relative" sx={{ '& .MuiToolbar-root': { minHeight: '42px' } }} elevation={0}>
      <Toolbar>
        <Typography component="span" maxWidth="fit-content" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        {toolBarActions}
      </Toolbar>
    </AppBar>
  );
}
