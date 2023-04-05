import React, { useState } from "react";
const chevron = <i className="fa-solid fa-chevron-up"></i>;

function Collapse({ title, text, about }) {
    const [isActive, setActive] = useState(false);

    const handleToggle = (event) => {
        setActive(!isActive);
    };

    const collapseClass = `${about ? "about__collapse" : "collapse"} ${isActive && "active"}`;

    return (
        <div className={collapseClass}>
            <div className="about__collapse__title" onClick={handleToggle}>
                <p>{title}</p>
                {chevron}
            </div>
            <div className="about__collapse__text">{text}</div>
        </div>
    );
}

export default Collapse;