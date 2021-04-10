import * as React from 'react';
import { Flex, Heading, Text } from 'theme-ui';
import { List, ListItem } from './Styled';
import { useSelectCountryCtx } from '../context/selectContext';
import { useCountryDataCtx } from '../context/dataContext';
import { CountryData } from '../types';
import Loading from './Loading';
//import { definePropertyName, pickColor } from '../utils/utils';

interface IProps {
    tag: string;
}

export const definePropertyName = (tag: string): string => {
    switch (tag) {
        case 'new':
            return 'newCases';
        case 'active':
            return 'active';
        case 'deaths':
            return 'deaths';
        case 'recovered':
            return 'recovered';
    }

    return 'newCases';
};

export const pickColor = (tag: string): string =>
    tag === 'active' ? 'purple.400' : tag === 'deaths' ? 'gray.500' : tag === 'recovered' ? 'green.500' : 'pink.400';

const CasesList: React.SFC<IProps> = (props: IProps) => {
    const { isLoading, data } = useCountryDataCtx();

    const { selectedCountry } = useSelectCountryCtx();

    let dataArray: Array<{ country: string; value: number }> = [];

    let globalCount: number = 0;
    let countryCount: number = 0;

    const { tag } = props;

    const propertyName = definePropertyName(tag);

    const logMapElements = (value: CountryData, key: string) => {
        dataArray.push({
            country: key,
            value: value[propertyName as keyof CountryData]
        });

        globalCount += value[propertyName as keyof CountryData];

        if (key === selectedCountry) {
            countryCount = value[propertyName as keyof CountryData];
        }
    };

    data && data.forEach(logMapElements);

    let sortedData: Array<{ country: string; value: number }> = dataArray.sort((a, b) => b.value - a.value);

    return (
        <>
            <Flex
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    background: '#222',
                    border: '1px solid #363636'
                }}
            >
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Heading color="white">{selectedCountry ? selectedCountry : 'Global'}</Heading>
                        <Heading color={pickColor(tag)}>
                            {selectedCountry
                                ? countryCount.toLocaleString()
                                : globalCount?.toLocaleString() ?? 'No data'}
                        </Heading>
                        <Heading>
                            {tag} {' cases'}
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
                    <List>
                        {sortedData.map((x) => (
                            <ListItem selected={selectedCountry === x.country}>
                                <Text sx={{ marginRight: 2 }} color="gray.100">
                                    {x.country}
                                </Text>
                                <Text color={pickColor(tag)}>{x.value?.toLocaleString() ?? 'No data'}</Text>
                            </ListItem>
                        ))}
                    </List>
                )}
            </Flex>
        </>
    );
};

export default CasesList;
