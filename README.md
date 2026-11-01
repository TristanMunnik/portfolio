# Tristan Munnik | Portfolio

A dark, responsive single-page portfolio built with React and Vite. It presents my projects, background, and contact details on one scrolling page, with a sticky navigation bar that highlights the section in view.

## Requirements

- Node.js and npm

## Getting Started

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Sections

| Section | Content |
| --- | --- |
| Home (`#top`) | Introduction, role, and calls to action |
| Work (`#work`) | Featured projects with screenshots, tech stack, and GitHub links |
| About (`#about`) | Background and skills |
| Off the clock (`#off-the-clock`) | Interests: motorsport, adventures, and the Cape Town coast |
| Contact (`#contact`) | Email and social links |

## Project Structure

```text
src/
	assets/       Hero photo, project screenshots, and off-the-clock photos
	components/   One component per section, plus the header, footer, and external link
	data/         Shared navigation links
	App.jsx       Page layout
	App.css       Component and section styles
	index.css     Colour tokens and global styles
	main.jsx      React application entry point
```

## Featured Projects

- [Cape Bites](https://github.com/TristanMunnik/cape-bites) - Restaurant guide for Asian food in Cape Town, with an interactive map, accounts, and reviews. React, Express, and MongoDB.
- [Gymnastics Academy](https://github.com/TristanMunnik/gymnastics-system) - Membership management app with an administrator dashboard and gymnast portal. React, PHP, and MySQL.
- [Hospital Appointment System](https://github.com/TristanMunnik/hospital-appointment-system) - Role-based appointment and medical record system for patients, doctors, and admins. PHP and MySQL.
- [Deep South Pizzeria](https://github.com/TristanMunnik/deep-south-pizzeria) - Responsive website for a wood-fired pizza shop in Simon's Town. React and Tailwind CSS.

## Image Credits

Project screenshots come from each project's own repository. The photos below are used under Creative Commons licences and are available on Wikimedia Commons.

| Photo | Author | Licence |
| --- | --- | --- |
| [Sunrise over Table Mountain from Milnerton Beach](https://commons.wikimedia.org/wiki/File:10-6-2013_Sunrise_-_Flickr_-_barbourians.jpg) | Ian Barbour | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) |
| [Classic car racing at Killarney International Raceway](https://commons.wikimedia.org/wiki/File:Classic_car_racing_Ford_GT40.jpg) | Gerhard Bothma | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| [Wolfberg Arch, Cederberg](https://commons.wikimedia.org/wiki/File:Wolfberg_Arch_-_Cederberg,_South_Africa_(3918680005).jpg) | South African Tourism | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) |
| [Clifton Beach, Cape Town](https://commons.wikimedia.org/wiki/File:Clifton_Beachs.jpg) | SkyPixels | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
