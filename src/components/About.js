import React from 'react';


function About(props){
    return(
        <div>
            <aside>
            <img src={props.imagePath} alt ={props.imageAlt} />
            </aside>
            <p>{props.text}</p>
           

        </div>
    )
}
export default About; 