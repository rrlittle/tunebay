import {
	ProgBar,
	LinkRenderer,
	ImageRenderer,
	IconRenderer,
	ActionsPopup,
	LogPopup
} from "./renderers";
const Status = () => "Status";
const Filesize = () => "Filesize";
const UnitRenderer = () => "UnitRenderer";

export const colDefs = [
	{
		field: "controls",
		headerName: "",
		width: 25,
		cellRendererFramework: ActionsPopup
	},
	{
		field: "thumbnail",
		headerName: "icon",
		width: 50,
		cellRendererFramework: ImageRenderer
	},
	{ field: "title", headerName: "title" },
	{
		field: "status",
		headerName: "status",
		width: 50,
		cellRendererFramework: IconRenderer
	},
	{
		field: "playFrom",
		headerName: "start @",
		width: 60
	},
	{
		field: "playTo",
		headerName: "end @",
		width: 50
	},
	{ field: "query", headerName: "query" },
	{
		field: "src",
		headerName: "src",
		width: 150,
		cellRendererFramework: LinkRenderer
	},
	{
		field: "dst",
		headerName: "dst",
		width: 150,
		cellRendererFramework: LinkRenderer
	},
	{
		field: "progress",
		headerName: "progress",
		width: 100,
		cellRendererFramework: ProgBar
	},
	{
		field: "log",
		headerName: "log",
		width: 50,
		cellRendererFramework: LogPopup
	},
	{
		field: "duration",
		headerName: "duration",
		width: 100
	},
	{
		field: "filesize",
		headerName: "filesize",
		width: 100
	},
	{
		field: "added",
		headerName: "added on",
		width: 120
	},
	{
		field: "begun",
		headerName: "download began",
		width: 120
	},
	{
		field: "finished",
		headerName: "downloaded on",
		width: 100
	}
];
