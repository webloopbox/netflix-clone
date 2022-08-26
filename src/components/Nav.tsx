import { Link, useLocation } from 'react-router-dom'
import { ReactComponent as Icon } from '../assets/logo.svg'
import { Button, Avatar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store';
import avatar from '../assets/avatar.png'
import ArrowDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowUpIcon from '@mui/icons-material/ArrowDropUp';
import { logout } from '../store/userSlice';
import { CurrentUserUid, UserData } from '../models/User';

const avatarStyles = { width: 32, height: 32 }

export const Nav = () => {

    const { pathname } = useLocation()
    const { currentUserUid, userData } : { currentUserUid: CurrentUserUid, userData: UserData } = useSelector((state: RootState) => state.users)
    const dispatch = useDispatch()
    
    return (
        <nav className={pathname === '/browse' ? 'nav home-nav' : 'nav'}>
            <Link to="/browse" className='nav__logo'><Icon /></Link>
            <div className='nav__items'>
                {(currentUserUid && pathname === '/browse') ?
                    <div className='profile'>
                        <Avatar src={avatar} sx={{ width: 32, height: 32 }} variant="rounded" />
                        <ArrowDownIcon className='profile-arrow' />
                        <div className='profile__options'>
                            <ul className='profile__options-profiles'>
                                <li><Avatar src={avatar} sx={avatarStyles} variant="rounded" />Familijny</li>
                                <li><Avatar src={avatar} sx={avatarStyles} variant="rounded" />Dzieci</li>
                                <li><Avatar src={avatar} sx={avatarStyles} variant="rounded" />Zarządzaj profilami</li>
                            </ul>
                            <hr />
                            <ul className='profile__options-more'>
                                <li><Avatar src={avatar} sx={avatarStyles} variant="rounded" />Konto</li>
                                <li><Avatar src={avatar} sx={avatarStyles} variant="rounded" />Centrum pomocy</li>
                            </ul>
                            <hr />
                            <div className='logout'>
                                <button onClick={() => dispatch(logout())}>Wyloguj</button>
                            </div>

                            <ArrowUpIcon className='profile__arrow-up' sx={{ fontSize: 35 }} />
                        </div>
                    </div> :
                    <Link to="/login" className='login'><Button variant='contained' color='primary'>Zaloguj się</Button></Link>}
            </div>
        </nav>
    )
}

