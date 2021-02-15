import React from 'react';
import { useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NavLink from './NavLink';
import { ROUTES } from '../../constants';

const NavBar = () => {
  const location = useLocation();
  console.log(location);

  const isActive = (route ) => route === location.pathname;

  return (
    <AppBar position="static">
      <Toolbar>
        <NavLink to={ROUTES.HOME} isActive={isActive(ROUTES.HOME)}>
          Logo
        </NavLink>
        <NavLink to={ROUTES.CHARACTER} isActive={isActive(ROUTES.CHARACTER)}>
          Character
        </NavLink>
        <NavLink to={ROUTES.BATTLE} isActive={isActive(ROUTES.BATTLE)}>
          Battle
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
