import styled from 'styled-components';

export const Title = styled.div`
    font-size: 1.6994866rem;
    line-height: 1.3875;
    color: #bdbdbd;
    height: 44px;
`;

export const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding-left: 0;
`;

export const ListItem = styled.li` 
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #5c5c5c;
    padding-left:10px;
    font-size: 1.1019rem;
    font-weight: normal;
    text-align: left;
    display: flex;
    cursor: pointer;
    background: ${props => props.selected ? 'black': ''};
`;






