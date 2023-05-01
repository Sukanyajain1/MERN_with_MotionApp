import React, {useState, useEffect} from "react";
import axios from 'axios';

const ShowAllPokemon=()=>{
    let [newPokemon, setNewPokemon] = useState("");
    let [pokemonList, setPokemonList] = useState([]);
    let [likedPokemonsList, setLikedPokemonsList] = useState([]);

    useEffect(()=>{
        console.log("Starting Axios request");
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then(response=>{
            console.log("Got response-->", response);
            setPokemonList(response.data.results);
        })
        .catch(err=>{
            console.log("The Axios Error: ", err);
        })
    },[])

    const addLikedPokemon= (e)=>{
        e.preventDefault();
        console.log("THIS IS THE NEWLY SELECTED POKEMON: ", newPokemon);
        setLikedPokemonsList([...likedPokemonsList, newPokemon]);
        setNewPokemon("");       
    }

    const deletePokemon=(e, idx)=>{
        let filteredList = likedPokemonsList.filter((pokemon, i)=>{
            return i != idx;
        })
        setLikedPokemonsList(filteredList);
    }

    return(
        <>
            <h3>Hello! This is the show all pokemon component</h3><br />

            <div className="row">
                <div className="col">
                    <form onSubmit={addLikedPokemon}>
                        <div className="form-group">
                            <select onChange= {(e)=> setNewPokemon(e.target.value)} name="" id="" className="form-control" value={newPokemon}>
                                <option value="" disabled>Select a Pokemon!</option>
                                {
                                    pokemonList.map((pokemonObj, idx)=>{
                                        return(
                                            <option key={idx} className="text-capitalize" value={pokemonObj.name}>{pokemonObj.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <input type="submit" value="Submit new liked pokemon" />
                    </form>
                </div>
                <div className="col">
                    <h3 style={{textDecoration:"underline"}}>Pokemon You Like:</h3>
                    {
                        likedPokemonsList.map((pokeName, idx)=>{
                            return(
                                <div key={idx} className="likedPokemon">
                                    <h5 className="text-capitalize">{pokeName}</h5>
                                    <button onClick={(e)=>{deletePokemon(e,idx)}}>Unlike</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
        </>
    )
}


export default ShowAllPokemon;