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

    let dataArray: Array<{ country: string; value: number }> = iterateViaMap(data, 'today');

    let sortedData: Array<{ country: string; value: number }> = dataArray.sort((a, b) => b.value - a.value);

    const selectedCountryObj = dataArray.find((x) => x.country === selectedCountry);

    return (
        <Grid
            sx={{
                gridTemplateRows: '1fr 15fr 2fr',
                gridArea: 'left',
                marginLeft: 10
            }}
        >
            <Flex
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    backgroundColor: 'gray.600',
                    border: '1px solid',
                    borderColor: 'gray.700',
                    padding: '10px 0 10px 0'
                }}
            >
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Heading> {selectedCountry ? selectedCountry : 'Global Cases'} </Heading>
                        <Heading color="red">
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
                    backgroundColor: 'gray.600',
                    border: '1px solid',
                    borderColor: 'gray.700',
                    alignItems: 'center'
                }}
            >
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Heading sx={{ fontSize: 'md', marginTop: 2 }}>Cases by</Heading>
                        <Heading sx={{ fontSize: 'xs' }}>Country/Region/Sovereignty</Heading>

                        <List>
                            {sortedData.map((x) => (
                                <ListItem
                                    onClick={() => handleCountryClick(x.country)}
                                    selected={selectedCountry === x.country}
                                >
                                    <Text
                                        sx={{
                                            color: 'red',
                                            marginRight: 2
                                        }}
                                    >
                                        {x.value?.toLocaleString() ?? 'No data'}
                                    </Text>
                                    <Text> {x.country}</Text>
                                </ListItem>
                            ))}
                        </List>
                    </>
                )}
            </Flex>

            <Flex
                sx={{
                    backgroundColor: 'gray.600',
                    border: '1px solid',
                    borderColor: 'gray.700',
                    flexDirection: 'column',
                    padding: 10
                }}
            >
                {isLoading ? (
                    <Loading />
                ) : (
                    <Flex
                        sx={{
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Heading sx={{ fontSize: 'xs' }}>Last Updated at</Heading>
                        <Heading sx={{ fontSize: 'md' }}>{lastUpdated?.toLocaleString() ?? 'No data'}</Heading>
                    </Flex>
                )}
            </Flex>
        </Grid>
    );
};

export default LeftColumn;
