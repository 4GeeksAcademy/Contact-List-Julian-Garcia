import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
					<span className="navbar-brand mb-0 h1">Agenda</span>
				<div className="ml-auto">
					<Link to="/addcontact">
						<button className="btn btn-primary">Agrega un contacto</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};