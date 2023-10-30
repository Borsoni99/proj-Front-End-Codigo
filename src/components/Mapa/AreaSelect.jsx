import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function AreaSelect({ markers }) {
  const mapa = useMap();

  useEffect(() => {
    if (!mapa.selectArea) return;

    mapa.selectArea.enable();

    mapa.on("areaselected", (e) => {
      //L.rectangle(e.bounds, { color: "blue", weight: 1 }).addTo(mapa);/
      const selectedAreaBounds = e.bounds;
      const selectedMarkers = markers.filter((marker) =>
        selectedAreaBounds.contains(marker.geocode)
      );

      console.log("Selected Markers:", selectedMarkers);
    });

    // You can restrict selection area like this:
    const bounds = mapa.getBounds().pad(-0.25); // save current map bounds as restriction area
    // check restricted area on start and move
    mapa.selectArea.setValidate((layerPoint) => {
      return bounds.contains(this._mapa.layerPointToLatLng(layerPoint));
    });

    mapa.selectArea.setValidate();
  }, [mapa, markers]);

  return null;
}