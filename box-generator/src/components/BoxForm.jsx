import React, {useState} from 'react';

const BoxForm = ()=>{
    let [color, setColor] = useState("");
    let [boxHeight, setBoxHeight] = useState("");
    let [boxWidth, setBoxWidth] = useState("");

    let [boxList, setBoxList] = useState([]);

    const submitBox = (e)=>{
        e.preventDefault();
        boxHeight += "px";
        boxWidth += "px";
        let box = {color, boxHeight, boxWidth};
        setBoxList([...boxList, box]);
        setColor("");
        setBoxHeight("");
        setBoxWidth("");
    }


    return(
        <>
            <h3>Hello! This is the Box Form component!</h3>

            <form onSubmit={submitBox}>
                <div className="form-group">
                    <label htmlFor="">Color:</label>
                    <input type="text" onChange= {(e)=> setColor(e.target.value)} className="form-control" value={color} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Box Height:</label>
                    <input type="number" onChange= {(e)=> setBoxHeight(e.target.value)} className="form-control" value={boxHeight} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Box Width:</label>
                    <input type="number" onChange= {(e)=> setBoxWidth(e.target.value)} className="form-control" value={boxWidth} />
                </div>

                <br/>
                <input type="submit" value="Add Box" className="btn btn-success" />
            </form>

            <hr/>
            
            <div className="box" >
                {
                    boxList.map((oneBox,idx)=>{
                        return(
                            <div key={idx} style={{backgroundColor: oneBox.color, width: oneBox.boxWidth, height: oneBox.boxHeight}}>hello</div>
                        )
                    })
                }
            </div>


        </>
    )
}
export default BoxForm;