import React from 'react';
import ImageLoader from './ImageLoader';
import InfoLoader from './InfoLoader';
import './styles.css';

const SetLoaders = () => {
    return (
    <div className="loaders-container">
        <div className="image-loader-item"><ImageLoader /></div>
        <div className="info-loader-item"><InfoLoader /></div>
    </div>
    
)};

export default SetLoaders;