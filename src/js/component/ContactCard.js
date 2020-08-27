import React, { useState } from "react";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";

export const ContactCard = ({ contact }, ...props) => {
	const [state, setState] = useState({
		showModal: false
	});

	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src={MikePhoto} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<Link className="btn" to={`/edit/${contact.id}`}>
							<i className="fas fa-pencil-alt mr-3" />
						</Link>
						<button
							className="btn"
							onClick={e => {
								setState({ showModal: true });
							}}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead">{!!contact && contact.full_name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{!!contact && contact.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small">{!!contact && contact.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{!!contact && contact.email}</span>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} id={contact.id} />
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	contact: PropTypes.object,
	full_name: PropTypes.string
};
/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};