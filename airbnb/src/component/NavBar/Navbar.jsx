import './Navbar.css'
import airbnbLogo from '../../assets/airbnb_logo.png'

function Navbar() {

    return (
        <>
            <nav>
            <a href="#" target="_blank">
                <img src={airbnbLogo} className="logo" alt="Vite logo" />
            </a>
            </nav>
        </>
    )
}

export default Navbar
