import * as d3 from "d3";
import { useEffect, useState } from "react";
import { CountryData } from "../types";


export const useTimeSeriesData = (
  url: string
): [Map<string,CountryData> | null, Number, boolean] => {
    
  const [countriesData, setCountriesData] = useState<Map<string,CountryData> | null>(null);
  
  const [isLoading, setIsLoading] = useState(true);
  
  const [globalCases, setGlobalCases] = useState(0);

  let countryData = new Map();
 
  useEffect(() => {

    setIsLoading(true);
       d3.csv(url).then((loadedData) => {   
          
           const columnCount = Object.keys(loadedData[0]).length;
           const columns = loadedData["columns"];
           const lastColumnName = columns[columnCount-1];
           const prevColumnName = columns[columnCount-2];
           let glCases = 0;

           loadedData.forEach(row => {
               const countryName = row["Country/Region"];
               if (!countryData.has(countryName)) {
                countryData.set(countryName,{ 
                  today: Number(row[lastColumnName]), 
                  yesterday: Number(row[prevColumnName]),
                  newCases: Number(row[lastColumnName])-Number(row[prevColumnName])
                })
                glCases += Number(row[lastColumnName]);
               
               }
               else {
                   const countryCases = countryData.get(countryName);
                   const updatedCasesToday = Number(row[lastColumnName])+Number(countryCases.today);
                   const updatedCasesYday = Number(row[prevColumnName])+Number(countryCases.yesterday);
                   countryData.set(countryName, {
                     today:updatedCasesToday, 
                     yesterday:updatedCasesYday,
                     newCases: updatedCasesToday-updatedCasesYday});
                   glCases += Number(row[lastColumnName]);
                 
               }
           })

            setGlobalCases(glCases);
            setCountriesData(countryData);
       })

       for(let i=0;i<1000;i++) { //simulate delay for now
         console.log(i);
       }

       setIsLoading(false);

  },[url])

  return [countriesData, globalCases, isLoading];
};




