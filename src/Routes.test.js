import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Header from "./Header";
import MainBody from "./MainBody";
import News from "./News";
import Resources from "./Resources";
import OUCH from "./OUCH";
import { headerHeight } from "./vars";

function Layout() {
	return (
		<>
			<Header headerHeight={headerHeight} />
			<Outlet />
		</>
	);
}

function renderRoute(path) {
	return render(
		<MemoryRouter
			future={{
				v7_startTransition: true,
				v7_relativeSplatPath: true,
			}}
			initialEntries={[path]}
		>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<MainBody />} />
					<Route path="/news" element={<News />} />
					<Route path="/resources" element={<Resources />} />
					<Route path="/ouch" element={<OUCH />} />
				</Route>
			</Routes>
		</MemoryRouter>,
	);
}

describe("Route smoke tests", () => {
	it("renders the header nav on every route", () => {
		for (const path of ["/", "/news", "/resources", "/ouch"]) {
			const { unmount } = renderRoute(path);
			expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
			expect(screen.getByRole("link", { name: "News" })).toBeInTheDocument();
			expect(screen.getByRole("link", { name: "Resources" })).toBeInTheDocument();
			expect(screen.getByRole("link", { name: "OUCH" })).toBeInTheDocument();
			unmount();
		}
	});

	it("renders the expected page content for each route", () => {
		const routeChecks = [
			{ path: "/", text: "Welcome to the Oslo Ultimate Community Hub" },
			{ path: "/news", text: "NEWS" },
			{ path: "/resources", text: "Resources" },
			{ path: "/ouch", text: "What is OUCH?" },
		];

		for (const check of routeChecks) {
			const { unmount } = renderRoute(check.path);
			expect(screen.getByRole("heading", { name: check.text })).toBeInTheDocument();
			unmount();
		}
	});

	it("navigates between pages when header links are clicked", async () => {
		renderRoute("/");

		expect(screen.getByText("Welcome to the Oslo Ultimate Community Hub")).toBeInTheDocument();

		await userEvent.click(screen.getByRole("link", { name: "News" }));
		expect(await screen.findByRole("heading", { name: "NEWS" })).toBeInTheDocument();

		await userEvent.click(screen.getByRole("link", { name: "Resources" }));
		expect(await screen.findByRole("heading", { name: "Resources" })).toBeInTheDocument();

		await userEvent.click(screen.getByRole("link", { name: "OUCH" }));
		expect(await screen.findByRole("heading", { name: "What is OUCH?" })).toBeInTheDocument();

		await userEvent.click(screen.getByRole("link", { name: "Home" }));
		expect(await screen.findByText("Welcome to the Oslo Ultimate Community Hub")).toBeInTheDocument();
	});
});
