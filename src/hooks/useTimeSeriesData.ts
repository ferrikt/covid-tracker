import * as d3 from "d3";
import { useEffect, useState } from "react";
//import { CountryTimeData, DateAndCount } from "../types";

export const useTimeSeriesData = (
  url: string
): [Map<string,string> | null, Map<string,string>  | null, boolean] => {
  
    const [countriesData, setCountriesData] = useState<Map<string,string> | null>(
    null
  );

   const [isLoading, setIsLoading] = useState(true);
  
  const [globalData, setGlobalData] = useState<Map<string,string> | null>(null);

   let countryData = new Map();

  useEffect(() => {

    setIsLoading(true);
       d3.csv(url).then((loadedData) => {   
          
           const columnCount = Object.keys(loadedData[0]).length;
           const columns = loadedData["columns"];
           const lastColumnName = columns[columnCount-1];
           const prevColumnName = columns[columnCount-2];

           loadedData.forEach(row => {
               const countryName = row["Country/Region"];
               if (!countryData.has(countryName)) {
                countryData.set(countryName,{ 
                  today: row[lastColumnName], 
                  yesterday: row[prevColumnName],
                  newCases: Number(row[lastColumnName])-Number(row[prevColumnName])
                })
               }
               else {
                   const countryCases = countryData.get(countryName);
                   const updatedCasesToday = Number(row[lastColumnName])+Number(countryCases.today);
                   const updatedCasesYday = Number(row[prevColumnName])+Number(countryCases.yesterday);
                   countryData.set(countryName, {
                     today:updatedCasesToday, 
                     yesterday:updatedCasesYday,
                     newCases: updatedCasesToday-updatedCasesYday});
               }
           })

           countryData.forEach(row => {

           })

            setCountriesData(countryData);
       })

       for(let i=0;i<1000;i++) { //simulate delay for now
         console.log(i);
       }
debugger;
       setIsLoading(false);

  },[url])

  return [countriesData, globalData, isLoading];
};




