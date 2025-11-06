import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";
import Card from "../components/Card.jsx";

export const Home = () => {
	const slug = "Julian"
	let [list, setList] = useState([])

	const { store, dispatch } = useGlobalReducer()

	const getContacts = async () => {
		try {
			const responseAgenda = fetch(`https://playground.4geeks.com/contact/agendas/${slug}`)
			if (responseAgenda === 400) {
				const responseUsuario = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, {
					method: "POST",
					headers: { "Content-Type": "application/json" }
				})
				await responseUsuario.json()
			}
			const respuesta = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`)
			const data = await respuesta.json()
			setList(data.contacts)
			dispatch({ type: "get_contacts", payload: data.contacts })
		} catch (error) {
			console.log(error);

		}
	}

	useEffect(() => { getContacts() }, [])

	return (
		<div className="text-center mt-5">
			<h1>Agenda: {slug}</h1>
			{list.map((item) => (
				<Card informacion={item} key={item.id} />
			))}

		</div>
	);
}; 