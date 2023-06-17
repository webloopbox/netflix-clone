import header_img from "../../assets/narcos-logo.png";
import ReactPlayer from "react-player";
import { Button, MenuItem } from "@mui/material";
import PlayIcon from "@mui/icons-material/PlayArrowRounded";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import VolumeUpIcon from "@mui/icons-material/VolumeUpOutlined";
import VolumeMuteIcon from "@mui/icons-material/VolumeMuteOutlined";
import { useState } from "react";
import { StyledFormControl, StyledMuteButton, StyledSelect } from "./styles";

export const Header = () => {
  const [muteStatus, setMuteStatus] = useState<boolean>(true);
  const [genre, setGenre] = useState<string>("");

  return (
    <header>
      <div className="player">
        <ReactPlayer
          playing={true}
          loop={true}
          volume={0.2}
          muted={muteStatus}
          className="player__video"
          url="https://vimeo.com/137648848"
        />
        <div className="player__overlay"></div>
      </div>
      <div className="general">
        <div className="general__genre">
          <h3>Movies</h3>
          <StyledFormControl>
            <StyledSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={genre}
              label="Genres"
              inputProps={{ MenuProps: { disableScrollLock: true } }}
              onChange={(e) => setGenre(e.target.value as string)}
            >
              <MenuItem value="dramas">Dramas</MenuItem>
              <MenuItem value="comedies">Comedies</MenuItem>
              <MenuItem value="classic">Classic</MenuItem>
              <MenuItem value="childrens_family">Children & Family</MenuItem>
              <MenuItem value="documentaries">Documentaries</MenuItem>
              <MenuItem value="thrillers">Thrillers</MenuItem>
              <MenuItem value="horror">Horror</MenuItem>
              <MenuItem value="romantic">Romantic</MenuItem>
            </StyledSelect>
          </StyledFormControl>
        </div>
        <div className="general__info">
          <img src={header_img} alt="" />
          <h4>
            A chronicled look at the criminal exploits of Colombian drug lord
            Pablo Escobar, as well as the many other drug kingpins who plagued
            the country through the years.
          </h4>
          <div className="general__actions">
            <Button variant="contained" color="play" className="play">
              <PlayIcon sx={{ fontSize: { sm: 30, lg: 30 }, marginRight: 1 }} />{" "}
              Play
            </Button>
            <Button variant="contained" color="moreInfo" className="more-info">
              <InfoIcon sx={{ fontSize: 30, marginRight: 1 }} /> More Info
            </Button>
          </div>
        </div>
        <div className="embedded-components">
          <StyledMuteButton
            variant="contained"
            onClick={() => setMuteStatus((prev) => !prev)}
          >
            {muteStatus ? <VolumeMuteIcon /> : <VolumeUpIcon />}
          </StyledMuteButton>
          <div className="maturity-rating">16+</div>
        </div>
      </div>
    </header>
  );
};
