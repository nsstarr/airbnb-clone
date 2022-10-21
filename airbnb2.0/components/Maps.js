import Map from "react-map-gl";

function Maps() {
    const [viewport, setViewPort] = useState({
      width: "100%",
      height: "100%",
      longitude: -100,
      latitude: 40,
      zoom: 11,
    });
    return (
    <Map
      mapStyle="mapbox://styles/nsstarr/cl9ilseru00d315ogvimvdsig"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
    ></Map>
  );
}

export default Map;
