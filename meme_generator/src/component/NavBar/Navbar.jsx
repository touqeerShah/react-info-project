import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {

    return (
        <>
            <nav>
                <div className="nav-left">
                    <a href="#" target="_blank">
                        <img src={logo} className="logo" alt="Vite logo" />
                    </a>
                    <h2>Meme Generator</h2>
                </div>
                <h2 className="nav-right"> Small Project {"-"} 3 </h2>
            </nav>
        </>
    )
}

export default Navbar
