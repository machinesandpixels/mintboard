import React, { useState, useEffect } from "react";
import { Layer, Image } from "react-konva";

const getMapAsset = () => require(`../assets/whiteboard.png`);

const BackgroundLayer = ({ mapSize }) => {

  const [image, setImage] = useState(null);

  useEffect(() => {
    const image = new window.Image();
      image.src = getMapAsset();
      image.onload = () => {
        setImage(image);
      };
  });
  
  return (
    <Layer>
      <Image image={image} height={mapSize} width={mapSize} />
    </Layer>
  )
}

export default BackgroundLayer;
