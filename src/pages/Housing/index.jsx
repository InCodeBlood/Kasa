import Gallery from "../../components/Gallery"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from '../../data/data.json';
import Tags from "../../components/HousingTags";
import Rate from "../../components/HousingRatings";
import Collapse from "../../components/Collapse";
import Error from "../Error";


function HousingData({ title, description }) {

    const { id } = useParams();
    const [data, setData] = useState({
        host: { name: "", picture: "" },
        rating: "",
        location: "",
        equipments: [],
        tags: []
    });

    useEffect(() => {
        Data.map((data) => {
            if (data.id === id) {
                setData(data)
            }
            return null
        });
    });

    if (data.title === undefined) {
        return <Error />;
    }

    let dataEquipment = data.equipments.map((i, index) => (
        <li className="location-equipments" key={i}>
            {data.equipments[index]}
        </li>
    ));

    return (
        <section className="housing">
            <figure className="housing__info">
                <div className="housing__info__main">
                    <h1 className="housing__info__main__title">{data.title}</h1>
                    <h2 className="housing__info__main__location">{data.location}</h2>

                    <ul className="housing__info__main__tags">
                        <Tags data={data} />
                    </ul>
                </div>

                <figcaption className="housing__info__host">
                    <div className="housing__info__host__profil">
                        <h3 className="housing__info__host__profil__name">{data.host.name}</h3>
                        <img className="housing__info__host__profil__picture"
                            src={data.host.picture}
                            alt="Profil du diffuseur de l'annonce"
                        />
                    </div>

                    <div className="housing__info__host__rating">
                        <Rate data={data.rating} />
                    </div>
                </figcaption>
            </figure>

            <div className="housing__datas">
                <Collapse
                    about={false}
                    title="Description"
                    text={data.description}
                />
                <Collapse
                    about={false}
                    title="Equipements"
                    text={<ul>{dataEquipment}</ul>}
                />
            </div>
        </section>
    )
}

function Housing() {
    return (
        <main>
            <Gallery />
            <HousingData />
        </main>
    )
}

export default Housing;