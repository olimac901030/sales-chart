import { AccountIco, AppBar, Box, IconButton, MenuIco, Toolbar, Typography } from '@ui/index';

export function NavBar() {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          alignItems: 'center'
        }}
      >
        <Box display="flex" flexDirection="row" alignItems="center">
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIco />
          </IconButton>
          <Typography>Menu</Typography>
        </Box>

        <Typography variant="h6" justifySelf="center">
          Sales Report
        </Typography>

        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-end">
          <Typography>User name</Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountIco />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
