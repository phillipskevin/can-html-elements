import { DefineMap, Reflect } from "can";

export default DefineMap.extend("Attributes", {
	get _stringified() {
		let stringified = "";

		this.forEach((value, key) => {
			stringified += `${key}="${value}" `;
		});

		return stringified.trim();
	}
});
