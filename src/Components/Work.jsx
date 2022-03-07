import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Switch, Route,  Link } from "react-router-dom";

const Works = () => {
    return <div>
        <h1>Works</h1>
        <div className="work group">
            <a href='https://github.com/Cesar-ctrl/cesarinsta' className="work card card-body">
                
                <img src={process.env.PUBLIC_URL + '/img/home.PNG'} alt="home" />{/** process.env.PUBLIC_URL trae la url baseo url pública. */}
                
                    To increase my skills as a Full-Stack developer, I developed a social network using PHP, Laravel, and
Javascript. The project is deployed, you can upload images, comment on images, like images, view user
profiles and delete or edit comments on your own posts.
                
                
            </a>

            <a href="https://cesar-ctrl.github.io"className="work card card-body">
                
                <img src={process.env.PUBLIC_URL +'/img/Dnd.PNG'} alt="home" />
                
                    Designed and developed a web guide about Dungeons and Dragons game, using HTML, CSS and
JavaScript, among other technologies. This project helped me to improve my layout skills, as well as my
javascript knowledge. It also allowed me to learn how to consume REST web services.
                
            </a>

            
            <a href="https://cesar-ctrl.github.io/proyecto2/"className="work card card-body">
                
                <img src={process.env.PUBLIC_URL +'/img/CrudTareas.PNG'} alt="home" />
                
                    Developed a CRUD of tasks that is connected to a database, everything that is not deleted stays in the database.
I've done it with JavaScript, React and Bootstrap, it has state hooks.
                
            </a>
            
            
        </div>
    </div>;
};
export default Works;