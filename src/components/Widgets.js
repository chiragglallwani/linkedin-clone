import { FiberManualRecord, Info } from '@material-ui/icons';
import React from 'react'
import '../css-styling/Widgets.css';

function Widgets() {


    const news = (heading, subtitle) => {
       return ( <div className="widgets__article">
            <div className="widgets__articleleft">
                <FiberManualRecord/>
                {console.log("hi")}
            </div>
            <div className="widgets__articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>)
    }
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <Info/>
            </div>
            {news("Working with React, Redux", "Deployed by firebase -- 1.2K readers")}
        </div>
    )
}

export default Widgets;
