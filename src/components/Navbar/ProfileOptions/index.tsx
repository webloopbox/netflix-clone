import { Avatar } from "@mui/material";
import avatar from "../../../assets/avatar.png";
import { logout } from "../../../store/userSlice";
import ArrowDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowUpIcon from "@mui/icons-material/ArrowDropUp";
import { useDispatch } from "react-redux";
import { getAuth } from "firebase/auth";

const avatarStyles = { width: 32, height: 32 };

export const ProfileOptions = () => {
  const dispatch = useDispatch();
  const auth = getAuth();

  return (
    <div className="profile">
      <Avatar src={avatar} sx={avatarStyles} variant="rounded" />
      <span className="profile__displayname">
        {auth.currentUser?.displayName}
      </span>
      <ArrowDownIcon className="profile-arrow" />
      <div className="profile__options">
        <ul className="profile__options-profiles">
          <li>
            <Avatar src={avatar} sx={avatarStyles} variant="rounded" />
            Familijny
          </li>
          <li>
            <Avatar src={avatar} sx={avatarStyles} variant="rounded" />
            Dzieci
          </li>
          <li>
            <Avatar src={avatar} sx={avatarStyles} variant="rounded" />
            Zarządzaj profilami
          </li>
        </ul>
        <hr />
        <ul className="profile__options-more">
          <li>
            <Avatar src={avatar} sx={avatarStyles} variant="rounded" />
            Konto
          </li>
          <li>
            <Avatar src={avatar} sx={avatarStyles} variant="rounded" />
            Centrum pomocy
          </li>
        </ul>
        <hr />
        <div className="logout">
          <button onClick={() => dispatch(logout())}>Wyloguj</button>
        </div>
        <ArrowUpIcon className="profile__arrow-up" sx={{ fontSize: 35 }} />
      </div>
    </div>
  );
};
