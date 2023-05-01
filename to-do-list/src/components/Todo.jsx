import React, {useState} from 'react';

const Todo = ()=> {
    let [taskContent, setTaskContent] = useState("");
    let [taskStatus, setTaskStatus] = useState(false);
    let [todoList, setTodoList] = useState([]);

    const addNewTask= (e)=>{
        e.preventDefault();
        let task = {taskContent, taskStatus}
        setTodoList([...todoList, task]);
        setTaskContent("");
    }

    const toggleTaskFinished= (e, idx)=>{
        // create a variable to spread the task list into
        let copyTaskList = [...todoList];
        
        // find the task at index idx and get the taskStatus attribute --> set it equal to the check type of the event.target value from the user
        copyTaskList[idx].taskStatus = e.target.checked;

        // set copy list as the new list
        setTodoList(copyTaskList);
    }
    
    return (
        <>

            <form onSubmit={addNewTask}>
                <div className="form-group">
                    <label htmlFor=""><h3>New Task:</h3></label>
                    <input type="text" className="form-control" value={taskContent} onChange={(e)=>setTaskContent(e.target.value)}/>
                </div>
            </form><br />
            
            {
                todoList.map ((taskObj, idx)=>{
                    return(
                        <>
                            <div key={idx} className='taskItem' >
                                <input  type="checkbox" onClick={(e)=>toggleTaskFinished(e, idx)} />
                                <h3 style={{textDecoration: taskObj.taskStatus? "line-through": "none", /*flexWrap: "wrap"*/}} className=" px-4">{taskObj.taskContent}</h3>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}


export default Todo;