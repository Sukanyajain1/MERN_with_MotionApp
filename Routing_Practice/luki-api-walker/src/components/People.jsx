import React from 'react';

const People = (props) => {
    let {searchResults} = props;
    return (
        <>
            <div>
                <h1>{searchResults.name}</h1><br />
                <h3><strong>Height: </strong>{searchResults.height}</h3>
                <h3><strong>Mass: </strong>{searchResults.mass}</h3>
                <h3><strong>Hair Color: </strong>{searchResults.hair_color}</h3>
                <h3><strong>Skin Color: </strong>{searchResults.skin_color}</h3>
            </div>
        </>
    );
}

export default People;