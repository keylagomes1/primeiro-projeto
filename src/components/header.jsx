import { Link }from "react-router-dom"
import "./Header.css"

function Header(){
    return (
        <header>
            <nav className="nav">
                <Link to="/" className="inicio">Inicio</Link>
                <Link to="/sobre" className="inicio">Sobre</Link>
                <Link to="/contato"className="inicio">Contato</Link>
                <Link to="/produto" className="inicio">Pruduto</Link>
                <Link to="/perfil" className="inicio">Perfil</Link>
            </nav>
        </header>
        
        
    )
}

export default Header
 

