import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import { useParams } from 'react-router';

const Teams =()=>{

    const { id, color } = useParams(); //getting the value of route parameters from App.js
    
    return(
        <>
            <h3>This is the Teams Component</h3>
            <ol>
                <li>Lakers</li>
                <li>Wizards</li>
                <li>Mavs</li>
                <li>Suns</li>
                <li>Knicks</li>
                <li>{id}</li>
            </ol>
            <hr />
            <div style={{backgroundColor: color}}>
                {
                    id=== undefined?
                        <h4>What is your favorite team?</h4>:
                            isNaN(id)?
                                id=="celtics"? <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1200px-Boston_Celtics.svg.png" width="200px" alt="" />:
                                <h4>Displaying information team name is: {id}</h4> :
                                <h4>Displaying information team # is: {id}</h4>
                }
            </div>
        </>
    )
}

export default Teams;