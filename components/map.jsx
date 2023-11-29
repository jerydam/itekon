import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiamVyeWRhbSIsImEiOiJjbG82ZHV4Nm4wbHNxMmptdm1lcDh3cXk1In0.tuRnKgTxnUigcE4m2QqqNg';

const Map = () => {
  const [location, setLocation] = useState(null);

  // Function to fetch device location from your backend API
  const fetchDeviceLocation = async () => {
    try {
      const response = await fetch(`https://itekton.onrender.com/vehicles/${vehicle_id}/last_location/`);
      const data = await response.json();

      if (response.ok) {
        setLocation({
          latitude: data.latitude,
          longitude: data.longitude,
        });
      } else {
        console.error('Error fetching device location:', data.error);
      }
    } catch (error) {
      console.error('Error fetching device location:', error);
    }
  };

  // Function to update backend with the current device location
  const updateBackendLocation = async (latitude, longitude) => {
    try {
      const response = await fetch(`https://itekton.onrender.com/vehicles/${vehicle_id}/location/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          latitude,
          longitude,
        }),
      });

      if (!response.ok) {
        console.error('Error updating device location on backend:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating device location on backend:', error);
    }
  };

  useEffect(() => {
    // Watch for changes in device location
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        updateBackendLocation(latitude, longitude);
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );

    // Fetch initial device location
    fetchDeviceLocation();

    // Cleanup: Stop watching for location changes when the component unmounts
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  useEffect(() => {
    // Display location on the map
    if (location) {
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [location.longitude, location.latitude],
        zoom: 15,
      });

      new mapboxgl.Marker().setLngLat([location.longitude, location.latitude]).addTo(map);

      // Cleanup: Remove the map when the component unmounts
      return () => {
        map.remove();
      };
    }
  }, [location]);

  return (
    <div className="mt-8 p-4 bg-gray-100 border rounded-md">
      <div id="map" className="w-full h-96"></div>
    </div>
  );
};

export default Map;
