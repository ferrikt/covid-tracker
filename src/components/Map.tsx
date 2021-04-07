import * as React from 'react';
import * as d3 from 'd3';
import { MapContainer, Marker, Circle, TileLayer } from 'react-leaflet';

import { useCountryDataCtx } from '../context/dataContext';
import { useSelectCountryCtx } from '../context/selectContext';

interface IProps {}

const getMax = (
    data: Array<{ country: string; value: number; lat: number; long: number; [index: string]: any }> | null,
    dataClass: string
) => {
    if (data) {
        return dataClass === 'confirmed'
            ? d3.max(data, (D) => D.confirmed ?? 0) ?? 0
            : dataClass === 'deaths'
            ? d3.max(data, (D) => D.deaths ?? 0) ?? 0
            : dataClass === 'active'
            ? d3.max(data, (D) => D.active ?? 0) ?? 0
            : d3.max(data, (D) => D.newCases ?? 0) ?? 0;
    } else {
        return 0;
    }
};

const Map: React.SFC<IProps> = (props: IProps) => {
    const { selectedCountry, setSelectedCountry } = useSelectCountryCtx();
    const { isLoading, data, globalCases, lastUpdated } = useCountryDataCtx();

    const dataClass: string = 'active';

    let dataArray: Array<{ country: string; value: number; lat: number; long: number; [index: string]: any }> = [];

    //const myObj: { [index: string]: any } = {};

    const logMapElements = (value: any, key: string) => {
        dataArray.push({
            country: key,
            value: value[dataClass],
            lat: value.lat,
            long: value.long
        });
    };

    data && data.forEach(logMapElements);

    // Function that gets the radius.
    const getRadius = d3
        .scaleSqrt()
        .domain([0, getMax(dataArray, dataClass)])
        .range([0, 430000]);
    debugger;
    return (
        <>
            <MapContainer center={[45.4, -75.7]} zoom={12} style={{ height: `100%`, width: '100%' }}>
                <TileLayer
                    // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    maxZoom={8}
                    minZoom={2}
                />
                {dataArray
                    ?.filter((d) => d[dataClass])
                    //  .sort((a, b) => b[dataClass]! - a[dataClass]!)
                    .map((d, i) => {
                        const radius = getRadius(d[dataClass] ?? 0);
                        return (
                            <Circle
                                center={{ lat: d.lat, lng: d.lon }}
                                radius={1}
                                stroke={true}
                                color={'whitesmoke'}
                                // opacity={this.pickOpacity()}
                                weight={1}
                            />

                            // <LeafletCircle
                            //     key={i}
                            //     d={d}
                            //     radius={radius && radius > 0 ? radius : 0}
                            //     selected={selectedCountry}
                            //     setSelected={setSelectedCountry}
                            //     setViewport={setViewport}
                            //     dataClass={dataClass}
                            //     color="whitesmoke"
                            // />
                        );
                    })}
            </MapContainer>
        </>
    );
};

export default Map;
