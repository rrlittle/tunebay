import { SearchPage } from "../components/SearchPage";
import { QueuePage } from "../components/QueuePage";

export const pages = {
	"/": {
		component: SearchPage
	},
	"/queue": {
		component: QueuePage
	}
};
