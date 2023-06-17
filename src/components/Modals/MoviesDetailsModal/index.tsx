import { useDispatch, useSelector } from "react-redux";
import { setMovieDetailsModalStatus } from "store/modalSlice";
import {
  StyledAddButton,
  StyledCloseButton,
  StyledDialog,
  StyledPlayButton,
} from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import { RootState } from "store";
import PlayIcon from "@mui/icons-material/PlayArrowRounded";
import AddIcon from "@mui/icons-material/Add";

const MoviesDetailsModal = (): JSX.Element => {
  const dispatch = useDispatch();
  const { movieDetailsModal } = useSelector((state: RootState) => state.modals);

  const handleClose = () => dispatch(setMovieDetailsModalStatus(false));

  return (
    <StyledDialog
      open={movieDetailsModal.visible}
      onClose={handleClose}
      disableScrollLock={true}
    >
      <StyledCloseButton color="play" onClick={handleClose}>
        <CloseIcon />
      </StyledCloseButton>
      <div className="dialog-content">
        <div className="dialog-content__backdrop">
          <img src={movieDetailsModal.backdrop} />
          <div className="dialog-content__overlay"></div>
        </div>

        <h2 className="dialog-content__title">{movieDetailsModal.title}</h2>
        <div>
          <StyledPlayButton
            variant="contained"
            color="play"
            onClick={() => undefined}
          >
            <PlayIcon sx={{ fontSize: { sm: 30, lg: 30 } }} />
          </StyledPlayButton>
          <StyledAddButton onClick={() => undefined}>
            <AddIcon />
          </StyledAddButton>
        </div>
        <p className="dialog-content__overview">{movieDetailsModal.overview}</p>
      </div>
    </StyledDialog>
  );
};

export default MoviesDetailsModal;
