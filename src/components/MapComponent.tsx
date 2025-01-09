import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Manually define the default marker icon
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png';

// Fix the icon by setting the icon manually
const DefaultIcon = L.icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  shadowSize: [41, 41], // size of the shadow
});

L.Marker.prototype.options.icon = DefaultIcon;

// Define the Props type
interface MapComponentProps {
  lat?: number; // Latitude is optional
  lng?: number; // Longitude is optional
}

const MapComponent: React.FC<MapComponentProps> = ({ lat, lng }) => {
  // Set default position to a specific latitude and longitude
  const [position, setPosition] = useState<[number, number]>([18.5897315, 73.9542139]);

  useEffect(() => {
    if (lat !== undefined && lng !== undefined) {
      setPosition([lat, lng]);
    }
  }, [lat, lng]);

  const handleMarkerClick = () => {
    const googleMapsUrl = `https://maps.app.goo.gl/dpd6KSxWUmkW7zc87`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <MapContainer center={position} zoom={13} style={{ height: '50vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} eventHandlers={{ click: handleMarkerClick }}>
        <Popup>
          A marker at [{position[0]}, {position[1]}]. Click to open in Google Maps.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
