import { axiosInstance } from "./api";
import { CountriesQuery } from "../interfaces/interfaces";

export const getCountries = async ( page:number, itemsPerPage: number) : Promise<CountriesQuery> => {
    let url = 'country?format=json';
    if (page) {
        url += `&page=${page}`;
    }
    if (itemsPerPage) {
        url += `&per_page=${itemsPerPage}`;
    }
    return await axiosInstance.get(url);
}

 export const getCountryByName = async (name: string) : Promise<CountriesQuery> =>{
    console.log('in getCountryByName')
    
    return await axiosInstance.get(`country/${name}?format=json`);
}