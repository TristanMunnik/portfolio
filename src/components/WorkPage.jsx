import ExternalLink from './ExternalLink.jsx'
import capeBitesHome from '../assets/projects/cape-bites-home.webp'
import capeBitesRestaurant from '../assets/projects/cape-bites-restaurant.webp'
import gymnasticsDashboard from '../assets/projects/gymnastics-dashboard.webp'
import hospitalDashboard from '../assets/projects/hospital-dashboard.webp'
import deepSouthHome from '../assets/projects/deep-south-home.webp'

const capeBites = {
    label: 'Latest project',
    title: 'Cape Bites',
    description:
        'A full-stack guide to Asian restaurants in Cape Town. Browse them as a list or on an interactive map, search and filter by cuisine, then sign up to rate and review the places you have tried.',
    stack: ['React', 'Express', 'MongoDB Atlas', 'Mapbox'],
    highlights: [
        'Sign-up and login with server-side sessions and hashed passwords',
        'Star ratings and reviews, with average ratings calculated from the reviews',
        'API tests, plus a GitHub Actions pipeline that also lints and builds the client',
    ],
    github: 'https://github.com/TristanMunnik/cape-bites',
    images: [
        {
            src: capeBitesHome,
            alt: 'Cape Bites home page with a ramen photo behind the title, a search bar, cuisine filters, restaurant cards and a map of Cape Town',
            width: 1600,
            height: 797,
        },
        {
            src: capeBitesRestaurant,
            alt: 'Cape Bites restaurant page with details, a star rating picker and a review form',
            width: 720,
            height: 795,
        },
    ],
}

const projectCards = [
    {
        title: 'Gymnastics Academy',
        description:
            'A membership system for a gymnastics academy. Administrators register and manage gymnasts, and members sign in to see their own profile and print a report or enrollment slip.',
        stack: ['React', 'PHP', 'MySQL'],
        highlights: [
            'Hashed passwords, prepared SQL statements and CSRF protection',
            'Every permission check happens on the server, not in React',
            'Registering a member is one database transaction, and every deletion is logged',
        ],
        github: 'https://github.com/TristanMunnik/gymnastics-system',
        image: {
            src: gymnasticsDashboard,
            alt: 'Gymnastics Academy administrator dashboard with membership summary cards and a searchable table of gymnasts',
            width: 1400,
            height: 729,
        },
    },
    {
        title: 'Hospital Appointment System',
        description:
            'A role-based hospital app. Patients book appointments, doctors manage their schedule and write medical records, and admins manage users and appointments.',
        stack: ['PHP', 'MySQL', 'PDO'],
        highlights: [
            'Separate patient, doctor and admin dashboards, with role checks on the server',
            'bcrypt password hashing, CSRF tokens and output escaping against XSS',
            'Session IDs regenerated on login to prevent session fixation',
        ],
        github: 'https://github.com/TristanMunnik/hospital-appointment-system',
        image: {
            src: hospitalDashboard,
            alt: 'Hospital system patient dashboard listing appointments and medical records',
            width: 1200,
            height: 750,
        },
    },
]

const deepSouth = {
    label: 'Real business',
    title: 'Deep South Pizzeria',
    description:
        'A responsive website for the wood-fired pizza shop in Simon’s Town where I work. Built from the shop’s real menu, photos and signage.',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    highlights: ['Sticky navigation with smooth scrolling and a mobile menu', 'Reviews carousel and tap-to-call links'],
    github: 'https://github.com/TristanMunnik/deep-south-pizzeria',
    image: {
        src: deepSouthHome,
        alt: 'Deep South Pizzeria website with a pizza photo behind the title and the start of the menu',
        width: 1400,
        height: 706,
    },
}

function Shot({ image, className = '' }) {
    return (
        <div className={`project-shot ${className}`.trim()}>
            <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" />
        </div>
    )
}

function ProjectBody({ project }) {
    return (
        <div className="project-body">
            {project.label && <p className="project-label">{project.label}</p>}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tag-list" aria-label="Tech stack">
                {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>
            <ul className="highlight-list">
                {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <div className="link-row">
                <ExternalLink href={project.github} className="button button-primary button-small">
                    view on GitHub
                </ExternalLink>
            </div>
        </div>
    )
}

function WorkPage() {
    return (
        <section id="work" className="section" aria-labelledby="work-title">
            <div className="container">
                <div className="section-heading">
                    <h2 id="work-title" className="section-title">
                        work
                    </h2>
                    <p className="section-sub">A few things I’ve built, and where to find the rest.</p>
                </div>

                <div className="projects">
                    <article className="project-row">
                        <div className="project-media project-media-stack">
                            <Shot image={capeBites.images[0]} />
                            <Shot image={capeBites.images[1]} className="project-shot-secondary" />
                        </div>
                        <ProjectBody project={capeBites} />
                    </article>

                    <div className="project-grid">
                        {projectCards.map((project) => (
                            <article className="project-card" key={project.title}>
                                <Shot image={project.image} />
                                <ProjectBody project={project} />
                            </article>
                        ))}
                    </div>

                    <article className="project-row project-row-reverse">
                        <div className="project-media">
                            <Shot image={deepSouth.image} />
                        </div>
                        <ProjectBody project={deepSouth} />
                    </article>

                    <div className="more-row">
                        <div>
                            <h3>More</h3>
                            <p>The rest of my code is on GitHub, and my work history is on LinkedIn.</p>
                        </div>
                        <div className="link-row">
                            <ExternalLink href="https://github.com/TristanMunnik" className="button button-primary button-small">
                                more on GitHub
                            </ExternalLink>
                            <ExternalLink
                                href="https://www.linkedin.com/in/tristanmunnik/"
                                className="button button-outline button-small"
                            >
                                view LinkedIn
                            </ExternalLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkPage
