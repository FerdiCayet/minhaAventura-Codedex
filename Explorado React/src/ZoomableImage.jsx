import { useState } from 'react';

export default function ZoomableImage(props) {
    const [isZoomed, setIsZoomed] = useState(false);

    const handleZoomIn = () => {
        setIsZoomed(true);
    };

    const handleZoomOut = () => {
        setIsZoomed(false);
    };

    return (
        <div className="image-div">
            <img
                className="picture-frame"
                tabIndex={0}
                src={props.imageURL}
                alt="Zoomable"
                style={{
                    width: isZoomed ? `${props.zoomFactor * 100}%` : '100%',
                    transition: 'width 0.5s',
                    cursor: 'pointer'
                }}
                onFocus={handleZoomIn}
                onBlur={handleZoomOut}
            />
        </div>
    );
}
