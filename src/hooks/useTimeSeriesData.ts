import * as d3 from 'd3';
import { useEffect, useState } from 'react';
import { CountryData } from '../types';

export const useTimeSeriesData = (
    url: string,
    daylyUrl: string
): [Map<string, CountryData> | null, Number, string, boolean] => {
    const [countriesData, setCountriesData] = useState<Map<string, CountryData> | null>(null);

    const [isLoading, setIsLoading] = useState(true);

    const [globalCases, setGlobalCases] = useState(0);
    const [lastUpdated, setLastUpdated] = useState('');

    let countryData = new Map();

    useEffect(() => {
        setIsLoading(true);
        let glCases = 0;
        let updatedTime: string = '';

        const fetchTimeSeries = async () => {
            const loadedData = await d3.csv(url);

            const columnCount = Object.keys(loadedData[0]).length;
            const columns = loadedData['columns'];
            const lastColumnName = columns[columnCount - 1];
            const prevColumnName = columns[columnCount - 2];

            loadedData.forEach((row) => {
                const countryName = row['Country/Region'];
                if (!countryData.has(countryName)) {
                    countryData.set(countryName, {
                        today: Number(row[lastColumnName]),
                        yesterday: Number(row[prevColumnName]),
                        newCases: Number(row[lastColumnName]) - Number(row[prevColumnName]),
                        lat: Number(row['Lat']) ? Number(row['Lat']) : 0,
                        long: Number(row['Long']) ? Number(row['Long']) : 0
                    });
                    glCases += Number(row[lastColumnName]);
                } else {
                    const countryCases = countryData.get(countryName);
                    const updatedCasesToday = Number(row[lastColumnName]) + Number(countryCases.today);
                    const updatedCasesYday = Number(row[prevColumnName]) + Number(countryCases.yesterday);
                    countryData.set(countryName, {
                        today: updatedCasesToday,
                        yesterday: updatedCasesYday,
                        newCases: updatedCasesToday - updatedCasesYday
                    });
                    glCases += Number(row[lastColumnName]);
                }
            });

            const dailyData = await d3.csv(daylyUrl);

            dailyData.forEach((row) => {
                const countryName = row['Country_Region'];

                if (!updatedTime) {
                    updatedTime = row['Last_Update'] ? row['Last_Update'] : '';
                }

                const rowActive = Number(row['Active']) ? Number(row['Active']) : 0;
                const rowDeaths = Number(row['Deaths']) ? Number(row['Deaths']) : 0;
                const rowRecovered = Number(row['Recovered']) ? Number(row['Recovered']) : 0;

                if (!countryData.has(countryName)) {
                    countryData.set(countryName, {
                        active: rowActive,
                        deaths: rowDeaths,
                        recovered: rowRecovered,
                        lat: row['Lat'],
                        long: row['Long_']
                    });
                } else {
                    const countryCases = countryData.get(countryName);

                    const active = countryCases.active ?? 0;
                    const deaths = countryCases.deaths ?? 0;
                    const recovered = countryCases.recovered ?? 0;

                    countryData.set(countryName, {
                        ...countryCases,
                        active: active + rowActive,
                        deaths: deaths + rowDeaths,
                        recovered: recovered + rowRecovered
                    });
                }
            });

            setCountriesData(countryData);
            setIsLoading(false);
            setGlobalCases(glCases);
            setLastUpdated(updatedTime);
        };

        fetchTimeSeries();
    }, [url, daylyUrl]);

    return [countriesData, globalCases, lastUpdated, isLoading];
};
