import React, { PropsWithChildren } from 'react';
import { Navbar } from '..';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
