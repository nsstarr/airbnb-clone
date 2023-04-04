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
        mapStyle="mapbox://styles/anastasia-dev/clg2happj001j01p4ibzrc6ue"
        // mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        {...viewport}
      ></Map>
    );
}

export default Map;
