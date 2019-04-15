import React from "react";


const ImagePreview = ({ imagefile }) =>
    imagefile.map(({ name, preview, size }) => (
        <div key={name} className="render-preview">
            <div className="image-container">
                <img src={preview} alt={name} />
            </div>
            <div className="details">
                {name} - {(size / 1024000).toFixed(2)}MB
            </div>
        </div>
    ));



export default ImagePreview;