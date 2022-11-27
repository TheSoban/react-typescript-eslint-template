import { FC, ReactNode } from 'react';
import { Nav } from '@/layout/Nav';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
};
