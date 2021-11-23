import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCountries, fetchCountries } from './countriesSlice';

export function CountriesList() {
  const fetchedCountries = useSelector(selectCountries);
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchCountries(null));
  }, []);

  return (
    <div>
        
    </div>
  )
}