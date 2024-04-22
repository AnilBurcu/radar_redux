import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import { icon } from "leaflet";

const MapView = ({ setDetailId }) => {
  const { flights } = useSelector((store) => store.flight);

  // marker için kendi iconunu oluştur
  const planeIcon = icon({
    iconUrl: "plane-icon.png",
    iconSize: [30, 30],
  });
  return (
    <MapContainer center={[38.89, 35.43]} zoom={7} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {flights.map((flight) => (
        <Marker icon={planeIcon} position={[flight.lat, flight.lng]}>
          <Popup>
            <div className="d-flex flex-column gap-2">
              <span>Kod: {flight.code}</span>

              <button onClick={() => setDetailId(flight.id)} className="w-100">
                Detay
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
