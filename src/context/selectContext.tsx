import React, { ReactNode, createContext, useContext, useState } from 'react';

export interface ISelectContext {
    selectedCountry: string;
    setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
    handleCountryClick: (countryName: string) => void;
}

const SelectContext = createContext<Partial<ISelectContext>>({});

interface DataContextProviderProps {
    children: ReactNode;
}

const SelectContextProvider: React.FC<DataContextProviderProps> = ({ children }) => {
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCountryClick = (countryName: string) => {
        console.log(`countryName=${countryName}`);
        setSelectedCountry((prev) => (prev === countryName ? '' : countryName));
    };

    return (
        <SelectContext.Provider
            value={{
                selectedCountry,
                setSelectedCountry,
                handleCountryClick
            }}
        >
            {children}
        </SelectContext.Provider>
    );
};

export const useSelectCountryCtx = () => {
    const { selectedCountry, setSelectedCountry, handleCountryClick } = useContext(SelectContext);

    if (typeof selectedCountry !== 'undefined' && setSelectedCountry && handleCountryClick) {
        return { selectedCountry, setSelectedCountry, handleCountryClick };
    } else {
        throw new Error();
    }
};

export default SelectContextProvider;
