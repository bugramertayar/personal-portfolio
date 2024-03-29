import React, { PropsWithChildren } from 'react';
import { Navbar } from '..';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div className="pt-20">{children}</div>
    </>
  );
}
