class ApartmentGridComponent {
	constructor() {
		this.state = {
			apartaments: [],
			loading: false,
		};

		this.init();
	}

	showError = (error) => console.error(error);

	saveApartaments = (apartaments) => {
		this.state = { apartaments, loading: false };
		this.render();
	};

	getApartaments = () => API.fetchApartments(this.saveApartaments, this.showError);

	deleteApartament = (id) => API.deleteApartmentById(id, this.getApartaments, this.showError);

	wrapCard = (element) => {
		const wrapper = document.createElement('div');
		wrapper.className = 'col-xs-12 col-sm-6 col-lg-4 col-xl-3';
		wrapper.append(element);
		return wrapper;
	};

	init = () => {
		this.state.loading = true;
		setTimeout(this.getApartaments, 1000);
		this.htmlElement = document.createElement('div');
		this.htmlElement.className = 'row g-3';
		this.render();
	};

	render = () => {
		const { apartaments, loading } = this.state;
		if (loading) {
			this.htmlElement.innerHTML =
				'<div class="d-flex align-items-center justify-content-center" style="height:100vh;"><img src="assets/loading.gif" /></div>';
		} else if (apartaments.length > 0) {
			this.htmlElement.innerHTML = ``;
			this.state.apartaments.forEach((apartament) => {
				const card = new ApartmentCardComponent({
					data: apartament,
					onDelete: this.deleteApartament,
				});
				card.htmlElement = this.wrapCard(card.htmlElement);
				this.htmlElement.appendChild(card.htmlElement);
			});
		}
	};
}
