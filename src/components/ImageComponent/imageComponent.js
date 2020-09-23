import React from 'react';

const ImageComponent = (props) => { 

    const { alt, src, klass, imgClass } = props;

    return (
      <div className={klass}>
        <img src={src} className={imgClass} alt={alt} />
      </div>
    );
}

export default ImageComponent;
