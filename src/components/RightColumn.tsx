import * as React from 'react';
import { Flex, Grid, Heading, Text } from 'theme-ui';
import { useSelectCountryCtx } from '../context/selectContext';
import { useCountryDataCtx } from '../context/dataContext';
import { CountryData } from '../types';
import { List, ListItem } from './Styled';
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

    const pickColor = () => 'yellow';

    console.log(`sortedData.length=${sortedData.length}`);

    return (
        <Grid
            sx={{
                gridArea: 'right',
                border: '1px solid #363636',
                marginLeft: '10px',
                background: '#222',
                marginRight: '10px',
                gridTemplateRows: '2fr 10fr '
            }}
        >
            <Flex
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    background: '#222',
                    border: '1px solid #363636',
                    padding: '10px 0 10px 0'
                }}
            >
                Selected country {selectedCountry}
                <Heading color="white">{selectedCountry ? selectedCountry : 'Global'}</Heading>
                <Heading color={pickColor()}>
                    {selectedCountry ? countryCount.toLocaleString() : globalCount.toLocaleString()}
                </Heading>
            </Flex>

            <Flex
                sx={{
                    flexDirection: 'column',
                    overflowY: 'scroll'
                }}
            >
                <List>
                    {sortedData.map((x) => (
                        <ListItem selected={selectedCountry === x.country}>
                            <Text sx={{ fontWeight: 600, color: pickColor() }}>
                                <span>{x.value.toLocaleString()} </span>
                            </Text>
                            <Text color="gray.100">{x.country}</Text>
                        </ListItem>
                    ))}
                </List>
            </Flex>
        </Grid>
    );
};

export default RightColumn;
