import React from 'react';
import Logo from '../../assets/img/wanderluster.png'
import './styles.css';
import ButtonLink from '../ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Wanderluster Logo" />
            </a>
            <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink>
        </nav>

    );
}

export default Menu;