import { LayoutProps } from '@/layout.type';
import { roboto } from '@theme/font';
import dynamic from 'next/dynamic';
import Loading from './loading';
import type { Metadata } from 'next';

const MainLayout = dynamic(() => import('#main/layouts'), {
  ssr: false,
  loading: () => <Loading />
});

export const metadata: Metadata = {
  title: {
    default: 'Gateway',
    template: '%s | Gateway'
  }
};
export default function RootLayout({ children }: LayoutProps) {
  // noinspection HtmlRequiredTitleElement
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={roboto.className}>
        <style>{`@keyframes breathe{0%,100%{opacity:1;}50%{opacity:0.4;}}}`}</style>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
