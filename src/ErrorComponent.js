import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorComponent(props) {
	const { error, isError, message } = useRouteError();
	return (
		<div className="">
			<h1>ERROR!</h1>
			<p>Sorry, the website has shit its pants. 💩</p>
			<p>{isError ? message : " "}</p>
		</div>
	);
}

export default ErrorComponent;
