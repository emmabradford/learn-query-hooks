import React from 'react';

const Planet = ({ planet }) => {
    return(
        <div>
            <h2>{planet.name}</h2>
            <p>Populacion: { planet.population }</p>
            <p>Tierra: {planet.terrain}</p>
        </div>
    );
}

export default Planet;