import * as React from "react";
import { Container, GlobalCases } from "./Styled";

interface IProps {
  name?: string;
}

const LeftColumn: React.SFC<IProps> = (props: IProps) => (
  <GlobalCases>
    <div>Left column 3</div>
  </GlobalCases>
);

export default LeftColumn;
