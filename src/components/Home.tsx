import { useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUserUid, logout, setUserData } from '../store/userSlice';
import { RootState } from '../store';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { Movies } from './Movies';
import { Header } from './Header';
import { CurrentUserUid, UserData } from '../models/User';

export const Home = () => {

    const dispatch = useDispatch()
    const { currentUserUid, userData } : { currentUserUid: CurrentUserUid, userData: UserData }  = useSelector((state:RootState) => state.users)

    onAuthStateChanged(auth, (currentUser) => {
        console.log('tutaj', currentUser)
        if (currentUser) {
            dispatch(setCurrentUserUid(currentUser.uid))
            dispatch(setUserData(currentUser.email as string))
        }
    })

    useEffect(() => {
        console.log('Home')
        // get data of logged user / testing stage 
        const fetchDocs = async () => {
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                let uid = auth.currentUser ? auth.currentUser.uid : ''
                if (doc.id === uid) {}
            });
        }
        if (currentUserUid.hasOwnProperty('email')) {
            fetchDocs()
        }
    }, [])
    
    return (
        <>
            <Header currentUser={currentUserUid}/>
            <Movies/>                    
        </>
    )
}
