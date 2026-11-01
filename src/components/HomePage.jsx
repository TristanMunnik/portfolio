import heroPhoto from '../assets/hero-milnerton.webp'

function HomePage() {
    return (
        <section id="top" className="hero">
            <div className="container hero-inner">
                <div className="hero-copy">
                    <p className="hero-kicker">
                        hi, I’m <strong>Tristan Munnik</strong>
                        <span className="hero-divider" aria-hidden="true">
                            /
                        </span>
                        <span className="accent">junior full-stack developer</span>
                    </p>
                    <h1>I build web apps from the database to the screen.</h1>
                    <p className="hero-intro">
                        I enjoy turning real problems into software that is simple, secure and easy to use.
                        Based in Cape Town and looking for my first junior role.
                    </p>
                    <div className="button-row">
                        <a className="button button-primary" href="#contact">
                            contact me
                        </a>
                        <a className="button button-outline" href="#work">
                            view work
                        </a>
                    </div>
                </div>

                <figure className="hero-photo">
                    <img
                        src={heroPhoto}
                        alt="Sunrise over Table Mountain, seen from Milnerton Beach in Cape Town"
                        width="640"
                        height="799"
                    />
                </figure>
            </div>
        </section>
    )
}

export default HomePage
