import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from "react-leaflet";

function Maps() {
    return (
      <MapContainer className="h-[100vh] w-[100vh]" center={[51.5007, 0.1246]} zoom={13} scrollWheelZoom={true
      }>
      <TileLayer
        attribution='&amp;copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      </MapContainer>
    );
}

export default Maps;
