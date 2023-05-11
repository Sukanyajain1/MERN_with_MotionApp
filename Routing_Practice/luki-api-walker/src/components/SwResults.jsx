import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router';
import axios from 'axios';
import People from './People';
import Films from './Films';
import Transportation from './Transportation';
import Species from './Species';
import Planets from './Planets';

const SwResults = () => {

    let {category, id} = useParams();
    const [searchResults, setSearchResults] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response=>{
                setSearchResults(response.data);
                console.log("Axios Response: ", response);
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
        {searchResults===null?
        <span>
            <h1>These aren't the droids you're looking for.</h1>
            <h2>Please try a different search parameter.</h2>
            <img width="600px" src="https://lumiere-a.akamaihd.net/v1/images/628cdaa1dbbde50001de0bd3-image_6c311046.jpeg?region=0,0,1536,864" alt="" />
        </span>
        :category==="people"?
                // <div>
                //     <h1>{searchResults.name}</h1><br />
                //     <h3><strong>Height: </strong>{searchResults.height}</h3>
                //     <h3><strong>Mass: </strong>{searchResults.mass}</h3>
                //     <h3><strong>Hair Color: </strong>{searchResults.hair_color}</h3>
                //     <h3><strong>Skin Color: </strong>{searchResults.skin_color}</h3>
                // </div>
                <People searchResults={searchResults}></People>:
                category==="films"?
                <Films searchResults={searchResults}></Films>:
                category==="planets"?
                <Planets searchResults={searchResults}></Planets>:
                category==="species"?
                <Species searchResults={searchResults}></Species>:
                <Transportation searchResults={searchResults}></Transportation>
            }
        </>
    );
}

export default SwResults;