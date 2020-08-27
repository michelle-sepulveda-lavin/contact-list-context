import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const AddContact = props => {
	const { actions } = useContext(Context);

	const [state, setState] = useState({
		full_name: "",
		email: "",
		agenda_slug: "mixu",
		address: "",
		phone: ""
	});

	const handleSubmit = e => {
		e.preventDefault();
		actions.postContacts(state, e);
		e.target.reset();
	};

	const handleChange = e => {
		setState({ ...state, [e.target.name]: e.target.value });
	};
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form
					onSubmit={e => {
						handleSubmit(e);
					}}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							name="full_name"
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={e => {
								handleChange(e);
							}}
							required
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							name="email"
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={e => {
								handleChange(e);
							}}
							required
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							name="phone"
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={e => {
								handleChange(e);
							}}
							required
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							name="address"
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={e => {
								handleChange(e);
							}}
							required
						/>
					</div>
					<button className="btn btn-primary form-control">save</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

AddContact.propTypes = {
	history: PropTypes.object
};
