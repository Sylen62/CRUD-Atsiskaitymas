const baseURL = 'http://localhost:3000';

class API {
	static fetchApartments = (success, failure) => {
		fetch(`${baseURL}/apartments`)
			.then((res) => res.json())
			.then(success)
			.catch(failure);
	};

	static deleteApartmentById = (id, success, failure) => {
		fetch(`${baseURL}/apartments/${id}`, { method: 'DELETE' })
			.then(success)
			.catch(failure);
	};
}

// const showError = (error) => console.error('Klaida:', error);

// API.fetchApartments(
// 	(data) => console.log('Gauti duomenys:', data),
// 	(error) => showError(error)
// );

// API.deleteApartmentById(
// 	'2',
// 	(data) => console.log('Sėkminai ištrinta:', data),
// 	(error) => showError(error)
// );
