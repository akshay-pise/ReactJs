import React from "react";
function Cards(props)
{
return (
    <>
        <div className="cards">
            <div className="card">
                <div className="img">
                    <img src={props.imgsrc} width="100%" height="200px" alt="image"/>
                </div>
                <div className="card_info">
                    <span className="card_category">{props.title}</span>
                    <h3 className="card_title">{props.sname}</h3>
                    <a href={props.link} target="_blank" >
                        <button className="button">Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
    </>
);
}
export default Cards;