import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";

function LocationMarker({ setLocation }) {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      setLocation(e.latlng); // Parentga jo‘natamiz
    },
  });

  return position === null ? null : <Marker position={position}></Marker>;
}

export default function MapPicker({ setLocation }) {
  return (
    <MapContainer
      center={[41.3111, 69.2797]} // Toshkent default
      zoom={12}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker setLocation={setLocation} />
    </MapContainer>
  );
}
