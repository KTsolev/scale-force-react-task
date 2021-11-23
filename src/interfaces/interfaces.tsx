export interface Countries {
    id: string,
    iso2code: string,
    name: string,
    capitalCity: string,
    longitude: string,
    latitude: string
};

export interface CountryProps {
    id: string,
    iso2code: string,
    value: string
}

export interface Country extends Countries {
    region: CountryProps,
    adminregion: CountryProps,
    incomeLevel: CountryProps,
    lendingType: CountryProps
};

export interface CountriesState {
    loading: boolean,
    error: any,
    result: Countries[]
}

export interface CountryState {
    loading: boolean,
    error: any,
    result: CountriesQuery
}

export interface CountriesQuery extends Countries {
    data: any,
    page: Number
    pages: Number
    per_page: String
    total: Number,
    result: Countries[]
}