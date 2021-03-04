import * as React from "react";
import { GlobalCases } from "./Styled";

interface IProps {
  name?: string;
}

const CenterColumn: React.SFC<IProps> = (props: IProps) => (
  <GlobalCases>
    <div>Center column 9</div>
  </GlobalCases>
);

export default CenterColumn;
