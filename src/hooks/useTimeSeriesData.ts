import * as d3 from 'd3';
import { useEffect, useState } from 'react';
import { CountryData } from '../types';

export const useTimeSeriesData = (url: string): [Map<string, CountryData> | null, Number, boolean] => {
    const [countriesData, setCountriesData] = useState<Map<string, CountryData> | null>(null);

    const [isLoading, setIsLoading] = useState(true);

    const [globalCases, setGlobalCases] = useState(0);

    let countryData = new Map();

    useEffect(() => {
        setIsLoading(true);
        let glCases = 0;
        const url2 =
            'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-23-2021.csv';

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
                        newCases: Number(row[lastColumnName]) - Number(row[prevColumnName])
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

            const dailyData = await d3.csv(url2);

            dailyData.forEach((row) => {
                const countryName = row['Country_Region'];

                const rowActive = Number(row['Active']) ? Number(row['Active']) : 0;
                const rowDeaths = Number(row['Deaths']) ? Number(row['Deaths']) : 0;
                const rowRecovered = Number(row['Recovered']) ? Number(row['Recovered']) : 0;

                if (!countryData.has(countryName)) {
                    countryData.set(countryName, {
                        active: rowActive,
                        deaths: rowDeaths,
                        recovered: rowRecovered
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
        };

        setGlobalCases(glCases);

        fetchTimeSeries();
    }, [url]);

    return [countriesData, globalCases, isLoading];
};
