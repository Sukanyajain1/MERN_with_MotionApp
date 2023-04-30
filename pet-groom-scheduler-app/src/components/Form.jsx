import React, {useState} from 'react';

const Form = (props) =>{
    const {} = props;
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [type, setType] = useState("");
    let [appointment, setAppointment] = useState("");
    let [imgUrl, setImgUrl] = useState("");
    let [specialReq, setSpecialReq] = useState("");

    let currentDate = new Date;
    let formDate = Date(date);

    return (
        <>
            <h3>Schedule an appointment below</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="">Name: </label>
                    <input type="text" onChange= {(e)=> setName(e.target.value)} name="" id="" className="form-control"/>
                    {
                        name.length<3? <p>Name must be at least 3 characters!</p>: null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Age: </label>
                    <input type="number" onChange= {(e)=> setAge(e.target.value)} name="" id="" className="form-control"/>
                    {
                        age<1? <p>Your pet is too young! Minimum age of 1 is required.</p>: null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Type: </label>
                    <select onChange= {(e)=> setType(e.target.value)} name="" id="" className="form-select">
                        <option value="" disabled selected hidden>Select an animal type!</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                        <option value="fish">Fish</option>
                    </select>
                    {
                        type==null? <p>Please choose an animal type!</p>: null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Appointment Date: </label>
                    <input type="date" onChange= {(e)=> setAppointment(e.target.value)} name="" id="" className="form-control"/>
                    {date.length<1? <p>Date is required!</p>: null}
                    {formDate.getTime()==currentDate.getTime()? <p>Please choose a date after today!</p>: null}
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Image URL: </label>
                    <input type="date" onChange= {(e)=> setImgUrl(e.target.value)} name="" id="" className="form-control"/>
                    {
                        imgUrl==null? <p>Please add a picture of your pet!</p>: null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Special Requests: </label>
                    <textarea onChange= {(e)=> setSpecialReq(e.target.value)} name="" id="" className="form-control" cols="30" rows="10"/>
                </div>
                <input type="submit" className="btn btn-success mt-2" value="Submit"/>
            </form>

            <hr/>
            <h3>Your Pet's Info:</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Type: {type}</p>
            <p>Appointment Date: {appointment}</p>
            <p>Pet Image: <img src={imgUrl} alt="" /> </p>
            <p>Special Requests: {specialReq}</p>
            
        </>
    )



}

export default Form;