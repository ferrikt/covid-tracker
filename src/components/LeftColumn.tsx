//import { jsx } from "theme-ui";

import * as React from 'react';

import { useCountryDataCtx } from '../context/dataContext';
import { useSelectCountryCtx } from '../context/selectContext';
import { Grid, Flex, Heading, Text } from 'theme-ui';
import { List, ListItem } from './Styled';
import Loading from './Loading';
import { IProps } from '../types';
import { iterateViaMap } from '../utils/utils';

const LeftColumn: React.SFC<IProps> = (props: IProps) => {
    const { isLoading, data, globalCases, lastUpdated } = useCountryDataCtx();

    const { selectedCountry, handleCountryClick } = useSelectCountryCtx();

    let dataArray: Array<{ country: string; value: number; lat: number }> = iterateViaMap(data, 'today');

    // const logMapElements = (value: any, key: string) => {
    //     dataArray.push({
    //         country: key,
    //         value: Number(value.today),
    //         lat: value.lat
    //     });
    // };

    // data && data.forEach(logMapElements);

    let sortedData: Array<{ country: string; value: number; lat: number }> = dataArray.sort(
        (a, b) => b.value - a.value
    );

    const selectedCountryObj = dataArray.find((x) => x.country === selectedCountry);

    return (
        <Grid
            sx={{
                gridTemplateRows: '1fr 15fr 2fr',
                gridArea: 'left',
                marginLeft: '10px'
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
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Heading> {selectedCountry ? selectedCountry : 'Global'} </Heading>
                        <Heading color="#e60000">
                            {selectedCountry === ''
                                ? globalCases?.toLocaleString() ?? 'No data'
                                : selectedCountryObj?.value.toLocaleString()}

                            {}
                        </Heading>
                    </>
                )}
            </Flex>

            <Flex
                sx={{
                    overflowY: 'scroll',
                    flexDirection: 'column',
                    background: '#222',
                    border: '1px solid #363636'
                }}
            >
                {isLoading ? (
                    <Loading />
                ) : (
                    <Flex>
                        <List>
                            {sortedData.map((x) => (
                                <ListItem
                                    onClick={() => handleCountryClick(x.country)}
                                    selected={selectedCountry === x.country}
                                >
                                    <Text
                                        sx={{
                                            color: '#e60000',
                                            marginRight: 2
                                        }}
                                    >
                                        {x.value?.toLocaleString() ?? 'No data'}
                                    </Text>
                                    <Text> {x.country}</Text>
                                </ListItem>
                            ))}
                        </List>
                    </Flex>
                )}
            </Flex>

            <Flex
                sx={{
                    background: '#222',
                    border: '1px solid #363636',
                    flexDirection: 'column',
                    paddingLeft: '10px',
                    paddingTop: '10px'
                }}
            >
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Heading sx={{ fontSize: 'md' }}>Last Updated at</Heading>
                        <Heading>{lastUpdated?.toLocaleString() ?? 'No data'}</Heading>
                    </>
                )}
            </Flex>
        </Grid>
    );
};

export default LeftColumn;
