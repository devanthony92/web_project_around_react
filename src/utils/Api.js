const urlBase = "https://around-api.es.tripleten-services.com/v1";
const headers = {
	authorization: "8158375e-55a5-4253-b2c2-f449963d2758",
	"Content-Type": "application/json",
};

class Api {
	constructor() {
		this._urlBase = urlBase;
		this._headers = headers;
	}
	_handleResponse(res) {
		if (!res.ok) {
			return Promise.reject(`Error: ${res.status}`);
		}
		return res.json();
	}
	async getInitialCards() {
		return fetch(`${this._urlBase}/cards/`, {
			headers: this._headers,
		}).then(this._handleResponse);
	}
	async getUserInfo() {
		return fetch(`${this._urlBase}/users/me`, {
			headers: this._headers,
		}).then(this._handleResponse);
	}
	getAppData() {
		return Promise.all([this.getUserInfo(), this.getInitialCards()]);
	}

	async setUserInfo({ name, about }) {
		return fetch(`${this._urlBase}/users/me`, {
			method: "PATCH",
			headers: this._headers,
			body: JSON.stringify({
				name: `${name}`,
				about: `${about}`,
			}),
		}).then(this._handleResponse);
	}
	async setUserAvatar({ avatar }) {
		return fetch(`${this._urlBase}/users/me/avatar`, {
			method: "PATCH",
			headers: this._headers,
			body: JSON.stringify({
				avatar: `${avatar}`,
			}),
		}).then(this._handleResponse);
	}
	async createNewCard({ name, link }) {
		return fetch(`${this._urlBase}/cards/`, {
			method: "POST",
			headers: this._headers,
			body: JSON.stringify({
				name: `${name}`,
				link: `${link}`,
			}),
		}).then(this._handleResponse);
	}
	async isLiked(id, isLiked) {
		return fetch(`${this._urlBase}/cards/${id}/likes`, {
			method: isLiked ? "DELETE" : "PUT",
			headers: this._headers,
		});
	}
	async deleteCard(id) {
		return fetch(`${this._urlBase}/cards/${id}`, {
			method: "DELETE",
			headers: this._headers,
		}).then(this._handleResponse);
	}
}

const api = new Api();
export default api;
