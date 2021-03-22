class Emitter {

    #events;

	constructor() {

		this.#events = {};

	}

	_emit(name, ...args) {

		if (name in this.#events) {

			this.#events[name].forEach(callback => callback(...args));

		}

	}

	addEventListener(name, callback) {

		if (typeof callback != 'function') {

			throw 'The "listener" argument must be of type function';

		}

		if (!(name in this.#events)) {

			this.#events[name] = []

		}

		this.#events[name].push(callback);

	}

	removeEventListener(name, callback) {

		if (typeof callback != 'function') {

			throw 'The "listener" argument must be of type function';

		}

		if (name in this.#events) {

			const index = this.#events[name].indexOf(callback);

			if (index > -1) {

				this.#events[name].splice(index, 1);

				if (this.#events[name].length == 0) {

					delete this.#events[name];

				}

			}

		}

	}

}

export default Emitter;