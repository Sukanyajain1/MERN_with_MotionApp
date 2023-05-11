import React from 'react';
import {useParams} from 'react-router';

const Transportation = (props) => {
    let {searchResults} = props;
    let {category} = useParams();
    return (
        <>
            <div>
                <h1>{searchResults.name}</h1><br />
                <h3><strong>Model: </strong>{searchResults.model}</h3>
                <h3><strong>Manufacturer: </strong>{searchResults.manufacturer}</h3>
                <h3><strong>Cost in Credits: </strong>{searchResults.cost_in_credits}</h3>
                <h3><strong>Max Atmosphering Speed: </strong>{searchResults.max_atmosphering_speed}</h3>
                <h3><strong>Crew Capacity: </strong>{searchResults.crew}</h3>
                <h3><strong>Passenger Capacity: </strong>{searchResults.passengers}</h3>
                {category==="vehicles"?
                    <h3><strong>Vehicle Class: </strong>{searchResults.vehicle_class}</h3>:
                    <span>
                        <h3><strong>Hyperdrive Rating: </strong>{searchResults.hyperdrive_rating}</h3>
                        <h3><strong>Starship Class: </strong>{searchResults.starship_class}</h3>
                    </span>}
            </div>
        </>
    );
}

export default Transportation;