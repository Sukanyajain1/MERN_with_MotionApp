import React from 'react';

const Form = (props) =>{
    const {} = props;


    return (
        <>
            <h3>Schedule an appointment below</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="">Name: </label>
                    <input type="text" name="" id="" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Age: </label>
                    <input type="number" name="" id="" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Type: </label>
                    <select name="" id="" className="form-select">
                        <option value="" disabled selected hidden>Select an animal type!</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                        <option value="fish">Fish</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Appointment Date: </label>
                    <input type="date" name="" id="" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Image URL: </label>
                    <input type="date" name="" id="" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Special Requests: </label>
                    <textarea name="" id="" className="form-control" cols="30" rows="10"/>
                </div>
            </form>
        </>
    )



}

export default Form;