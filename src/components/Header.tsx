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
import { useDispatch } from 'react-redux';

import { addDoc, collection, doc, setDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from '../firebase';
import { auth } from '../firebase';
import { logout } from '../store/userSlice';


type HeaderProps = {
    email?: string
}

const handleAdd = async () => {

    try {
        let uid = auth.currentUser ? auth.currentUser.uid : ''
        const docRef = doc(db, "users", uid);
        await updateDoc(docRef, { car: "mustang" })
        console.log(docRef);
    } catch (err) {
        console.log(err);
    }
}

export const Header = ({currentUser}: {currentUser: HeaderProps}) => {

    const [muteStatus, setMuteStatus] = useState<boolean>(true)
    const [genre, setGenre] = useState('')
    const classes = useStyles()
    const dispatch = useDispatch()

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
                        <h3>Filmy</h3>
                        <FormControl classes={
                            { root: classes.formControlRoot }
                        }>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={genre}
                                label="Gatunki"
                                onChange={(e) => setGenre(e.target.value)}
                                classes={{
                                    select: classes.selectRoot,
                                    icon: classes.icon
                                }}
                            >
                                <MenuItem value='Dramaty'>Dramaty</MenuItem>
                                <MenuItem value='Komedie'>Komedie</MenuItem>
                                <MenuItem value='Kino Akcji'>Kino Akcji</MenuItem>
                                <MenuItem value='Familijne i dla dzieci'>Familijne i dla dzieci</MenuItem>
                                <MenuItem value='Dokumentalne'>Dokumentalne</MenuItem>
                                <MenuItem value='Thrillery'>Thrillery</MenuItem>
                                <MenuItem value='Horrory'>Horrory</MenuItem>
                                <MenuItem value='Kryminalne'>Kryminalne</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='general__info'>
                        <img src={header_img} alt="" />
                        <h4>A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.</h4>
                        <div className='general__actions'>
                            <Button variant="contained" color='play' className='play'><PlayIcon sx={{ fontSize: { sm: 30, lg: 30 }, marginRight: 1 }} /> Odtwórz</Button>
                            <Button variant="contained" color='moreInfo' className='more-info'><InfoIcon sx={{ fontSize: 30, marginRight: 1 }} /> Więcej informacji</Button>
                        </div>
                    </div>
                    <div className='embedded-components'>
                        <Button variant="contained" sx={muiStyles.muteBtn} onClick={handleMute}>{muteStatus ? <VolumeMuteIcon/> : <VolumeUpIcon/>}</Button>
                        <div className='maturity-rating'>16+</div>
                    </div>
                </div>
                <h1>{(currentUser.hasOwnProperty('email')) ? currentUser.email : 'ładowanie...'}</h1>
                <button onClick={() => dispatch(logout())}>sign out</button>
                <button onClick={() => handleAdd()}>add database element</button>
            </header>
    )
}