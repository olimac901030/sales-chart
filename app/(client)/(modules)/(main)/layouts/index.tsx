import { ThemeWrapper } from '#main/components/ThemeWrapper';
import { LayoutProps } from '@/layout.type';
import { Container, CssBaseline, SxProps } from '@ui/index';

const SX_CONTAINER: SxProps = {
  '&': {
    position: 'fixed',
    maxWidth: '100%',
    minHeight: '100%',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    overflowY: 'auto',
    m: 0,
    p: 0
  }
};

export default function MainLayout({ children }: LayoutProps) {
  return (
    <ThemeWrapper>
      <CssBaseline />
      <Container sx={SX_CONTAINER}>{children}</Container>
    </ThemeWrapper>
  );
}
