import React from 'react';
import { Link } from "react-router-dom";
import data from '../../data/data.json';

function Card() {
    const cardList = data.map((card) =>
        <Link className="card" to={"/logement/" + card.id} key={card.id}>
            <p className='card__title'>{card.title}</p>
            <img className="card__img"src={card.cover} alt={card.title} />
        </Link>
    );

    return (
        <section className="cards">
            {cardList}
        </section>
    );
}

export default Card;