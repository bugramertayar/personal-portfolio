import React, { PropsWithChildren } from 'react';
import { Navbar } from '..';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div className="pt-20 pl-20 h-full">{children}</div>
    </>
  );
}
