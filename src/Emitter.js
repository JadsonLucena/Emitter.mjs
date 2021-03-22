class Emitter {

    #events;

	constructor() {

		this.#events = {};

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

}

export default Emitter;