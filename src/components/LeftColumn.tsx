import * as React from "react";
import { Container, GlobalCases } from "./Styled";

import { useCountryDataCtx } from "../context/DataContext";

interface IProps {
  name?: string;
}

const LeftColumn: React.SFC<IProps> = (props: IProps) => {
  const { loading, error, data } = useCountryDataCtx();

  let a: string[] = []; //let fruits: Array<string>

  const logMapElements = (value: string, key: string) => {
    a.push(`${key} = ${value}`);
  };

  data && data.forEach(logMapElements);
  debugger;
  return (
    <GlobalCases>
      <div>{"Left column 3 "}</div>
      <div>{error}</div>
      {a.map((x) => (
        <div>{x}</div>
      ))}
    </GlobalCases>
  );
};

export default LeftColumn;
