import { Component } from "can";
import { P } from "can-html-elements";

Component.extend({
	tag: "demo-app",

	view: `
		{{view}}
	`,

	ViewModel: {
		get view() {
			return new P({
				viewModel: {
					children: [ "Hello, World" ],
					attributes: { style: "color: red"	}
				}
			});
		}
	}
});
