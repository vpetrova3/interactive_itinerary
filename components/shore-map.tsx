'use client';

import { useEffect, useRef, useState } from 'react';
import type {
  Map as LeafletMap,
  Marker as LeafletMarker,
  Polyline as LeafletPolyline,
} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import type { ShoreDay } from '@/lib/shore-itineraries';

type LeafletLibrary = typeof import('leaflet');

type ShoreMapProps = {
  day: ShoreDay;
  activeStop: number;
  onSelectStop: (index: number) => void;
};

export function ShoreMap({ day, activeStop, onSelectStop }: ShoreMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const leafletRef = useRef<LeafletLibrary | null>(null);
  const markersRef = useRef<LeafletMarker[]>([]);
  const routeRef = useRef<LeafletPolyline | null>(null);
  const onSelectRef = useRef(onSelectStop);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    onSelectRef.current = onSelectStop;
  }, [onSelectStop]);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    let cancelled = false;

    void import('leaflet').then((leaflet) => {
      if (cancelled || !containerRef.current) return;

      const map = leaflet.map(containerRef.current, {
        zoomControl: true,
        attributionControl: true,
      });

      leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      leafletRef.current = leaflet;
      mapRef.current = map;
      setReady(true);
    });

    return () => {
      cancelled = true;
      markersRef.current.forEach((marker) => marker.remove());
      routeRef.current?.remove();
      mapRef.current?.remove();
      markersRef.current = [];
      routeRef.current = null;
      mapRef.current = null;
      leafletRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    const leaflet = leafletRef.current;
    if (!map || !leaflet || !ready) return;

    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];
    routeRef.current?.remove();

    const routeCoordinates = [
      day.origin.coordinates,
      ...day.stops.map((stop) => stop.coordinates),
      ...(day.returnPlan ? [day.origin.coordinates] : []),
    ];
    const latLngs = routeCoordinates.map(([longitude, latitude]) => leaflet.latLng(latitude, longitude));

    routeRef.current = leaflet.polyline(latLngs, {
      color: '#b85540',
      weight: 4,
      opacity: 0.82,
      dashArray: '7 7',
      lineCap: 'round',
      lineJoin: 'round',
    }).addTo(map);

    const portIcon = leaflet.divIcon({
      className: 'shore-marker-shell',
      html: '<span class="shore-marker port-marker" aria-hidden="true">⚓</span>',
      iconSize: [34, 34],
      iconAnchor: [17, 17],
    });
    markersRef.current.push(
      leaflet.marker([day.origin.coordinates[1], day.origin.coordinates[0]], { icon: portIcon, interactive: false })
        .addTo(map),
    );

    day.stops.forEach((stop, index) => {
      const icon = leaflet.divIcon({
        className: 'shore-marker-shell',
        html: `<span class="shore-marker${index === activeStop ? ' active' : ''}" aria-hidden="true">${index + 1}</span>`,
        iconSize: [31, 31],
        iconAnchor: [15.5, 15.5],
      });

      const marker = leaflet.marker([stop.coordinates[1], stop.coordinates[0]], {
        icon,
        title: `${index + 1}. ${stop.name}`,
        alt: `${index + 1}. ${stop.name}`,
      })
        .bindPopup(`${stop.time} · ${stop.name}`, { closeButton: false, offset: [0, -12] })
        .on('click', () => onSelectRef.current(index))
        .addTo(map);
      markersRef.current.push(marker);
    });

    map.fitBounds(leaflet.latLngBounds(latLngs), {
      paddingTopLeft: [50, 58],
      paddingBottomRight: [50, 52],
      maxZoom: 13,
      animate: true,
    });
  }, [activeStop, day, ready]);

  useEffect(() => {
    const map = mapRef.current;
    const stop = day.stops[activeStop];
    if (!map || !ready || !stop) return;
    map.panTo([stop.coordinates[1], stop.coordinates[0]], { animate: true, duration: 0.45 });
  }, [activeStop, day.stops, ready]);

  return (
    <div className="shore-map-wrap">
      <div ref={containerRef} className="shore-map" aria-label={`Interactive map for ${day.city}`} />
      <div className="shore-map-key">
        <span><i className="map-key-port">⚓</i> Expected berth</span>
        <span><i className="map-key-stop">1</i> Planned stop</span>
        <span>Map data © OpenStreetMap contributors</span>
      </div>
    </div>
  );
}
