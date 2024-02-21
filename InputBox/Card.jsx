// import { Component } from "react";
import React from 'react';
import { useState } from "react";

import "./CardStyles.css";


const Card = () => {
    const [taskList, setTaskList] = useState([]);

    const saveTask = (taskObj) => {
        let tempList = taskList;
        tempList.push(taskObj);
        setTaskList(tempList);
    }

    const [AddTask, setAddTask] = useState(false);
    const HideShow = () => {
        setAddTask(!AddTask);
    }


    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');

    const HandleChange = (e) => {
        const {name, value} = e.target;

        if(name=="title"){
            setTitle(value);
        } else{
            setDescription(value);
        }
    }
    const HandleSaveAndHide = () => {
        HideShow();
        HandleSave();
        setTitle('');
        setDescription('');
    }

    const HandleSave = () => {
        let taskObj = {};
        taskObj["Name"]=Title;
        taskObj["Description"]=Description;
        saveTask(taskObj);
    }

    return (
        <>
            <div className="Page" >
            <div>
                { !AddTask && (
                    <div className='btnContainer'>
                        <ul className='btn'>
                            <li><a><i class="fa-solid fa-plus"></i></a></li> 
                            <li onClick={HideShow}><a>ADD TASK</a></li> 
                        </ul>
                    </div>)
                }
                { AddTask && (                
                    <div>
                        <div id="Card">
                            <form>
                                <input type="title" placeholder="Title" value={Title} onChange={HandleChange} name="title"></input>
                                <textarea type="description" placeholder="Description" value={Description} onChange={HandleChange} name="description"></textarea>
                                <div className="icons">
                                    <ul className="icons-list">
                                        <li><a href="index.html"><i  class="fas fa-calendar"></i></a></li>                            
                                        <li><a href="index.html"><i class="fas fa-flag"></i></a></li>
                                        <li><a href="index.html"><i class="fas fa-clock"></i></a></li>
                                    </ul>
                                </div>
                            </form>
                            <footer>
                                <div className='robot'>
                                    <li onClick={HideShow}><a href="index.html" onClick={(e) => e.preventDefault()}><i class="fa-solid fa-robot" style={{color: "#38a9ff"}}></i></a></li>
                                </div>
                                <div className="Submit">            
                                    <ul className="btn-list">
                                        <li onClick={HideShow}><a href="index.html"><i class="fa-regular fa-circle-xmark"></i></a></li>
                                        <li onClick={HandleSaveAndHide}><a href="index.html" onClick={(e) => e.preventDefault()}><i class="fa-solid fa-location-arrow fa-beat"></i></a></li>
                                    </ul>        
                                </div>
                            </footer>
                        </div>
                    </div>
                    )
                }
            </div>
            {/* container to check if save and close funtion is running 
            <div className="Task-Conatiner" >
                          <h1>CONTAINER</h1>
                                {taskList.map((obj) => <p>{obj.Name}</p>)}
            </div> */}
        </div>
        </>
        
    );
};

export default Card;
