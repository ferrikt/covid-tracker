import { TCountryData } from '../types';

export const changeBg = (selected: string, countryName: string) => (selected === countryName ? 'black' : 'none');

export const definePropertyName = (tag: string): string => {
    switch (tag) {
        case 'new':
            return 'newCases';
        case 'active':
            return 'active';
    }
    return 'newCases';
};

export const pickColor = (tag: string): string =>
    tag === 'active' ? 'yellow.500' : tag === 'deaths' ? 'gray.500' : tag === 'recovered' ? 'green.500' : 'pink';

export const iterateViaMap = (data: any, dataClass: string): Array<TCountryData> => {
    let dataArray: Array<TCountryData> = [];

    const logMapElements = (value: any, key: string) => {
        dataArray.push({
            country: key,
            value: value[dataClass],
            lat: value.lat,
            long: value.long
        });
    };

    data && data.forEach(logMapElements);

    return dataArray;
};
