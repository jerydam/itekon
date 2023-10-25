'use client'
import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'styles/global.css';

const MapComponent = ({ onLocationSelect }) => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  const handleMapClick = (event) => {
    const [longitude, latitude] = event.lngLat;
    onLocationSelect && onLocationSelect({ latitude, longitude });
  };

  return (
    <div className="h-80vh w-full">
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => setViewport(viewport)}
        onClick={handleMapClick}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'YOUR_MAPBOX_TOKEN'}
      >
        <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
          <div className="bg-blue-500 text-white p-2 rounded">You are here</div>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default MapComponent;
