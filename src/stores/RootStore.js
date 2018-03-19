import { pages, nav } from "../config";
import React from "react";

export class RootStore {
	getPage = ({ history, location, match }) => {
		const Component = pages[location.pathname].component || (() => "404");
		return <Component />;
	};

	getNavs = () => nav;
}
