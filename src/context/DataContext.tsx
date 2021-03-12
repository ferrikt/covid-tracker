import React, { ReactNode, createContext, useContext } from "react";
import { TIMESERIES_CSV_URL } from "../constants";
import { useTimeSeriesData } from "../hooks/useTimeSeriesData";
interface IDataContext {
  countryData: {
    loading: boolean;
    error: string;
    data: Map<string, string> | null;
  };
}

const DataContext = createContext<Partial<IDataContext>>({});

interface DataContextProviderProps {
  children: ReactNode;
}

const DataContextProvider: React.FC<DataContextProviderProps> = ({
  children,
}) => {
  const isCountryLoading = false;
  const error = "this is error";

  const [
    countryConfirmedTimeSeries, // confirmed cases by country-state
    globalConfirmedTimeSeries,
  ] = useTimeSeriesData(TIMESERIES_CSV_URL.CONFIRMED);

  return (
    <DataContext.Provider
      value={{
        countryData: {
          loading: isCountryLoading,
          error,
          data: countryConfirmedTimeSeries, // confirmed cases by country-state
        },
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

export const useCountryDataCtx = () => {
  const { countryData } = useContext(DataContext);
  if (countryData) {
    return countryData;
  } else {
    throw new Error("dailyData is empty.");
  }
};

class DailyData {
  public country: string;
  public combinedKey: string;
  public lastUpdate: string;
  public newCasesLastUpdate: string;
  public active: number | null;
  public confirmed: number | null;
  public deaths: number | null;
  public recovered: number | null;
  public newCases: number | null;
  public lat: number | null;
  public lon: number | null;
  public province: string;
  public admin2: string;
  public newCaseRate: number;
  constructor(
    country: string,
    combinedKey: string,
    lastUpdate: string,
    newCasesLastUpdate: string,
    active: number | null,
    confirmed: number | null,
    deaths: number | null,
    recovered: number | null,
    newCases: number | null,
    lat: number | null,
    lon: number | null,
    province: string,
    admin2: string,
    newCaseRate: number
  ) {
    this.country = country;
    this.combinedKey = combinedKey;
    this.lastUpdate = lastUpdate;
    this.newCasesLastUpdate = newCasesLastUpdate;
    this.active = active;
    this.confirmed = confirmed;
    this.deaths = deaths;
    this.recovered = recovered;
    this.newCases = newCases;
    this.lat = lat;
    this.lon = lon;
    this.province = province;
    this.admin2 = admin2;
    this.newCaseRate = newCaseRate;
  }
}
