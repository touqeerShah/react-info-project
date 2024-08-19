import './Nav.css';
import logo from './logo.svg';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <a className="navbar-brand" href="/">
        <img src={logo} className="Nav-logo " alt="logo" />
      </a>
      <h3>
        React Project Simple
      </h3>

      <h4>Menu</h4>
    </nav>
  )
}

export default Nav;
