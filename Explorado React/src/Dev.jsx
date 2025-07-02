import './Dev.css';

export default function Dev() {
    const catalogItems = [
        {
            name: 'Dan',
            category: 'Developer',
            website: 'https://dandeveloper.dev'
        },
        {
            name: 'Lucas',
            category: 'Frontend Developer',
            website: 'https://lucasdev.dev'
        },
        {
            name: 'Paulo',
            category: 'Fullstack Developer',
            website: 'https://vercel.paulodev.com'
        }
    ];

    return (
        <section className="dev-container">
            {catalogItems.map((item, index) => (
                <div key={index} className="dev-card">
                    <h2 className="dev-name">{item.name}</h2>
                    <p className="dev-category">Specialty: {item.category}</p>
                    <a className="dev-link" href={item.website} target="_blank" rel="noopener noreferrer">
                        Learn more
                    </a>
                </div>
            ))}
        </section>
    );
}
