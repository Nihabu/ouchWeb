import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
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
		<Auth0Provider
			domain="dev-a2s5kaug23uwrozw.eu.auth0.com"
			clientId="J2FQPR7FdcbLDK61Yru5gxtFX8TOaoiZ"
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}
		>
			<RouterProvider router={router} />
		</Auth0Provider>
	</React.StrictMode>
);
