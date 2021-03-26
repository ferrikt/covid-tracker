import * as React from 'react';
import { Grid, Flex } from 'theme-ui';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import News from './News';

interface IProps {}

const Map: React.SFC<IProps> = (props: IProps) => (
    <>
        <MapContainer center={[45.4, -75.7]} zoom={12} style={{ height: `100%`, width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    </>
);

export default Map;
