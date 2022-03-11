import { Link } from 'react-router-dom'

export const Nav = () => {

    return (
        <nav>
            <Link to="/" className='logo'>Movies App</Link>
            <div className='nav-items'>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    )
}

