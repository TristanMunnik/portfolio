function ExternalLink({ href, className, children }) {
    return (
        <a href={href} className={className} target="_blank" rel="noreferrer">
            {children}
            <span aria-hidden="true"> ↗</span>
            <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
    )
}

export default ExternalLink
