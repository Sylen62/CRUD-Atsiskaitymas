class ApartmentCardComponent {
	static usdToEuro = 0.86;

	constructor(props) {
		this.props = props;
		this.init();
	}

	formatApartamentType = (type) => type[0].toUpperCase() + type.slice(1, type.length).toLowerCase();

	formatApartamentAddress = (address) => {
		const { city, country, street, number } = address;
		return `${street} - ${number}, ${city}, ${country}`;
	};

	convertCurrency = ({ currency, amount }) => {
		if (currency === '$') return amount * ApartmentCardComponent.usdToEuro;
		else return amount;
	};

	createCard = () => {
		const { type, owner, roomCount, squares, address, price, imgSrc } = this.props;
		const { fullname, email, phone } = owner;
		const card = `
      <img src="${imgSrc}" class="card-img-top" style="height:450px;object-fit: cover;" />
      <div class="card-body">
        <h5 class="card-title text-center mb-0">${this.formatApartamentType(type)}</h5>
        <p class="card-text text-center"><small>${this.formatApartamentAddress(address)}</small></p>
        <div class="d-flex flex-column justify-content-start">
          <span class="card-text"><strong>Room count: </strong>${roomCount}</span>
          <span class="card-text"><strong>Squares: </strong>${squares} m²</span>
          <span class="card-text"><strong>Price: </strong>${this.convertCurrency(price)} €</span>
          <span class="card-text"><strong>Owner: </strong>${fullname}</span>
          <span class="card-text"><strong>Email: </strong>${email}</span>
          <span class="card-text"><strong>Phone: </strong>${phone}</span>
        </div>
      </div>
    `;
		return card;
	};

	init = () => {
		this.htmlElement = document.createElement('article');
		this.htmlElement.className = 'card p-0 bg-dark text-white position-relative';
		this.htmlElement.innerHTML = this.createCard();
	};
}
