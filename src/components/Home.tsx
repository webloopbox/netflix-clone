import { useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser, logout, setUserData } from '../store/userSlice';
import { RootState } from '../store';
import { addDoc, collection, doc, setDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from '../firebase';
import { Movies } from './Movies';
import { Header } from './Header';

interface CurrentUser {
    email?: string
}

export const Home = () => {

    const dispatch = useDispatch()
    const { currentUser, userData } : { currentUser: CurrentUser, userData: object }  = useSelector((state:RootState) => state.users)
    console.log("current data: ", currentUser);
    

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
            <Header currentUser={currentUser}/>
            <Movies/>                    
        </>
    )
}
