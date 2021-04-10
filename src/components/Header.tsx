import * as React from 'react';
import { Title } from './Styled';
import { Flex } from 'theme-ui';

interface IProps {
    name?: string;
}

const Header: React.SFC<IProps> = (props: IProps) => (
    <Flex
        sx={{
            border: '1px solid',
            borderColor: 'gray.700',
            margin: '10px',
            bg: '#222',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            gridArea: 'header'
        }}
    >
        <Title>Covid-19 Information Dashboard</Title>
    </Flex>
);

export default Header;
