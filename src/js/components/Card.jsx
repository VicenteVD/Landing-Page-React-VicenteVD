import React from "react";

const Card = (props) => {
    return (
        <div className="col-3  mb-4 ">
            <div className="card text-center ">
                <img src={props.img} className="card-img-top object-fit-cover" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.texto}</p>
                </div>
                <div className="card-footer text-body-secondary">
                    <a href="#" className="btn btn-primary">{props.boton}</a>
                </div>
            </div>
        </div>
    );
};


export default Card