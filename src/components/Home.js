import header_img from '../assets/Header-default.jpg';
import { counter } from './testing.js'

console.log("Z pliku Home.js: ", counter)

export const Home = () => {

    return (
        <header>
            <img src={header_img} alt="" className='banner' />
        </header>
    )
}
