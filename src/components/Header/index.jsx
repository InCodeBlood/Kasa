import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

function Header() {
    return (
        <header className="header">
            <Link to="/"><img src={logo} alt='Kasa' className="header__logo" /></Link>
            <nav className="header__nav">
                <Link className="header__nav__link" to="/">Accueil</Link>
                <Link className="header__nav__link" to="/about">À Propos</Link>
            </nav>
        </header>
    );
}

export default Header;