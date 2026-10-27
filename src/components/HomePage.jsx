import milnertonBeach from '../assets/milnerton-beach.jpg'

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
                    <figure className="home-image">
                        <img
                            src={milnertonBeach}
                            alt="Sunrise across Milnerton Beach toward Table Mountain in Cape Town"
                        />
                        <figcaption>
                            Milnerton Beach, Cape Town. Photo by{' '}
                            <a
                                href="https://commons.wikimedia.org/wiki/File:10-6-2013_Sunrise_-_Flickr_-_barbourians.jpg"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Ian Barbour
                            </a>{' '}
                            under{' '}
                            <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noreferrer">
                                CC BY-SA 2.0
                            </a>
                            .
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default HomePage
