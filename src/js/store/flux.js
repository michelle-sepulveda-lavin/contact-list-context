const getState = ({ getActions, getStore, setStore }) => {
	return {
		store: {
			contacts: null
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getContacts: async () => {
				const resp = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/mixu");
				const data = await resp.json();
				setStore({
					contacts: data
				});
			},
			postContacts: async (aux, e) => {
				const resp = await fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(aux)
				});
				const data = await resp.json();
				if (!resp.ok) {
					alert(data.msg);
				} else {
					alert("Contact added succesfully");
					getActions().getContacts();
				}
			},
			putContact: async (id, aux2) => {
				const resp = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(aux2)
				});
				const data = await resp.json();
				if (!resp.ok) {
					alert(data.msg);
				} else {
					alert("Contact edited succesfully");
					getActions().getContacts();
				}
			},
			deleteContact: async (id, aux3) => {
				const resp = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(aux3)
				});
				const data = await resp.json();
				const store = getActions();
				store.getContacts();
			}
		}
	};
};

export default getState;
