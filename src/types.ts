export interface NewsData {
    title: string;
    source: string;
    date: string;
    link: string;
}

export interface CountryData {
    today: number;
    yesterday: number;
    newCases: number;
    active: number;
    deaths: number;
    recovered: number;
    lat: number;
    long: number;
}

export interface IDataContext {
    countryData: {
        isLoading: boolean;
        error: string;
        data: Map<string, CountryData> | null;
        globalCases: Number;
        lastUpdated: string;
    };
}
export interface IProps {}
