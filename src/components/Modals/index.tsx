import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Suspense, lazy } from "react";

const MoviesDetailsModal = lazy(
  () => import("components/Modals/MoviesDetailsModal")
);

export const Modals = (): JSX.Element => {
  const { movieDetailsModal } = useSelector((state: RootState) => state.modals);

  return (
    <>
      {movieDetailsModal.visible && (
        <Suspense fallback={<></>}>
          <MoviesDetailsModal />
        </Suspense>
      )}
    </>
  );
};
