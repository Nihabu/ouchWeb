import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import Resources from "./Resources";
import Header from "./Header";
import { headerHeight } from "./vars";
import MainBody from "./MainBody";
import News from "./News";
import OUCH from "./OUCH";

function Layout() {
	return (
		<>
			<Header headerHeight={headerHeight} />
			<Outlet />
		</>
	);
}

const router = createBrowserRouter([
	{
		element: <Layout />,
		errorElement: <ErrorComponent />,
		children: [
			{
				path: "/",
				element: <MainBody />,
			},
			{
				path: "/resources",
				element: <Resources />,
			},
			{ path: "/news", element: <News /> },
			{ path: "/ouch", element: <OUCH /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
