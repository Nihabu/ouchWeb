# OUCH Website

Official website for **Oslo Ultimate Community Hub (OUCH)**.

This project is a React single-page app used to share:
- Oslo-area team practice information
- upcoming events
- community news
- resources for players
- information about OUCH

## Tech stack

- React 18
- React Router 6
- MUI System (`@mui/system` + Emotion)
- Vite

## Getting started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Install and run

```bash
npm install
npm start
```

The app starts in development mode at `http://localhost:5173`.

## Available scripts

- `npm start` - Run the app locally in development mode
- `npm run build` - Build the production bundle
- `npm test` - Run test suite once with Vitest
- `npm run preview` - Preview the production build locally
- `npm run deploy` - Build and deploy to GitHub Pages via `gh-pages`

## Project structure

```text
src/
  index.js                Router and app entry point
  Header.js               Top navigation + logo
  MainBody.js             Home page layout
  InfoBox.js              Team cards on the home page
  UpcomingEvents.js       Upcoming event cards
  News.js / NewsBox.js    News page and list rendering
  Resources.js            Resource links and embeds
  OUCH.js                 OUCH page content
  teamOverview.js         Team data source
  upcomingEventsList.js   Event data source
  newsList.js             News data source
  theme.js                Shared MUI theme
  images/                 Team photos, icons, and branding assets
public/
  favicon.ico, manifest.json, robots.txt
```

## Content updates

Most site updates can be done by editing data files:

- Team practice info: `src/teamOverview.js`
- Upcoming events: `src/upcomingEventsList.js`
- News posts: `src/newsList.js`
- Header height constant: `src/vars.js`

Update images in `src/images/` and reference them from components as needed.

## Routing

Defined in `src/index.js`:

- `/` - Home
- `/news` - News
- `/resources` - Resources
- `/ouch` - About OUCH

## Deployment notes

- Deployment is configured through `gh-pages` in `package.json`.
- The deploy script publishes the `dist/` folder and sets CNAME to `osloultimate.com`.
- `CNAME` is also present in the repository root.
