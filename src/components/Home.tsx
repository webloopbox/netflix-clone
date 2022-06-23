import { useEffect } from 'react';
import header_img from '../assets/narcos-logo.png';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser, logout, setUserData } from '../store/userSlice';
import { RootState } from '../store';
import { addDoc, collection, doc, setDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from '../firebase';
import ReactPlayer from 'react-player'
import Select from '@mui/material/Select';
import { FormControl, Button, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useStyles } from '../ui/makeStyles';
import PlayIcon from '@mui/icons-material/PlayArrowRounded';
import InfoIcon from '@mui/icons-material/InfoOutlined';

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

interface CurrentUser {
    email?: string
}

export const Home = () => {

    const dispatch = useDispatch()
    const { currentUser, userData } : { currentUser: CurrentUser, userData: object }  = useSelector((state:RootState) => state.users)
    console.log("current data: ", currentUser);
    const [genre, setGenre] = useState('')
    const classes = useStyles()

    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            dispatch(setCurrentUser(currentUser))
        }
    })

    useEffect(() => {
        console.log('Home')
        const fetchDocs = async () => {
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                let uid = auth.currentUser ? auth.currentUser.uid : ''
                if (doc.id === uid) {
                    dispatch(setUserData(doc.data()))
                }
            });
        }
        if (currentUser.hasOwnProperty('email')) {
            fetchDocs()
        }
    }, [])


    return (
        <>
            <header>
                <div className='player'>
                    <ReactPlayer
                        playing={false}
                        loop={true}
                        volume={0.2}
                        muted={false}
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
                </div>
                <h1>{(currentUser.hasOwnProperty('email')) ? currentUser.email : 'ładowanie...'}</h1>
                <button onClick={() => dispatch(logout())}>sign out</button>
                <button onClick={() => handleAdd()}>add database element</button>
            </header>
        </>
    )
}
