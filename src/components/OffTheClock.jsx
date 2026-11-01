import ExternalLink from './ExternalLink.jsx'
import racing from '../assets/off-the-clock/racing-killarney.webp'
import adventure from '../assets/off-the-clock/adventure-wolfberg-arch.webp'
import beach from '../assets/off-the-clock/beach-clifton.webp'

const ccBySa4 = 'https://creativecommons.org/licenses/by-sa/4.0/'

const interests = [
    {
        title: 'Motorsport',
        caption: 'Classic racing at Killarney Raceway, Cape Town.',
        image: racing,
        alt: 'Classic Ford GT40 race cars on the track at Killarney International Raceway in Cape Town',
        credit: {
            author: 'Gerhard Bothma',
            page: 'https://commons.wikimedia.org/wiki/File:Classic_car_racing_Ford_GT40.jpg',
            license: 'CC BY-SA 4.0',
            licenseUrl: ccBySa4,
        },
    },
    {
        title: 'Adventures',
        caption: 'Wolfberg Arch, Cederberg.',
        image: adventure,
        alt: 'Orange sandstone rock arch against a blue sky at Wolfberg Arch in the Cederberg mountains',
        credit: {
            author: 'South African Tourism',
            page: 'https://commons.wikimedia.org/wiki/File:Wolfberg_Arch_-_Cederberg,_South_Africa_(3918680005).jpg',
            license: 'CC BY 2.0',
            licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
        },
    },
    {
        title: 'The coast',
        caption: 'Clifton, Cape Town.',
        image: beach,
        alt: 'Aerial view of turquoise water and white sand at Clifton beach in Cape Town',
        credit: {
            author: 'SkyPixels',
            page: 'https://commons.wikimedia.org/wiki/File:Clifton_Beachs.jpg',
            license: 'CC BY-SA 4.0',
            licenseUrl: ccBySa4,
        },
    },
]

function OffTheClock() {
    return (
        <section id="off-the-clock" className="section" aria-labelledby="off-the-clock-title">
            <div className="container">
                <div className="section-heading">
                    <h2 id="off-the-clock-title" className="section-title">
                        off the clock
                    </h2>
                    <p className="section-sub">Motorsport, adventures and the Cape Town coast, mostly.</p>
                </div>

                <ul className="interest-grid">
                    {interests.map((interest) => (
                        <li key={interest.title}>
                            <figure className="interest-card">
                                <img src={interest.image} alt={interest.alt} loading="lazy" />
                                <figcaption>
                                    <h3>{interest.title}</h3>
                                    <p>{interest.caption}</p>
                                    <p className="photo-credit">
                                        Photo by{' '}
                                        <ExternalLink href={interest.credit.page}>{interest.credit.author}</ExternalLink>,{' '}
                                        <ExternalLink href={interest.credit.licenseUrl}>{interest.credit.license}</ExternalLink>
                                    </p>
                                </figcaption>
                            </figure>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default OffTheClock
