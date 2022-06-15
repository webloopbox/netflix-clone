import { Link, useLocation } from 'react-router-dom'
import { ReactComponent as Icon } from '../assets/logo.svg'
import { Button } from '@mui/material'

export const Nav = () => {

    const { pathname } = useLocation()

    return (
        <nav className={pathname === '/browse' ? 'nav home-nav' : 'nav'}>
            <Link to="/browse" className='nav__logo'><Icon /></Link>
            <div className='nav__items'>
                {(pathname === '/browse') && <Link to="/login" className='login'><Button variant='contained' color='primary'>Zaloguj się</Button></Link>}
            </div>
        </nav>
    )
}

