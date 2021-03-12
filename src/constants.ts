export const TIMESERIES_CSV_URL = {
  CONFIRMED:
 //   process.env.NODE_ENV === "development"
   //   ? "time_series_covid19_confirmed_global.csv"
       "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",
  DEATHS:
    process.env.NODE_ENV === "development"
      ? "time_series_covid19_deaths_global.csv"
      : "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv",
};
