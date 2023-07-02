import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export const Map = () => {
  const myPosition = [52.0623013678065, 4.314696500970514];
  return (
    <MapContainer
      className="h-[400px] w-full md:w-[580px] items-center rounded-xl "
      //   style={{ height: '300px', width: '100%' }}
      center={myPosition}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={myPosition}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
