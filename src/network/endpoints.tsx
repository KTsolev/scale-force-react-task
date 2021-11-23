import { axiosInstance } from "./api";
import { CountriesQuery } from "../interfaces/interfaces";

export const getCountries = async () : Promise<CountriesQuery> =>
 await axiosInstance.get('country?format=json');

 export const filterCountries = async (id: string) : Promise<CountriesQuery> =>
 await axiosInstance.get(`country/${id}?format=json`);