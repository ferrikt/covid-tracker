import * as React from 'react';
import { Flex, Grid } from 'theme-ui';
import { useSelectCountryCtx } from '../context/selectContext';

interface IProps {
    name?: string;
}

const RightColumn: React.SFC<IProps> = (props: IProps) => {
    const { selectedCountry } = useSelectCountryCtx();
    return (
        <Grid
            sx={{
                gridArea: 'right',
                border: '1px solid #363636',
                marginLeft: '10px',
                background: '#222',
                marginRight: '10px'
            }}
        >
            <Flex
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    background: 'gray.700'
                }}
            >
                Selected country {selectedCountry}
            </Flex>
        </Grid>
    );
};

export default RightColumn;
