import React from "react";
import logoFooter from '../../assets/logo_footer.png';

function Footer() {
    return (
        <footer className="footer">
            <img className="footer__logo" src={logoFooter} alt="Kasa" />
            <p className="footer__copyrights">© 2023 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;