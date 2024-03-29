import React from 'react';
import * as d3 from 'd3';
import { MapContainer, Tooltip, Circle, TileLayer, useMap, Marker } from 'react-leaflet';
import { IProps, TCountryData, MapProps } from '../types';
import { useCountryDataCtx } from '../context/dataContext';
import { useSelectCountryCtx } from '../context/selectContext';
import { iterateViaMap } from '../utils/utils';
import { Heading, Text } from 'theme-ui';
import { divIcon } from 'leaflet';

const getMax = (data: Array<TCountryData> | null) => {
    if (data) {
        return d3.max(data, (D) => D.value ?? 0) ?? 0;
    } else {
        return 0;
    }
};

const color = 'red';
const dataClass: string = 'active';

function ChangeView(props: MapProps) {
    const map = useMap();
    map.setView(props.center, props.zoom);
    return null;
}

const Map: React.SFC<IProps> = (props: IProps) => {
    const { selectedCountry } = useSelectCountryCtx();
    const { data } = useCountryDataCtx();

    let dataArray: Array<TCountryData> = iterateViaMap(data, dataClass);

    const getRadius = d3
        .scaleSqrt()
        .domain([0, getMax(dataArray)])
        .range([0, 430000]);

    const filtered = dataArray?.filter((d) => d.value && d.lat && d.long);

    const selectedCountryData = filtered?.find((x) => x.country === selectedCountry);

    const lat = selectedCountryData ? selectedCountryData.lat : 20;
    const long = selectedCountryData ? selectedCountryData.long : 10;

    let zoom: number = selectedCountry ? 2 : 2;

    const position: [number, number] = [lat, long];
    const icon = divIcon({ className: 'css-icon', html: '<div class="gps_ring"></div>', iconSize: [50, 50] });

    return (
        <MapContainer center={position} zoom={zoom} style={{ height: `100%`, width: '100%' }} scrollWheelZoom={false}>
            <ChangeView center={position} zoom={zoom} />
            <TileLayer
                attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                maxZoom={8}
                minZoom={2}
            />
            {selectedCountry && <Marker position={position} icon={icon}></Marker>}
            {filtered.map((d, i) => {
                const radius = getRadius(d.value) ?? 0;
                return (
                    <Circle
                        center={{ lat: d.lat, lng: d.long }}
                        radius={radius}
                        stroke={true}
                        color={color}
                        weight={1}
                        key={i}
                    >
                        <Tooltip sticky={true} direction="left" offset={[-2, 0]}>
                            <Heading color={color}>{d.country}</Heading>

                            <Text> Total Cases:{d.value?.toLocaleString()} </Text>
                        </Tooltip>
                    </Circle>
                );
            })}
        </MapContainer>
    );
};

export default Map;
