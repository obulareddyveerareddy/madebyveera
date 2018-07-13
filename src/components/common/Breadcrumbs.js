import React from 'react';

const breadcrumbs = ({entities}) =>{
    return(
        <div id="breadcrumb">
            <div style={{marginLeft:'2rem'}}>
                <a href="#/konten/dashboard" className="breadcrumb"><i className="fa fa-home" aria-hidden="true"></i>Home</a>
            </div>
            {
               entities.map((item, index)=>{
                    if(item.isActive){
                        return <div key={index}><i className="fa fa-angle-right" aria-hidden="true"></i><a className="breadcrumb active">{item.displayName}</a></div>
                    }else{
                        return <div key={index}><i className="fa fa-angle-right" aria-hidden="true"></i><a href={item.pathname} className="breadcrumb">{item.displayName}</a></div>    
                    }
               })
            }
        </div>
    )
}

export default breadcrumbs;