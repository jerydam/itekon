'use client'
import React, { useState, useEffect } from 'react';
import { Map, Marker, Popup, NavigationControl, GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import classes from "./map.module.css";
import { carImages } from '..';

const MapComponent = () => {
  const [vehicleLocations, setVehicleLocations] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const accessToken = 'pk.eyJ1IjoiY3liZXJoYWNrYiIsImEiOiJjbHMwNmk2aHIxb3o1MmtwcWt2ZmFsd3VmIn0.I3Se25FRhkF68tjORmngng';

  const getMarkerColor = (vehicleColor) => {
    switch (vehicleColor) {
      case 'red':
        return 'red';
      case 'blue':
        return 'blue';
      case 'yellow':
        return 'yellow';
      case 'black':
        return 'black';
      default:
        return 'default';
    }
  };

  useEffect(() => {
    const fetchVehicleLocations = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await fetch('https://itekton.onrender.com/vehicles/fleet/vehicle_locations/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          // Map vehicle color to color-specific image source
          const locationsWithImages = data.map(location => {
            const markerColor = getMarkerColor(location.vehicle.color);
            const imageSource = carImages[markerColor] || carImages.default;

            return {
              ...location,
              imageSource,
            };
          });

          setVehicleLocations(locationsWithImages);
        } else {
          console.error('Error getting vehicle locations:', data.error);
        }
      } catch (error) {
        console.error('Error fetching vehicle locations:', error);
      }
    };

    fetchVehicleLocations();
  }, []);

  return (
    <main id='map' className="flex h-full rounded-md">
      <Map
        mapboxAccessToken={accessToken}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        style={classes.mapStyle}
        maxZoom={200}
        minZoom={5}
      >
        {/* Geolocate and Navigation controls */}
        <GeolocateControl />
        <NavigationControl />

        {/* Vehicle Markers */}
        {vehicleLocations.map((location, index) => (
          <Marker
            key={index}
            longitude={location.longitude}
            latitude={location.latitude}
          >
            {/* Use the custom car image instead of the FaCar icon */}
            <img
              src={carImage}
              alt={`Car Marker ${index}`}
              onClick={() => setSelectedMarker(location)}
              className="cursor-pointer"
              style={{ width: '50px', height: '50px' }} // Adjust the size as needed
            />
          </Marker>
        ))}

        {selectedMarker ? (
          <Popup
            offset={25}
            latitude={selectedMarker?.latitude}
            longitude={selectedMarker?.longitude}
            onClose={() => setSelectedMarker(null)}
            closeButton={false}
          >
            {/* Adjust popup content based on your data */}
            <div className="text-center bg-black text-white">
              <h3 className="text-lg font-bold mb-2">Vehicle Info</h3>
              {/* Add more details as needed */}
            </div>
          </Popup>
        ) : null}
      </Map>
    </main>
  );
};

export default MapComponent;
