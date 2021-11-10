class ApartmentGridComponent {
	constructor() {
		this.state = {
			apartaments: [],
		};

		this.init();
	}

	showError = (error) => console.error(error);

	saveApartaments = (apartaments) => {
		this.state = { apartaments };
		this.render();
	};

	getApartaments = () =>
		API.fetchApartments(this.saveApartaments, this.showError);

	init = () => {
		this.getApartaments();
		this.htmlElement = document.createElement('div');
		this.render();
	};

	render = () => {
		const { apartaments } = this.state;
		if (apartaments.length === 0) {
			this.htmlElement.innerHTML = `<h1>Siunčiama...</h1>`;
		} else if (apartaments.length > 0) {
			this.htmlElement.innerHTML = `<h1>Parsiųsta!</h1>`;
		}
	};
}
