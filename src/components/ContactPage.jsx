import ExternalLink from './ExternalLink.jsx'

function ContactPage() {
    return (
        <section id="contact" className="section contact" aria-labelledby="contact-title">
            <div className="container">
                <div className="section-heading">
                    <h2 id="contact-title" className="section-title">
                        contact
                    </h2>
                    <p className="section-sub">
                        I’m looking for my first junior developer role. Email is the quickest way to reach me.
                    </p>
                </div>

                <a className="button button-primary button-large" href="mailto:tristanmunnik3@gmail.com">
                    tristanmunnik3@gmail.com
                </a>

                <ul className="social-links">
                    <li>
                        <ExternalLink href="https://github.com/TristanMunnik" className="button button-outline button-small">
                            GitHub
                        </ExternalLink>
                    </li>
                    <li>
                        <ExternalLink
                            href="https://www.linkedin.com/in/tristanmunnik/"
                            className="button button-outline button-small"
                        >
                            LinkedIn
                        </ExternalLink>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default ContactPage
