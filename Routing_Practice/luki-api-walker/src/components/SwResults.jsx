import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router';
import axios from 'axios';

const SwResults = () => {

    let {category, id} = useParams();
    const [searchResults, setSearchResults] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response=>{
                setSearchResults(response.data);
                console.log("Axios Results: ", response);
            })
            .catch(err=>{
                console.log("Axios Error: ", err);
                setSearchResults(null);
            })
    }, [category, id]);

    
    return (
        <>
        {/* <h1>Hey! These are the results</h1>
        <h4>{category}</h4>
        <h4>{id}</h4> */}
        {searchResults==null?
        <span>
            <h1>These aren't the droids you're looking for.</h1>
            <h2>Please try a different search parameter.</h2>
            <img width="600px" src="https://lumiere-a.akamaihd.net/v1/images/628cdaa1dbbde50001de0bd3-image_6c311046.jpeg?region=0,0,1536,864" alt="" />
        </span>
        :category=="people"?
                <div>
                    <h1>{searchResults.name}</h1><br />
                    <h3><strong>Height: </strong>{searchResults.height}</h3>
                    <h3><strong>Mass: </strong>{searchResults.mass}</h3>
                    <h3><strong>Hair Color: </strong>{searchResults.hair_color}</h3>
                    <h3><strong>Skin Color: </strong>{searchResults.skin_color}</h3>
                </div>:
                category=="films"?
                    <div>
                        <h1>{searchResults.title}</h1><br />
                        <h3><strong>Episode ID: </strong>{searchResults.episode_id}</h3>
                        <h3><strong>Director: </strong>{searchResults.director}</h3>
                        <h3><strong>Producer: </strong>{searchResults.producer}</h3>
                        <h3><strong>Opening Crawl: </strong></h3>
                        <h3><em>"{searchResults.opening_crawl}"</em></h3>
                    </div>:
                    category=="planets"?
                    <div>
                        <h1>{searchResults.name}</h1><br />
                        <h3><strong>Climate: </strong>{searchResults.climate}</h3>
                        <h3><strong>Terrain: </strong>{searchResults.terrain}</h3>
                        <h3><strong>Surface Water: </strong>{searchResults.surface_water}</h3>
                        <h3><strong>Population: </strong>{searchResults.population}</h3>
                    </div>:
                    category=="species"?
                        <div>
                            <h1>{searchResults.name}</h1><br />
                            <h3><strong>Classification: </strong>{searchResults.classification}</h3>
                            <h3><strong>Designation: </strong>{searchResults.designation}</h3>
                            <h3><strong>Language: </strong>{searchResults.language}</h3>
                            <h3><strong>Average Height: </strong>{searchResults.average_height}</h3>
                            <h3><strong>Hair Colors: </strong>{searchResults.hair_colors}</h3>
                            <h3><strong>Skin Colors: </strong>{searchResults.skin_colors}</h3>
                            <h3><strong>Eyes Colors: </strong>{searchResults.eye_colors}</h3>
                        </div>:
                            <div>
                                <h1>{searchResults.name}</h1><br />
                                <h3><strong>Model: </strong>{searchResults.model}</h3>
                                <h3><strong>Manufacturer: </strong>{searchResults.manufacturer}</h3>
                                <h3><strong>Cost in Credits: </strong>{searchResults.cost_in_credits}</h3>
                                <h3><strong>Max Atmosphering Speed: </strong>{searchResults.max_atmosphering_speed}</h3>
                                <h3><strong>Crew Capacity: </strong>{searchResults.crew}</h3>
                                <h3><strong>Passenger Capacity: </strong>{searchResults.passengers}</h3>
                                {category=="vehicles"?
                                    <h3><strong>Vehicle Class: </strong>{searchResults.vehicle_class}</h3>:
                                    <span>
                                        <h3><strong>Hyperdrive Rating: </strong>{searchResults.hyperdrive_rating}</h3>
                                        <h3><strong>Starship Class: </strong>{searchResults.starship_class}</h3>
                                    </span>}
                            </div>
            }
        </>
    );
}

export default SwResults;