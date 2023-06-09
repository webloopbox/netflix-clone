import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Icon } from "../../assets/logo.svg";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ProfileOptions } from "./ProfileOptions";

export const Navbar = () => {
  const { pathname } = useLocation();
  const { currentUserUid } = useSelector((state: RootState) => state.users);

  return (
    <nav className={pathname === "/browse" ? "nav home-nav" : "nav"}>
      <Link to="/browse" className="nav__logo">
        <Icon />
      </Link>
      <div className="nav__items">
        {!!currentUserUid && pathname === "/browse" && <ProfileOptions />}
        {!currentUserUid && pathname === "/browse" && (
          <Link to="/login" className="login">
            <Button variant="contained" color="primary">
              Login
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};
