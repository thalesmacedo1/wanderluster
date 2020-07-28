import React from 'react';

function ButtonLink(props) {
    // props => { className: "o que alguém passar", href: "/"}

    return (
        <nav href={props.href} className={props.className}>
            {props.children}
        </nav>

    );
}

export default ButtonLink;