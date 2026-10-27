const projectCards = [
    {
        title: 'Deep South Pizzeria',
        subtitle: 'Restaurant website concept and digital menu experience.',
        link: 'https://github.com/TristanMunnik/deep-south-pizzeria',
    },
    {
        title: 'Gymnastics Academy',
        subtitle: 'Membership management app with an admin dashboard and gymnast portal, built with React, PHP, and MySQL.',
        link: 'https://github.com/TristanMunnik/gymnastics-system',
    },
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
                        {projectCards.map((project, index) => {
                            const cardContent = (
                                <>
                                    <span className="card-index">0{index + 1}</span>
                                    <h3>{project.title}</h3>
                                    <p>{project.subtitle}</p>
                                </>
                            )

                            return (
                                <div className="project-entry" key={project.title}>
                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-card project-card-link"
                                        >
                                            {cardContent}
                                        </a>
                                    ) : (
                                        <article className="project-card">{cardContent}</article>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkPage
