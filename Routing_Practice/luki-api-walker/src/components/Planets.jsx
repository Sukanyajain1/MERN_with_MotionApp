import React from 'react';

const Planets = (props) => {
    let {searchResults} = props;

    return (
        <>
            <div>
                <h1>{searchResults.name}</h1><br />
                <h3><strong>Climate: </strong>{searchResults.climate}</h3>
                <h3><strong>Terrain: </strong>{searchResults.terrain}</h3>
                <h3><strong>Surface Water: </strong>{searchResults.surface_water}</h3>
                <h3><strong>Population: </strong>{searchResults.population}</h3>
            </div>
        </>
    );
}

export default Planets;