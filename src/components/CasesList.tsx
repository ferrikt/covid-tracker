import * as React from 'react';
import { Flex, Grid, Heading, Text } from 'theme-ui';
import { useSelectCountryCtx } from '../context/selectContext';

interface IProps {
    countryCount: number;
    globalCount: number;
}

const CasesList: React.SFC<IProps> = (props: IProps) => {
    const { selectedCountry } = useSelectCountryCtx();
    const { countryCount, globalCount } = props;

    const pickColor = () => 'yellow';

    return (
        <Flex
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                background: '#222',
                border: '1px solid #363636'
            }}
        >
            Selected country {selectedCountry}
            <Heading color="white">{selectedCountry ? selectedCountry : 'Global'}</Heading>
            <Heading color={pickColor()}>
                {selectedCountry ? countryCount.toLocaleString() : globalCount.toLocaleString()}
            </Heading>
        </Flex>
    );
};

export default CasesList;
