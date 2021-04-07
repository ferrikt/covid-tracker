//import { jsx } from "theme-ui";

import * as React from 'react';

import { useCountryDataCtx } from '../context/dataContext';
import { useSelectCountryCtx } from '../context/selectContext';
import { Grid, Flex, Heading, Text } from 'theme-ui';
import { List, ListItem } from './Styled';
import Loading from './Loading';
import { IProps } from '../types';

const LeftColumn: React.SFC<IProps> = (props: IProps) => {
    const { isLoading, data, globalCases, lastUpdated } = useCountryDataCtx();

    const { selectedCountry, handleCountryClick } = useSelectCountryCtx();

    let dataArray: Array<{ country: string; value: number }> = [];

    const logMapElements = (value: any, key: string) => {
        dataArray.push({
            country: key,
            value: Number(value.today)
        });
    };

    data && data.forEach(logMapElements);

    let sortedData: Array<{ country: string; value: number }> = dataArray.sort((a, b) => b.value - a.value);

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
                        <Heading>Global cases</Heading>
                        <Heading color="#e60000">{globalCases?.toLocaleString() ?? 'No data'}</Heading>
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
                                    <Text>
                                        <span style={{ color: '#e60000' }}>
                                            {x.value?.toLocaleString() ?? 'No data'}{' '}
                                        </span>
                                        {x.country}
                                    </Text>
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
