import * as React from "react";
import { Container, GlobalCases } from "./Styled";

interface IProps {
  name?: string;
}

const RightColumn: React.SFC<IProps> = (props: IProps) => (
  <GlobalCases>
    <div>Right column 5</div>
  </GlobalCases>
);

export default RightColumn;
