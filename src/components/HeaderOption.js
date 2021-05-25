import React from 'react'
import '../css-styling/Headeroptions.css'
import { Avatar } from '@material-ui/core';
function HeaderOption({avtaar, Icon, title}) {
    return (
        <div className="headerOption">
            {Icon && <Icon className='headerOption__icon'/>}
            {avtaar && <Avatar className="headerOption__icon" src={avtaar} />}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
