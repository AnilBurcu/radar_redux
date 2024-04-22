import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const MapView = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={10} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>Merhaba</Popup>
      </Marker>
      <Marker position={[51.555, -0.09]}></Marker>
      <Marker position={[51.655, -0.09]}></Marker>
    </MapContainer>
  );
};

export default MapView;
