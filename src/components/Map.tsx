import * as React from 'react';
import * as d3 from 'd3';
import { MapContainer, Marker, Circle, TileLayer } from 'react-leaflet';
import { IProps, TCountryData } from '../types';
import { useCountryDataCtx } from '../context/dataContext';
import { useSelectCountryCtx } from '../context/selectContext';
import { iterateViaMap } from '../utils/utils';

const getMax = (data: Array<TCountryData> | null) => {
    if (data) {
        return d3.max(data, (D) => D.value ?? 0) ?? 0;
    } else {
        return 0;
    }
};

const color = 'red';

const Map: React.SFC<IProps> = (props: IProps) => {
    const { selectedCountry, setSelectedCountry } = useSelectCountryCtx();
    const { isLoading, data, globalCases, lastUpdated } = useCountryDataCtx();

    const dataClass: string = 'active';

    let dataArray: Array<TCountryData> = iterateViaMap(data, dataClass);

    const getRadius = d3
        .scaleSqrt()
        .domain([0, getMax(dataArray)])
        .range([0, 430000]);

    const filtered = dataArray?.filter((d) => d.value && d.lat && d.long);

    const selectedCountryData = filtered?.find((x) => x.country === selectedCountry);

    const lat = selectedCountryData ? selectedCountryData.lat : 20;
    const long = selectedCountryData ? selectedCountryData.long : 10;

    return (
        <MapContainer center={{ lat: lat, lng: long }} zoom={2} style={{ height: `100%`, width: '100%' }}>
            <TileLayer
                attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                maxZoom={8}
                minZoom={2}
            />
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
                    />
                );
            })}
        </MapContainer>
    );
};

export default Map;
