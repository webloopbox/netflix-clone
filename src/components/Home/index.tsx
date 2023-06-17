import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setCurrentUserUid } from "../../store/userSlice";
import { Movies } from "../Movies";
import { Header } from "../Header";
import { Modals } from "components/Modals";

export const Home = () => {
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      dispatch(setCurrentUserUid(currentUser.uid));
    }
  });

  return (
    <>
      <Modals />
      <Header />
      <Movies />
    </>
  );
};
