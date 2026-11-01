import { useEffect, useState } from 'react'
import navLinks from '../data/navLinks.js'

const watchedIds = ['top', ...navLinks.map((link) => link.id)]

function Header() {
    const [activeId, setActiveId] = useState('top')

    useEffect(() => {
        // A thin band across the middle of the screen decides which section is current
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id)
                })
            },
            { rootMargin: '-40% 0px -55% 0px' },
        )

        watchedIds.forEach((id) => {
            const section = document.getElementById(id)
            if (section) observer.observe(section)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <header className="site-header">
            <div className="container header-inner">
                <a className="logo" href="#top" aria-label="Tristan Munnik, back to the top">
                    tm
                </a>
                <nav aria-label="Main">
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    aria-current={activeId === link.id ? 'location' : undefined}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
