import React from "react";
import { Link } from "react-router-dom";



const Card = (props) => {

    const deleteTask = async (id) => {
        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/Julian/contacts/${contact_id}`, {
                method: "DELETE",
            });

            if (response.ok) {
            }
            console.log(response.status);



        } catch (error) {
            console.error("Error al borrar:", error);
        }
    };

    return (
        <div className="my-auto" >
            <div className="card mb-3 text-center" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://img.freepik.com/vector-premium/icono-perfil-avatar-predeterminado-imagen-usuario-redes-sociales-icono-avatar-gris-silueta-perfil-blanco-ilustracion-vectorial_561158-3467.jpg?w=360" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Nombre: {props.informacion.name}</h5>
                            <p className="card-text">Telefono: {props.informacion.phone}</p>
                            <p className="card-text">Direccion: {props.informacion.address}</p>
                            <p className="card-text">Email: {props.informacion.email}</p>
                            <Link to={'/edit/' + props.informacion.id}>
                                <button>edit</button>
                            </Link>


                            <button onClick={() => deleteTask()} >borrar</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card