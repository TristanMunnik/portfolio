function AboutPage() {
    return (
        <section id="about" className="about-section page-section">
            <div className="two-column-layout">
                <div className="page-copy-panel">
                    <p className="eyebrow">About.</p>
                    <h2>Building things with intention</h2>
                </div>

                <div className="page-detail-panel about-stack">
                    <p>
                        I’m a developer based in Cape Town, focused on learning, shipping, and improving
                        how people experience the web through thoughtful design and code.
                    </p>
                    <p>
                        I learn best by building real things. I work as Front of House Manager at Deep
                        South Pizzeria in Simon’s Town, so I spend my days listening to customers and
                        solving problems on the spot. That experience shapes how I build: I care about
                        clear communication, simple interfaces, and software that works for the people
                        using it.
                    </p>
                    <p>
                        My projects reflect that. I built a website for the pizzeria, and a full-stack
                        membership system with React, PHP and MySQL that taught me about secure sign-in,
                        validation and database design.
                    </p>
                    <p>
                        I’m now looking for my first role as a junior developer, where I can contribute,
                        learn from experienced engineers, and keep growing.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutPage
