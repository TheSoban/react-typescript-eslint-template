import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Nav: FC = () => {
  return (
    <nav>
      <NavLink to="">Home</NavLink>
      <NavLink to="about">About</NavLink>
    </nav>
  );
};
