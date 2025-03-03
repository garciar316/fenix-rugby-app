import React from 'react';

interface Props {
    source: string;
    alt: string;
}

const ContentImage: React.FC<Props> = ({ source, alt }) => {
    return (
        <img
            src={source}
            alt={alt}
            style={{
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '10px'
            }}
        />
    );
};

export default ContentImage;