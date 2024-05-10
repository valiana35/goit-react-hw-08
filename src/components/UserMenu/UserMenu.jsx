import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Typography variant="h6" component="div" color="primary">
      <p className={css.text}>Welcome, {user.name}</p>
      <Button
        variant="contained"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Typography>
  );
};

export default UserMenu;
