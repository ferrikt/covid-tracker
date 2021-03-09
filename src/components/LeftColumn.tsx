import * as React from "react";
import { Container, GlobalCases } from "./Styled";

import { useCountryDataCtx } from "../context/DataContext";

interface IProps {
  name?: string;
}

const LeftColumn: React.SFC<IProps> = (props: IProps) => {
  const { error } = useCountryDataCtx();
  return (
    <GlobalCases>
      <div>{"Left column 3 "}</div>
      <div>{error}</div>
    </GlobalCases>
  );
};

export default LeftColumn;
