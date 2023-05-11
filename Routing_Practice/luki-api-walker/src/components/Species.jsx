import React from 'react';

const Species = (props) => {
    let {searchResults} = props;

    return (
        <>
            <div>
                <h1>{searchResults.name}</h1><br />
                <h3><strong>Classification: </strong>{searchResults.classification}</h3>
                <h3><strong>Designation: </strong>{searchResults.designation}</h3>
                <h3><strong>Language: </strong>{searchResults.language}</h3>
                <h3><strong>Average Height: </strong>{searchResults.average_height}</h3>
                <h3><strong>Hair Color(s): </strong>{searchResults.hair_colors}</h3>
                <h3><strong>Skin Color(s): </strong>{searchResults.skin_colors}</h3>
                <h3><strong>Eyes Color(s): </strong>{searchResults.eye_colors}</h3>
            </div>
        </>
    );
}

export default Species;