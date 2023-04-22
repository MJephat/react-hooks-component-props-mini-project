import React from 'react';


function About(props){
    return(
        <div>
            <aside>
            <img src={props.imagePath} alt ={props.imageAlt} />
            <p>{props.text}</p>
            </aside>
           </div>
    )
}
export default About; 