import { useEffect } from 'react';
import header_img from '../assets/Header-default.jpg';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser, logout, setUserData } from '../store/userSlice';
import { addDoc, collection, doc, setDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from '../firebase';

const handleAdd = async () => {

    try {
        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, { car: "mustang" })
        console.log(docRef);
    } catch (err) {
        console.log(err);
    }

}

export const Home = () => {

    const dispatch = useDispatch()
    const { currentUser, userData } = useSelector(state => state.users)
    console.log("current data: ", currentUser.email);

    onAuthStateChanged(auth, (currentUser) => {
        console.log(123);
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
                if (doc.id === auth.currentUser.uid) {
                    dispatch(setUserData(doc.data()))
                }
            });
        }
        if (currentUser.email) {
            fetchDocs()
        }
    }, [])

    return (
        <header>
            <img src={header_img} alt="" className='banner' />
            <h1>{(currentUser.email != undefined) ? currentUser.email : 'ładowanie...'}</h1>
            <button onClick={() => dispatch(logout())}>sign out</button>
            <button onClick={() => handleAdd()}>add database element</button>
        </header>
    )
}
