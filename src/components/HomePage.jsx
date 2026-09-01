function HomePage() {
    return (
        <section id="home" className="hero-section page-section home-page">
            <div className="two-column-layout">
                <div className="page-copy-panel">
                    <p className="eyebrow">This is me.</p>
                    <h1 className="hero-name">Tristan Munnik</h1>
                </div>

                <div className="page-detail-panel">
                    <p className="intro-copy">
                        Developer
                        <span className="intro-divider">•</span>
                        Creator
                        <span className="intro-divider">•</span>
                        Enthusiast
                    </p>
                    <p>
                        I build thoughtful digital experiences, learn through real projects, and keep
                        refining my craft with every new idea I ship.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HomePage
