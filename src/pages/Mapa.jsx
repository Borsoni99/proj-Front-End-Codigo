import "../components/Mapa/styles.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import AreaSelect from "../components/Mapa/AreaSelect";

const markers = [
  {
    geocode: [-23.005799390382244, -43.313602068535985],
    popUp: "Ibmec Barra",
  },
  {
    geocode: [-22.997741649198378, -43.358128330416584],
    popUp: "Barra Shopping",
  },
  {
    geocode: [-22.955983568491277, -43.33723170150643],
    popUp: "Park Jacarepagua",
  },
  {
    geocode: [-22.937233441170832, -43.343817659716606],
    popUp: "Garriga de Menezes",
  },
];

const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776067.png",
  /* iconUrl: require("./img/_nomeImagem_") */
  iconSize: [38, 38],
});

const createCustomClusterIcon = (cluster) => {
  return new divIcon({
    html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};
function MAPA() {
  return (
    <div style={{ padding: "5vw", margin: "15hv" }}>
      <h1>MAPA</h1>
      <div>
        <MapContainer
          center={[-22.9921, -43.3249]}
          zoom={13}
          style={{ height: "90vh", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup
            chunckedLoading
            iconCreateFunction={createCustomClusterIcon}
          >
            {markers.map((marker) => (
              <Marker position={marker.geocode} icon={customIcon}>
                <Popup>{marker.popUp}</Popup>
              </Marker>
            ))}
            ;
          </MarkerClusterGroup>
          <AreaSelect markers={markers} />
        </MapContainer>
      </div>
    </div>
  );
}

export default MAPA;
