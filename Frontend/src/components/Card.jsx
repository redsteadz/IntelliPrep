import React, { useState } from 'react';
import "./CardStyles.css";

const Card = () => {
    const [taskList, setTaskList] = useState([]);
    const [addTask, setAddTask] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const saveTask = (taskObj) => {
        setTaskList([...taskList, taskObj]);
    }

    const hideShow = () => {
        setAddTask(!addTask);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "title") {
            setTitle(value);
        } else {
            setDescription(value);
        }
    }

    const handleSaveAndHide = () => {
        hideShow();
        handleSave();
        setTitle('');
        setDescription('');
    }

    const handleSave = () => {
        const taskObj = {
            Name: title,
            Description: description
        };
        saveTask(taskObj);
    }

    return (
        <div className="Page">
            <div>
                {!addTask && (
                    <div className='btnContainer'>
                        <ul className='btn'>
                            <li><a><i className="fa-solid fa-plus"></i></a></li>
                            <li onClick={hideShow}><a>ADD TASK</a></li>
                        </ul>
                    </div>)
                }
                {addTask && (
                    <div>
                        <div id="Card">
                            <form>
                                <input type="text" placeholder="Title" value={title} onChange={handleChange} name="title"></input>
                                <textarea type="text" placeholder="Description" value={description} onChange={handleChange} name="description"></textarea>
                                <div className="icons">
                                    <ul className="icons-list">
                                        <li><a href="index.html"><i className="fas fa-calendar"></i></a></li>
                                        <li><a href="index.html"><i className="fas fa-flag"></i></a></li>
                                        <li><a href="index.html"><i className="fas fa-clock"></i></a></li>
                                    </ul>
                                </div>
                            </form>
                            <footer>
                                <div className='robot'>
                                    <li onClick={hideShow}><a href="index.html" onClick={(e) => e.preventDefault()}><i className="fa-solid fa-robot" style={{ color: "#38a9ff" }}></i></a></li>
                                </div>
                                <div className="Submit">
                                    <ul className="btn-list">
                                        <li onClick={hideShow}><a href="index.html"><i className="fa-regular fa-circle-xmark"></i></a></li>
                                        <li onClick={handleSaveAndHide}><a href="index.html" onClick={(e) => e.preventDefault()}><i className="fa-solid fa-location-arrow fa-beat"></i></a></li>
                                    </ul>
                                </div>
                            </footer>
                        </div>
                    </div>
                )}
            </div>
            {/* container to check if save and close function is running */}
            {/* <div className="Task-Conatiner">
                <h1>CONTAINER</h1>
                {taskList.map((obj, index) => <p key={index}>{obj.Name}</p>)}
            </div> */}
        </div>
    );
};

export default Card;
