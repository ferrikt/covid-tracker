import React, { ReactNode, createContext, useContext } from 'react';
import { TIMESERIES_CSV_URL } from '../constants';
import { useTimeSeriesData } from '../hooks/useTimeSeriesData';
interface IDataContext {
    countryData: {
        isLoading: boolean;
        error: string;
        data: Map<string, string> | null;
        lastUpdate: string;
    };
}

const DataContext = createContext<Partial<IDataContext>>({});

interface DataContextProviderProps {
    children: ReactNode;
}

const DataContextProvider: React.FC<DataContextProviderProps> = ({ children }) => {
    const error = 'this is error';

    const [
        countryConfirmedTimeSeries, // confirmed cases by country-state
        globalConfirmedTimeSeries,
        isLoading
    ] = useTimeSeriesData(TIMESERIES_CSV_URL.CONFIRMED);

    return (
        <DataContext.Provider
            value={{
                countryData: {
                    isLoading,
                    error,
                    data: countryConfirmedTimeSeries, // confirmed cases by country-state
                    lastUpdate: '19 March 2021'
                }
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
        throw new Error('dailyData is empty.');
    }
};
