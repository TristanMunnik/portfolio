const skills = [
    { group: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
    { group: 'Backend', items: ['Node.js', 'Express', 'PHP', 'REST APIs'] },
    { group: 'Databases', items: ['MongoDB', 'MySQL'] },
    { group: 'Practices', items: ['Authentication', 'CSRF protection', 'Input validation', 'API testing'] },
    { group: 'Tools', items: ['Git', 'GitHub', 'GitHub Actions', 'Netlify'] },
]

function AboutPage() {
    return (
        <section id="about" className="section" aria-labelledby="about-title">
            <div className="container">
                <div className="section-heading">
                    <h2 id="about-title" className="section-title">
                        about
                    </h2>
                    <p className="section-sub">Building things with intention.</p>
                </div>

                <div className="about-copy">
                    <p>
                        I’m a developer based in Cape Town, focused on learning, shipping, and improving how
                        people experience the web through thoughtful design and code.
                    </p>
                    <p>
                        I learn best by building real things. I work as Front of House Manager at Deep South
                        Pizzeria in Simon’s Town, so I spend my days listening to customers and solving
                        problems on the spot. That experience shapes how I build: I care about clear
                        communication, simple interfaces, and software that works for the people using it.
                    </p>
                    <p>
                        My projects reflect that: a restaurant guide with maps and reviews, a hospital
                        appointment system, a membership platform with secure sign-in, and a website for the
                        pizzeria. I’ve completed a Systems Development diploma at Boston City Campus, and I
                        keep learning on my own.
                    </p>
                    <p>
                        I’m now looking for my first role as a junior developer, where I can contribute, learn
                        from experienced engineers, and keep growing.
                    </p>
                </div>

                <div className="skills">
                    {skills.map((skill) => (
                        <div className="skill-group" key={skill.group}>
                            <h3>{skill.group}</h3>
                            <ul className="tag-list">
                                {skill.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutPage
