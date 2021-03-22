export interface NewsData {
  title: string;
  source: string;
  date: string;
  link: string;
}

export interface CountryData {
  today:Number, 
  yesterday:Number,
  newCases: Number
}

export interface IDataContext {
    countryData: {
        isLoading: boolean;
        error: string;
        data: Map<string, CountryData> | null;
        globalCases: Number;
    };
}
export interface IProps {
}
