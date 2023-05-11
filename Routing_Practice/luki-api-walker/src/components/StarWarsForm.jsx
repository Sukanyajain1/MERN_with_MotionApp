import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

const StarWarsForm = ()=>{

    const [category, setCategory] = useState("");
    const [id, setId] = useState("");
    const history = useHistory();


    const submitSearch=(e)=>{
        e.preventDefault();
        
        // redirect using history.push
        // (routeGoesHere)
        history.push(`/${category}/${id}`); //This is going to push our category and id variables back to the App route
    }
    return(
        <>
            <div>
                <form onSubmit={submitSearch} className="d-flex justify-content-around align-items-center">
                    <div className="form-group">
                        <label htmlFor="">Search for:</label>
                        <select className="form-control" onChange={(e)=>{setCategory(e.target.value)}}>
                            <option value="" disabled>Select a category</option>
                            <option value="people" >People</option>
                            <option value="films" >Films</option>
                            <option value="planets" >Planets</option>
                            <option value="species" >Species</option>
                            <option value="vehicles" >Vehicles</option>
                            <option value="starships" >Starships</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">ID: </label>
                        <input type="number" value={id} className="form-control" onChange={(e)=>{setId(e.target.value)}}/>
                    </div>
                    <input type="submit" value="Search" />
                </form>
            </div> <hr />
            
        </>
    )
}

export default StarWarsForm;