import React, {useState} from 'react';

const NinjaForm =()=> {

    // create a state variable for each input from the form that we want to collect
    let [name, setName] = useState("");
    let [numProjects, setNumProjects] = useState("");
    let [profileUrl, setProfileUrl] = useState("");
    let [beltColor, setBeltColor] = useState("");
    let [needsSpecialAttention, setNeedsSpecialAttention] = useState("");

    // WE WANT TO CREATE AN OBJECT THAT WE CAN STORE ALL THE PET FORM SUBMISSIONS INTO
    let [petList, setPetList] = useState([]);


    // create a submit handler below
    const submitPet = (e)=> {
        // e means the object created at the occurance of the event. It stores the value collected during the event if the event is stored in an input tag.

        // the default behavior of a form when it is submitted, is to reload the page. we can prevent this from happening using preventDefault();
        e.preventDefault();

        // create a pet object (dictionary/hashmap)
        let pet = {name, numProjects, profileUrl, beltColor, needsSpecialAttention};
        console.log("pet looks like this ----> " + pet);

        // use the setPetList setter to update the petList array to have the pet object inside of it
        setPetList([...petList, pet]);
        
        // clear out the form state variables after submitting the form to clear the input boxes.
        setName("");
        setNumProjects("");
        setProfileUrl("");
        setBeltColor("");
    }

    const toggleAttention=(e,idx)=> {
        let copyList = [...petList];
        copyList[idx].needsSpecialAttention = e.target.checked;
        setPetList(copyList);
    }

    const deletePet = (e, idx)=> {
        let filteredList = petList.filter( (pet,i)=>{
            return i != idx;
        });
        setPetList(filteredList)        
    }

    return (
        <>
            <h3>Hi, there! This is the Ninja Pet Form component!</h3>

            <form onSubmit={submitPet}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" onChange= {(e)=> setName(e.target.value)} name="" id="" className="form-control" value={name} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Projects:</label>
                    <input type="number" onChange= {(e)=> setNumProjects(e.target.value)} name="" id="" className="form-control" value={numProjects} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Profile pic url:</label>
                    <input type="text" onChange= {(e)=> setProfileUrl(e.target.value)} name="" id="" className="form-control" value={profileUrl} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Belt Color: </label>
                    <select onChange= {(e)=> setBeltColor(e.target.value)} name="" id="" className="form-select" value={beltColor}>
                        <option value="" disabled>Select a color!</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="red">Red</option>
                        <option value="black">Black</option>
                    </select>
                </div> <br/>
                <input type="submit" value="Add Pet" className="btn btn-success" />
            </form>

            <hr/>
            <div className="pet-list">
                {
                    petList.map((petObj,idx)=> {
                        return(
                            <div key={idx} className="pet-card" style={{backgroundColor: petObj.beltColor, color: petObj.beltColor!= "yellow"? "white" : "none"}}>
                                <h3 style={{textDecoration: petObj.needsSpecialAttention? "underline":"none"}}>{petObj.name}</h3>
                                <p><strong>Number of Projects:</strong> {petObj.numProjects}</p>
                                <p>Special Attention needed? <input type="checkbox" onClick={(e)=> {toggleAttention(e,idx)}} /></p>
                                <button onClick={(e)=>{deletePet(e, idx)}} className="btn btn-danger">Delete</button><br />
                                <img src={petObj.profileUrl} alt="" width="250px" height="250px"/>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}



export default NinjaForm;