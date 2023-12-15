import { ThemeWrapper } from '#main/components/ThemeWrapper';
import { CircularProgress, Stack, SxProps } from '@ui/index';
import { LogoIco } from '@component/icons/LogoIco';

const STYLE: SxProps = {
  position: 'fixed',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  '& > svg': {
    animation: `2.8s ease-in-out 0.5s infinite normal none running breathe`,
    width: 'auto',
    height: '90px',
    mb: '1rem'
  }
};
export default function Loading() {
  return (
    <ThemeWrapper>
      <Stack sx={STYLE} position="fixed">
        <LogoIco />
        <CircularProgress variant="indeterminate" size={40} thickness={6} value={100} />
      </Stack>
    </ThemeWrapper>
  );
}
