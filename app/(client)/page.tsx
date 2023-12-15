import { Metadata } from 'next';
import { Stack, SxProps } from '@ui/index';
import { NavBar } from './(modules)/salesReport/components/NavBar';
import { Filters } from './(modules)/salesReport/components/Filters';
import { Graph } from './(modules)/salesReport/components/Graph';

export const metadata: Metadata = {
  title: 'Sales Report'
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
      <NavBar />
      <Filters />
      <Graph />
    </Stack>
  );
}
