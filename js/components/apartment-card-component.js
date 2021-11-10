class ApartmentCardComponent {
	constructor() {
		this.htmlElement = document.createElement('article');
		this.htmlElement.innerHTML += `
      <div class="card p-0">
        <div class="card-body">
          <h5 class="card-title">Card</h5>
        </div>
      </div>
    `;
	}
}
