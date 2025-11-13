import React from "react";
import { Link, useParams, } from "react-router-dom";




const Card = (props) => {

    const { contact_id } = useParams()



    const deleteTask = async (contact_id) => {

        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/Julian/contacts/${contact_id}`, {
                method: "DELETE",

            });

            if (response.ok) {
                console.log(response.status);
                console.log("Deleting contact:", contact_id,);
                window.location.reload();


            } else {
                console.log("Not Deleting contact:", contact_id,);
            }


        }
        catch (error) {
            console.error("Error al borrar:", error);

        }

    };




    return (
        <div className="my-auto" >
            <div className="card mb-3 text-center" style={{ maxWidth: "1200px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://static.wikia.nocookie.net/kurzgesagt-youtube-channel/images/3/38/Duck.png/revision/latest?cb=20210718183727" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Nombre: {props.informacion.name}</h5>
                            <p className="card-text">Telefono: {props.informacion.phone}</p>
                            <p className="card-text">Direccion: {props.informacion.address}</p>
                            <p className="card-text">Email: {props.informacion.email}</p>
                            <Link to={'/edit/' + props.informacion.id}>
                                <button className="btn btn-primary">Edit</button>
                            </Link>


                            <button className="btn btn-danger" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" >Borrar</button>

                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Delete</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            Are you sure you want to delete this Contact?
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-danger" onClick={() => deleteTask(props.informacion.id)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Card