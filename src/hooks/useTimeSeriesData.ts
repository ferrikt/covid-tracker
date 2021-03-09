import * as d3 from "d3";
import { useEffect, useState } from "react";
//import { CountryTimeData, DateAndCount } from "../types";

export const useTimeSeriesData = (
  url: string
): [Map<string,string> | null, Map<string,string>  | null] => {
  
    const [countriesData, setCountriesData] = useState<Map<string,string> | null>(
    null
  );
  
  const [globalData, setGlobalData] = useState<Map<string,string> | null>(null);

   let countryData = new Map();

  useEffect(() => {
       d3.csv(url).then((loadedData) => {   
          
           const columnCount = Object.keys(loadedData[0]).length;
           const columns = loadedData["columns"];
           const lastColumnName = columns[columnCount-1];

           loadedData.forEach(row => {
               const countryName = row["Country/Region"];
               if (!countryData.has(countryName)) {
                countryData.set(countryName,row[lastColumnName])
               }
               else {
                   const countryCases = countryData.get(countryName);
                   const updatedCases = Number(row[lastColumnName])+Number(countryCases);
                   countryData.set(countryName,updatedCases);
               }
           })

            setCountriesData(countryData);
       })

  },[url])

  return [countriesData, globalData];
};




