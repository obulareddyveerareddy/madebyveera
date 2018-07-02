import React from 'react';

const webAppTitle = () =>{
    return(
        <div style={{display:'flex', marginTop: '1rem', color:'black', marginLeft:'0.8rem', justifyContent:'space-evenly'}}>
            <i className="fa fa-chevron-left fa-3x" aria-hidden="true"></i>
            <div className="site-title"><a href="#/" style={{color:'black'}}>MadeByVeera</a></div>
            <i className="fa fa-chevron-right fa-3x" aria-hidden="true"></i>
        </div>
    )
}

export default webAppTitle;