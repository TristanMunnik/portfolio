import ExternalLink from './ExternalLink.jsx'
import navLinks from '../data/navLinks.js'

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <nav aria-label="Footer">
                    <ul className="footer-nav">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a href={`#${link.id}`}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <p>© {new Date().getFullYear()} Tristan Munnik</p>
                <p className="footer-credits">
                    Hero photo: sunrise over Table Mountain from Milnerton Beach by{' '}
                    <ExternalLink href="https://commons.wikimedia.org/wiki/File:10-6-2013_Sunrise_-_Flickr_-_barbourians.jpg">
                        Ian Barbour
                    </ExternalLink>
                    ,{' '}
                    <ExternalLink href="https://creativecommons.org/licenses/by-sa/2.0/">CC BY-SA 2.0</ExternalLink>.
                </p>
            </div>
        </footer>
    )
}

export default Footer
