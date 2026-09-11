import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MainBody from "./MainBody";
import teamList from "./teamOverview";
import eventsList from "./upcomingEventsList";

describe("Main page content", () => {
	it("renders the key page headings", () => {
		render(<MainBody />);

		expect(screen.getByRole("heading", { name: "Welcome to the Oslo Ultimate Community Hub" })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: "Overview over practice times in the Oslo area" })).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: "Upcoming events" })).toBeInTheDocument();
	});

	it("renders all teams from the overview list", () => {
		render(<MainBody />);

		for (const team of teamList.filter(Boolean)) {
			expect(screen.getByText(team.team)).toBeInTheDocument();
		}
	});

	it("renders all upcoming events", () => {
		render(<MainBody />);

		for (const event of eventsList) {
			expect(screen.getByText(event.title)).toBeInTheDocument();
			expect(screen.getByText(event.date)).toBeInTheDocument();
			expect(screen.getByText(event.location)).toBeInTheDocument();
		}
	});

	it("renders external links for locations and event details", () => {
		render(<MainBody />);

		for (const team of teamList.filter(Boolean)) {
			for (const link of team.locationLink) {
				expect(document.querySelector(`a[href="${link}"]`)).not.toBeNull();
			}
		}

		for (const event of eventsList) {
			expect(document.querySelector(`a[href="${event.locationLink}"]`)).not.toBeNull();
		}
	});
});
