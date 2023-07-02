import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export const Map = () => {
  const myPosition = [52.0610398, 4.3053148];
  return (
    <MapContainer
      className=" z-0 h-[400px] w-full md:w-[580px] items-center rounded-xl "
      center={myPosition}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={myPosition}>
        <Popup>
          <p className="text-l font-playfair font-bold"> Find me here!😀</p>

          <a
            target="_blank"
            rel="noreferrer"
            className="text-xl font-playfair"
            href="https://www.google.com/maps/dir//Calandplein+75,+Den+Haag/@52.0610398,4.3053148,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47c5b6dd00e09b57:0xc0d6ec1fb4d3da73!2m2!1d4.3147058!2d52.062049?entry=ttu"
          >
            Direction
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};
