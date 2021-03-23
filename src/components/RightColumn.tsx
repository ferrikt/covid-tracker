import * as React from 'react';
import { Flex, Grid, Heading, Text } from 'theme-ui';
import { useSelectCountryCtx } from '../context/selectContext';
import { useCountryDataCtx } from '../context/dataContext';
import { CountryData } from '../types';
import CasesList from './CasesList';
interface IProps {
    name?: string;
}

const RightColumn: React.SFC<IProps> = (props: IProps) => {
    const { selectedCountry } = useSelectCountryCtx();
    const { isLoading, data } = useCountryDataCtx();

    let countryCount: number = 0;
    let globalCount: number = 0;

    let dataArray: Array<{ country: string; value: number }> = [];

    const logMapElements = (value: CountryData, key: string) => {
        dataArray.push({
            country: key,
            value: value.newCases
        });

        globalCount += value.newCases;

        if (key === selectedCountry) {
            countryCount = value.newCases;
        }
    };

    data && data.forEach(logMapElements);

    let sortedData: Array<{ country: string; value: number }> = dataArray.sort((a, b) => b.value - a.value);

    return (
        <Grid
            sx={{
                gridArea: 'right',
                border: '1px solid #363636',
                marginLeft: '10px',
                marginRight: '10px',
                background: '#222',
                gap: 1,
                gridTemplate: `"left right" 3fr
                "left right" 3fr`
            }}
        >
            <Grid sx={{ gridArea: 'left', bg: 'black', gridTemplateRows: 'auto 2fr 6fr' }}>
                <CasesList countryCount={countryCount} globalCount={globalCount} />
            </Grid>

            <Grid sx={{ gridArea: 'right', bg: 'black', gridTemplateRows: 'auto 2fr 6fr' }}>
                <CasesList countryCount={countryCount} globalCount={globalCount} />
            </Grid>
        </Grid>
    );
};

export default RightColumn;
