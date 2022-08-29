import header_img from '../assets/narcos-logo.png';
import ReactPlayer from 'react-player'
import Select from '@mui/material/Select';
import { FormControl, Button, MenuItem } from '@mui/material';
import PlayIcon from '@mui/icons-material/PlayArrowRounded';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import VolumeUpIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeMuteIcon from '@mui/icons-material/VolumeMuteOutlined';
import { muiStyles } from '../styles/muiStyles';
import { useState } from 'react';
import { useStyles } from '../ui/makeStyles';
import { CurrentUserUid } from '../models/User';

export const Header = ({ currentUser }: { currentUser: CurrentUserUid }) => {

    const [muteStatus, setMuteStatus] = useState<boolean>(true)
    const [genre, setGenre] = useState<string>('')
    const classes = useStyles()

    const handleMute = () => {
        setMuteStatus(prev => !prev)
    }

    return (
        <header>
            <div className='player'>
                <ReactPlayer
                    playing={true}
                    loop={true}
                    volume={0.2}
                    muted={muteStatus}
                    className='player__video'
                    url='https://vimeo.com/384025132'
                />
                <div className='player__overlay'></div>
            </div>
            <div className='general'>
                <div className='general__genre'>
                    <h3>Movies</h3>
                    <FormControl classes={
                        { root: classes.formControlRoot }
                    }>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={genre}
                            label="Genres"
                            inputProps={{MenuProps: {disableScrollLock: true}}}

                            onChange={(e) => setGenre(e.target.value)}
                            classes={{
                                select: classes.selectRoot,
                                icon: classes.icon
                            }}
                        >
                            <MenuItem value='Dramaty'>Dramas</MenuItem>
                            <MenuItem value='Komedie'>Comedies</MenuItem>
                            <MenuItem value='Kino Akcji'>Classic</MenuItem>
                            <MenuItem value='Familijne i dla dzieci'>Children & Family</MenuItem>
                            <MenuItem value='Dokumentalne'>Documentaries</MenuItem>
                            <MenuItem value='Thrillery'>Thrillers</MenuItem>
                            <MenuItem value='Horrory'>Horror</MenuItem>
                            <MenuItem value='Kryminalne'>Romantic</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='general__info'>
                    <img src={header_img} alt="" />
                    <h4>A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.</h4>
                    <div className='general__actions'>
                        <Button variant="contained" color='play' className='play'><PlayIcon sx={{ fontSize: { sm: 30, lg: 30 }, marginRight: 1 }} /> Play</Button>
                        <Button variant="contained" color='moreInfo' className='more-info'><InfoIcon sx={{ fontSize: 30, marginRight: 1 }} /> More Info</Button>
                    </div>
                </div>
                <div className='embedded-components'>
                    <Button variant="contained" sx={muiStyles.muteBtn} onClick={handleMute}>{muteStatus ? <VolumeMuteIcon /> : <VolumeUpIcon />}</Button>
                    <div className='maturity-rating'>16+</div>
                </div>
            </div>
            {/* <h1>{(currentUser.hasOwnProperty('email')) ? currentUser : 'ładowanie...'}</h1> */}
        </header>
    )
}