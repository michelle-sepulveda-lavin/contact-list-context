import React, { useCallback, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes, { object } from "prop-types";

export const EditContacts = props => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState(null);

	useEffect(() => {
		const id1 = props.match.params.id;
		const data = !!store.contacts ? store.contacts.filter(contact => contact.id == id1) : null;
		if (data !== null) {
			setState(...data);
		}
	}, []);

	const handleSubmit = e => {
		e.preventDefault();
		const id2 = props.match.params.id;
		actions.putContact(id2, state);
		e.target.reset();
	};

	const handleChange = e => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	return (
		<>
			{!!state ? (
				<div className="container">
					<div>
						<h1 className="text-center mt-5">Edit contact</h1>
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
									value={!!state && state.full_name}
									placeholder="Full Name"
									required
									onChange={e => {
										handleChange(e);
									}}
								/>
							</div>
							<div className="form-group">
								<label>Email</label>
								<input
									name="email"
									type="email"
									className="form-control"
									placeholder="Enter email"
									required
									value={!!state && state.email}
									onChange={e => {
										handleChange(e);
									}}
								/>
							</div>
							<div className="form-group">
								<label>Phone</label>
								<input
									name="phone"
									type="phone"
									className="form-control"
									placeholder="Enter phone"
									required
									value={!!state && state.phone}
									onChange={e => {
										handleChange(e);
									}}
								/>
							</div>
							<div className="form-group">
								<label>Address</label>
								<input
									name="address"
									type="text"
									className="form-control"
									placeholder="Enter address"
									required
									value={!!state && state.address}
									onChange={e => {
										handleChange(e);
									}}
								/>
							</div>
							<button className="btn btn-primary form-control">save</button>
							<Link className="mt-3 w-100 text-center" to="/">
								or get back to contacts
							</Link>
						</form>
					</div>
				</div>
			) : (
				<div className="container pt-5">
					<Link className="btn btn-primary btn-block mt-5" to="/">
						Go back to contacts
					</Link>
				</div>
			)}
		</>
	);
};

EditContacts.propTypes = {
	history: PropTypes.object,
	contact: PropTypes.object,
	match: PropTypes.object,
	params: PropTypes.object,
	id: PropTypes.string
};
