'use client'
import React, { useState, useEffect } from 'react';
import { Map, Marker, Popup, NavigationControl, GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FaCar } from 'react-icons/fa';
import classes from "./map.module.css";

const Track = () => {
  const [vehicleLocations, setVehicleLocations] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const accessToken = 'pk.eyJ1IjoiamVyeWRhbSIsImEiOiJjbG82ZHV4Nm4wbHNxMmptdm1lcDh3cXk1In0.tuRnKgTxnUigcE4m2QqqNg';

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
          setVehicleLocations(data);
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
	
				maxZoom={20}
				minZoom={-2}
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
            <FaCar
              size={20}
              color="#FF0000" // Adjust the color as needed
              onClick={() => setSelectedMarker(location)}
              className="cursor-pointer"
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
              {/* <p>Latitude: {selectedMarker.vehicle.vehicle_name}</p> */}
              {/* <p>Longitude: {selectedMarker.vehicle.longitude}</p> */}
              {/* Add more details as needed */}
            </div>
          </Popup>
        ) : null}
      </Map>
    </main>
  );
};

export default Track;
