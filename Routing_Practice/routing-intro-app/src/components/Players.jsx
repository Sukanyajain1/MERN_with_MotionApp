import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Players =()=>{
    return(
        <>
            <h3>This is the Players Component</h3>
            <ol>
                <li>MJ</li>
                <li>Micheal Jordan</li>
                <li>Kobe</li>
                <li>Iverson</li>
                <li>Luka</li>
            </ol>
        </>
    )
}

export default Players;