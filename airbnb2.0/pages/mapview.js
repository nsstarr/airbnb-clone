import dynamic from "next/dynamic";
const Map = dynamic(() => import("../components/Maps.js"), { ssr: false });

const MapView = () => {
  return (
    <div>
      <Map />
    </div>
  );
}

export default MapView;