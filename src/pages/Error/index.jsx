import { Link } from "react-router-dom";

function Error() {
    return (
        <main className="main__error">
            <h1 className="error__title">404</h1>
            <h2 className="error__subtitle">Oups! La page que vous demandez n'existe pas.</h2>
            <p className="error_link"><Link to="/">Retourner sur la page d'accueil</Link></p>
        </main>
    )
}

export default Error;