import React, { ReactNode, createContext, useContext } from 'react';
import { TIMESERIES_CSV_URL } from '../constants';
import { useTimeSeriesData } from '../hooks/useTimeSeriesData';
import { useDailyUrl } from '../hooks/useDailyUrl';
import { IDataContext } from '../types';
const DataContext = createContext<Partial<IDataContext>>({});

interface DataContextProviderProps {
    children: ReactNode;
}

const DataContextProvider: React.FC<DataContextProviderProps> = ({ children }) => {
    const error = 'this is error';

    const dailyUrl = useDailyUrl();

    console.log(`dailyUrl=${dailyUrl}`);

    const [countryConfirmedTimeSeries, globalConfirmedTimeSeries, lastUpdated, isLoading] = useTimeSeriesData(
        TIMESERIES_CSV_URL.CONFIRMED,
        dailyUrl
    );

    return (
        <DataContext.Provider
            value={{
                countryData: {
                    isLoading,
                    error,
                    data: countryConfirmedTimeSeries,
                    globalCases: globalConfirmedTimeSeries,
                    lastUpdated
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
