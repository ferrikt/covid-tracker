import * as React from 'react';
import * as Styled from './Styled'

const Cases: React.SFC<{}> = () => {
  return (
    <Styled.CasesWrapper>
      <Styled.CasesContainer>
      <Styled.CasesHeader>Cases</Styled.CasesHeader>
      <Styled.Statistic>
        <Styled.StatisticColumn>Cases</Styled.StatisticColumn>
        <Styled.StatisticColumn>Recovered</Styled.StatisticColumn>
        <Styled.StatisticColumn>Deaths</Styled.StatisticColumn>
      </Styled.Statistic>
      </Styled.CasesContainer>
    </Styled.CasesWrapper>
  )
}

export default Cases;