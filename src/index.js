import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import Resources from "./Resources";
import Header from "./Header";
import { headerHeight } from "./vars";
import MainBody from "./MainBody";
import News from "./News";
import OUCH from "./OUCH";
import Vahloween from "./Vahloween";

function Layout() {
	return (
		<>
			<Header headerHeight={headerHeight} />
			<Outlet />
		</>
	);
}

const router = createHashRouter([
	{
		element: <Layout />,
		errorElement: <ErrorComponent />,
		children: [
			{
				index: true,
				element: <MainBody />,
			},
			// {
			// 	path: "/ouchWeb",
			// 	element: <MainBody />,
			// },
			{
				path: "resources",
				element: <Resources />,
			},
			{ path: "news", element: <News /> },
			{ path: "ouch", element: <OUCH /> },
			{ path: "vahloween", element: <Vahloween /> },
			//{ path: "/*", element: <NotFound /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
