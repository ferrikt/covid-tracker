import * as React from "react";
import { MarginContainer, Title } from "./Styled";

interface IProps {
  name?: string;
}

const Header: React.SFC<IProps> = (props: IProps) => (
  <MarginContainer>
    <Title>Covid-19 Information Dashboard</Title>
  </MarginContainer>
);

export default Header;
