import React from "react";

const Card = (props) => {
    return (
        <div>
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="..." className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Nombre: {props.informacion.name}</h5>
                            <p className="card-text">Telefono: {props.informacion.phone}</p>
                            <p className="card-text">Direccion: {props.informacion.address}</p>
                            <p className="card-text">Email: {props.informacion.email}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card