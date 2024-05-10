import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import Typography from '@mui/material/Typography';

const AuthNav = () => {
  return (
    <Typography variant="h6" component="div">
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </Typography>
  );
};

export default AuthNav;