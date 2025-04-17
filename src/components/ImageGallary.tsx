// app/components/ImageGallery.tsx
"use client";

import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

type GalleryImage = {
  original: string;
  thumbnail: string;
};

type Props = {
  images: GalleryImage[];
};

export const Gallery: React.FC<Props> = ({ images }) => {
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      showFullscreenButton={true}
      thumbnailPosition="bottom"
    />
  );
};
