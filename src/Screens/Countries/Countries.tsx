import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import React, { FunctionComponent } from 'react';
import { selectCountries, fetchCountries } from './countriesSlice';
import { CountryTile } from '../../shared_ui_components/CountryTile/CountryTile';
import { Countries } from '../../interfaces/interfaces';
import { CountriesListProps } from './CountriesListProps';

export const CountriesList: FunctionComponent<CountriesListProps> = (props: CountriesListProps) => {
  const fetchedCountries = useSelector(selectCountries);
  const dispatch = useDispatch()
  const { loading, error, items = [] } = fetchedCountries;

  useEffect(() => {
      dispatch(fetchCountries(null));
  }, []);

  if (loading) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Something went wrong and coudn't fetch data</span>
  }

  return (
    <section className="list-holder">
         <div className='list-header'>
            <span>iso2code</span>
            <span>name</span>    
            <span>capitalCity</span>    
            <span>longitude</span>    
            <span>latitude</span>
        </div>
        {
          items.map((item: Countries) => 
            <CountryTile 
                key={item.id} 
                country={item}/> )
        }  
    </section>
  )
}