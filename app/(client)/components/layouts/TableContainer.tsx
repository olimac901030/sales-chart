'use client';
import { TableContainer as Container } from '@ui/index';
import { PaperContainer } from '@component/layouts/PaperContainer';
import { PropsWithChildren } from 'react';

export function TableContainer({ children }: PropsWithChildren) {
  return <Container component={PaperContainer}>{children}</Container>;
}
