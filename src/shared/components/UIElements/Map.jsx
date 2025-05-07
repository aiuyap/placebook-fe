import React, { useEffect, useRef } from 'react';
import './Map.css';

function Map(props) {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    const map = new window.ol.Map({
      target: mapRef.current,
      layers: [
        new window.ol.layer.Tile({
          source: new window.ol.source.OSM(),
        }),
      ],
      view: new window.ol.View({
        center: window.ol.proj.fromLonLat([center.lng, center.lat]),
        zoom: zoom,
      }),
    });

    const markerStyle = new window.ol.style.Style({
      image: new window.ol.style.Icon({
        anchor: [0.5, 1],
        src: 'https://openlayers.org/en/latest/examples/data/icon.png',
      }),
    });

    const marker = new window.ol.Feature({
      geometry: new window.ol.geom.Point(
        window.ol.proj.fromLonLat([center.lng, center.lat])
      ),
    });
    marker.setStyle(markerStyle);

    const vectorLayer = new window.ol.layer.Vector({
      source: new window.ol.source.Vector({
        features: [marker],
      }),
    });

    map.addLayer(vectorLayer);
    return () => {
      map.setTarget(null);
    };
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    ></div>
  );
}

export default Map;
