export default function TravelGallery() {
    const barcelonaImage = <img src="https://i.imgur.com/qaQNzqi.png" alt="Barcelona" className="imgCity" />;
    const tokyoImage = <img src="https://i.imgur.com/OAx1wzO.png" alt="Tokyo" className="imgCity" />;
    const ohioImage = <img src="https://i.imgur.com/CxJjltu.png" alt="Ohio" className="imgCity" />;

    const imageGallery = [barcelonaImage, tokyoImage, ohioImage];

    return (
        <ul style={{ display: 'flex', flexWrap: 'wrap', listStyleType: 'none', height: '150px' }}>
            {imageGallery.map((image, idx) => (
                <li key={idx}>{image}</li>
            ))}
        </ul>
    );
}
