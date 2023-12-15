import { Metadata } from 'next';
import { Container, Divider, Grid, Stack, SxProps, Typography } from '@ui/index';
import { GatewayLayout } from '#gateway/index';

export const metadata: Metadata = {
  title: 'Home'
};

const SX_CONTAINER: SxProps = {
  '&': {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    overflowY: 'auto',
    '& > .MuiButton-root': {
      position: 'absolute',
      margin: '2rem',
      top: 0,
      right: 0,
      maxWidth: 'fit-content'
    },
    '& > .MuiSvgIcon-root': {
      width: 'auto',
      height: '100px'
    }
  }
};

export default function HomePage() {
  return (
    <Stack sx={SX_CONTAINER}>
      <Container>
        <Typography color="primary" variant="h4" fontSize="36px">
          Gateways Manager
        </Typography>
        <Divider sx={{ my: '2rem' }} />
        <Grid gridTemplateColumns="1fr">
          <GatewayLayout />
        </Grid>
      </Container>
    </Stack>
  );
}
