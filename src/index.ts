const fetch = require('node-fetch');
import Spar from "spar-lib";

if (!globalThis.fetch) {
	globalThis.fetch = fetch;
}

Spar();
