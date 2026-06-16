# Planet — Explore Our Solar System Through Data

A React web application that explores our solar system through data. Built as a capstone project for the TS Academy Frontend Development course.

## Live Demo
https://solar-system-capstone.netlify.app/

## Project Summary
This application recreates a provided mockup as a fully working React web app. It fetches real planet data from an external API and displays it in a responsive grid. It also includes a comparative NASA data table, a validated contact form, and a responsive design for both desktop and mobile.

## Team Members
| Name          | GitHub                                     |
|---------------|--------------------------------------------|
| Benjamin      | [@JAMIN-exe](https://github.com/JAMIN-exe) |

## Components
| Component         | Description                                                | Developer |
|-------------------|------------------------------------------------------------|-----------|
| `Hero.jsx`        | Hero section with logo, title, description and CTA buttons | Benjamin  |
| `PlanetVideo.jsx` | Autoplay video section with description                    | Benjamin  |
| `PlanetGrid.jsx`  | Fetches and displays planet cards from API                 | Benjamin  |
| `PlanetCard.jsx`  | Individual planet card with figure element                 | Benjamin  |
| `PlanetTable.jsx` | NASA planetary facts comparison table                      | Benjamin  |
| `ContactForm.jsx` | Validated form with submission to endpoint                 | Benjamin  |
| `Footer.jsx`      | Footer with about section and links                        | Benjamin  |

## How to Run Locally
1. Clone the repository:
```bash
git clone https://github.com/JAMIN-exe/solar-system-capstone.git
```
2. Navigate into the project folder:
```bash
cd your-repo-name
```
3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm run dev
```
5. Open your browser and go to `http://localhost:5173`

## Tech Stack
- React
- Vite
- CSS
- Fetch API
