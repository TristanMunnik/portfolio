const projectCards = [
    {
        title: 'Deep South Pizzeria',
        subtitle: 'Restaurant website concept and digital menu experience.',
        link: 'https://github.com/TristanMunnik/deep-south-pizzeria',
    },
    { title: 'Project Two', subtitle: 'Coming soon' },
    { title: 'Project Three', subtitle: 'Coming soon' },
]

function WorkPage() {
    return (
        <section id="work" className="work-section page-section">
            <div className="two-column-layout">
                <div className="page-copy-panel">
                    <p className="eyebrow">Tech.</p>
                    <h2>Work / projects</h2>
                </div>

                <div className="page-detail-panel">
                    <div className="project-grid">
                        {projectCards.map((project, index) => (
                            project.link ? (
                                <a
                                    key={project.title}
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-card project-card-link"
                                >
                                    <span className="card-index">0{index + 1}</span>
                                    <h3>{project.title}</h3>
                                    <p>{project.subtitle}</p>
                                </a>
                            ) : (
                                <article key={project.title} className="project-card">
                                    <span className="card-index">0{index + 1}</span>
                                    <h3>{project.title}</h3>
                                    <p>{project.subtitle}</p>
                                </article>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkPage
