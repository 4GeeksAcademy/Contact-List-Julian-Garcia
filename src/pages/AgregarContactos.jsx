import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
const AgregarContactos = () => {
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

    const crear = (e) => {
        e.preventDefault()
        fetch("https://playground.4geeks.com/contact/agendas/Julian/contacts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({...data,agenda_slug:"Julian"})
        })
    }
    return (
        <div>
            <form className="row g-3" onSubmit={crear}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" name="email" onChange={inputform} value={data.email} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Name</label>
                    <input type="password" className="form-control" id="inputPassword4" name="name" onChange={inputform} value={data.name} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address" onChange={inputform} value={data.address} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="inputAddress2" name="phone" onChange={inputform} value={data.phone} />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Crear Contacto</button>
                </div>
            </form>
        </div>
    )
}
export default AgregarContactos;