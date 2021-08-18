import * as React from 'react';
import { Grid, Flex, Heading, Text } from 'theme-ui';
import { useCountryDataCtx } from '../context/DataContext';
import News from './News';
import Map from './Map';
import Loading from './Loading';

interface IProps { }

const CenterColumn: React.SFC<IProps> = (props: IProps) => {
    const { data, isLoading } = useCountryDataCtx();

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <Grid
                    sx={{
                        gridArea: 'center',
                        background: 'black',
                        marginLeft: 10,
                        gridTemplateRows: 'auto 80px'
                    }}
                >
                    <Flex
                        sx={{
                            flexDirection: 'column',
                            border: '1px solid',
                            borderColor: 'gray.700'
                        }}
                    >
                        <Map />
                    </Flex>

                    <Flex
                        sx={{
                            flexDirection: 'row',
                            background: 'black',
                            gridTemplateColumns: '6fr 9fr'
                        }}
                    >
                        <Flex
                            sx={{
                                background: '#222',
                                border: '1px solid',
                                borderColor: 'gray.700',
                                marginRight: '10px',
                                padding: 10,
                                alignItems: 'center',
                                flexDirection: 'column'
                            }}
                        >
                            <Heading
                                sx={{
                                    fontSize: '3xl',
                                    fontWeight: 'bold'
                                }}
                            >
                                {data?.size}
                            </Heading>
                            <Text
                                sx={{
                                    fontSize: 'xs'
                                }}
                            >
                                countries/regions
                            </Text>
                        </Flex>
                        {/* <News /> */}
                    </Flex>
                </Grid>
            )}
        </>
    );
};

export default CenterColumn;
