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
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        {...viewport}
      ></Map>
    );
}

export default Map;
