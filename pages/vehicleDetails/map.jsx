// import React, { useState } from 'react';
// import ReactMapGL, { Marker } from 'react-map-gl';

// const MapComponent = ({ onLocationSelect }) => {
//   const [viewport, setViewport] = useState({
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 8,
//   });

//   const handleMapClick = (event) => {
//     const [longitude, latitude] = event.lngLat;
//     onLocationSelect({ latitude, longitude });
//   };

//   return (
//     <div style={{ height: '80vh', width: '100%' }}>
//       <ReactMapGL
//         {...viewport}
//         width="100%"
//         height="100%"
//         mapStyle="mapbox://styles/mapbox/streets-v11"
//         onViewportChange={(viewport) => setViewport(viewport)}
//         onClick={handleMapClick}
//         mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
//       >
//         <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
//           <div>You are here</div>
//         </Marker>
//       </ReactMapGL>
//     </div>
//   );
// };

// export default MapComponent;


import React from 'react'

const map = () => {
  return (
    <div>map</div>
  )
}

export default map