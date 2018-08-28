import { Component } from "can";
import { Attributes, Children } from "utils/index.js";

export default Component.extend({
	tag: "can-p",

	view: `
		<p {{attributes._stringified}}>

			{{# each(children, child=value) }}
				{{child}}
			{{/ each }}
		</p>
	`,

	ViewModel: {
		attributes: Attributes,
		children: Children
	}
});
