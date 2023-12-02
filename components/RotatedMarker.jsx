import React from 'react';
import { Marker } from 'mapbox-gl';

const RotatedMarker = ({ element, rotation, lngLat }) => {
  const marker = new Marker({ element, anchor: 'center' });

  // Set rotation angle
  marker.setRotation(rotation);

  // Set marker position
  marker.setLngLat(lngLat);

  // Set marker size (width and height)
  marker.getElement().style.width = '30px'; // adjust as needed
  marker.getElement().style.height = '30px'; // adjust as needed

  return marker;
};

export default RotatedMarker;
