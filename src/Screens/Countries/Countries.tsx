import { ChangeEvent, FormEvent, FunctionComponent, MouseEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { selectCountries, fetchCountries } from './countriesSlice';
import { CountryTile } from '../../shared_ui_components/CountryTile/CountryTile';
import { Countries } from '../../interfaces/interfaces';
import { Filters } from '../../shared_ui_components/Filters/Filters';
import { TableHeader } from '../../shared_ui_components/TableHeader/TableHeader';

import { CountriesListProps } from './CountriesListProps';
import './styles.scss';

export const CountriesList: FunctionComponent<CountriesListProps> = (props: CountriesListProps) => {
  const fetchedCountries = useSelector(selectCountries);
  const dispatch = useDispatch();
  const [buttons, setButtons] = useState<Array<number>>([]);
  const [filtered, setFiltered] = useState<Array<Countries>>([]);
  const [filterBy, setFilterBy] = useState<string>('');
  const [itemsPerPage, setItemsPerPage] = useState<number>(0);

  const { loading, error, items = [], pages, per_page, page } = fetchedCountries;

  useEffect(() => {
      dispatch(fetchCountries({page: 1, itemsPerPage:50}));
  }, []);

  useEffect(() => {
    if (pages > 0) {
      calculatePaginationButtons();
      setItemsPerPage(per_page);
    }

  }, [pages, per_page]);

  useEffect(() => {
    setFiltered(items);
  }, [items]);

  const calculatePaginationButtons = ():void => {
      let p: number = 1;
      let items: number[] = [];
  
      while(p <= pages) {
        items.push(p);
        p++;
      }
  
      setButtons(items);
  }

  const filterByName = (value: string) => {
    let newItems: Countries[] = []; 
    if (value) {
      newItems = items.filter((item: { name: string; }) => item.name.toLowerCase().startsWith(value.toLowerCase()));
    } else {
      newItems = items;
    }

    setFiltered(newItems);

  }

  const onChange = (event: FormEvent<HTMLInputElement>): void => {
      const value = event.currentTarget.value;

      setFilterBy(value);
      filterByName(value)
  }

  const onSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
    const value: any = event.target.value;
  
    setItemsPerPage(value);
    dispatch(fetchCountries({page: 1, itemsPerPage: value}));
  }

  const onPaginationButtonClick = (event: MouseEvent<HTMLSpanElement>) => {
    const value: string = event.currentTarget.innerHTML;
    dispatch(fetchCountries({page: value, itemsPerPage }));
  } 

  const sortFetchedItemsBy = (prop: string, direction: number): void => {
    let sorted = [...items].sort((a: any, b: any) => a[prop].localeCompare(b[prop]) * direction );
    setFiltered(sorted);
  }

  const sortBy = (event: MouseEvent<HTMLSpanElement>): void => {
    const name = event.currentTarget.dataset.prop;
    const direction = 1;
    switch(name) {
       case 'Iso Code':
         sortFetchedItemsBy('iso2Code', direction);
       break;
       case 'Name':
        sortFetchedItemsBy('name', direction);
       break;
       case 'Capital City':
        sortFetchedItemsBy('capitalCity', direction);
       break;
       case 'Longitude':
        sortFetchedItemsBy('longitude', direction);
       break;
       case 'Latitude':
        sortFetchedItemsBy('latitude', direction);
       break;
       default:
       break;   
    }
  }

  if (loading) {
    return (
      <section className="list">
        <span>Loading...</span>
      </section>);
  }

  if (error) {
    return (
      <section className="list">
        <span>Something went wrong and coudn't fetch data</span>
      </section>); 
  } 

  return (
    <section className="list">
        <Filters 
            filterBy={filterBy}
            onChange={onChange}
            itemsPerPage={itemsPerPage}
            onSelect={onSelect}
        />
        <TableHeader clasName='list-header' onPress={sortBy} />
      {
        filtered.map((item: Countries) => 
          <section className='list-row'>
            <TableHeader 
              clasName='list-header list-header--vertical' 
              onPress={sortBy} />
            <CountryTile 
              key={item.id} 
              country={item}
            />
          </section>
           )
      } 

      <div className='list-controls'>
        {buttons.map(button => <span 
              key={button}
              onClick={onPaginationButtonClick}
              className={button === page ? 'list-controls-item list-controls-item--current' : 'list-controls-item'}
            >
              {button}
            </span>)}
      </div>
    </section>
  )
}