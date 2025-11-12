import React, { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useParams, useNavigate } from "react-router-dom";




const EditContacts = () => {
    const navigate = useNavigate()
    const { contact_id } = useParams()
    const { store, dispatch } = useGlobalReducer()
    let [data, setData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
    })


    const inputform = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }

     useEffect(()=>{ const contactToEdit = store.contacts.find(con => con.id === parseInt(contact_id));
        
        if (contactToEdit) {
            setData({
                name:  contactToEdit.name ,
                email: contactToEdit.email ,
                phone: contactToEdit.phone ,
                address: contactToEdit.address 
            });
        }},[contact_id]);

    const edit = (e) => {
        e.preventDefault()
        fetch(`https://playground.4geeks.com/contact/agendas/Julian/contacts/${contact_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...data, agenda_slug: "Julian" })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

                navigate("/")
            })

            .catch(error => { console.log('Hubo un problema al editar la agenda: \n', error) })
    }

    return (
        <div className="container-fluid">
            <form className="row g-3" onSubmit={edit}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" name="email" onChange={inputform} value={data.email} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputname" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputname" name="name" onChange={inputform} value={data.name} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address" onChange={inputform} value={data.address} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputPhone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="inputPhone" name="phone" onChange={inputform} value={data.phone} />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Edita el Contacto</button>
                </div>

            </form>
            <div>
                <Link to="/">
                    <span>Vuelve a contactos</span>
                </Link>
            </div>
        </div>
    )




}

export default EditContacts
