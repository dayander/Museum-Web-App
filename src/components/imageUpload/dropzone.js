import React from "react";

import DropZone from "react-dropzone";
import ImagePreview from "./imagePreview";
import Placeholder from "./placeholder";


const DropZoneField = ({
                           handleOnDrop,
                           input: { onChange },
                           imagefile,
                           meta: { error, touched }
                       }) => (
    <div className="preview-container">
        <DropZone
            accept="image/jpeg, image/png, image/gif, image/bmp"
            className="upload-container"
            onDrop={file => handleOnDrop(file, onChange)}
            multiple={false}
        >

            }
        </DropZone>

    </div>
);



export default DropZoneField;