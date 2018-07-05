import React from 'react';

const webAppTitle = ({title, iconClass}) =>{
    return(
        <div style={{display:'flex', color:'black', justifyContent:'space-evenly'}}>
            <i className={"fa "+iconClass+" fa-2x"} aria-hidden="true"></i>
            <div className="sub-title"><a href="#/" style={{color:'black'}}>{title}</a></div>
        </div>
    )
}

export default webAppTitle;