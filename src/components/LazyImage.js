'use client'; // Mark this as a client component

import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Import blur effect CSS

const LazyImage = ({ src, alt, height, width, effect = 'blur', loading = 'lazy' }) => {
    return (
      <LazyLoadImage
        src={src}
        alt={alt}
        effect={effect}
        height={height}
        width={width}
        loading={loading}
        style={{display: 'flex', height: `${height}`}}
      />
    );
  };
  

export default LazyImage;
