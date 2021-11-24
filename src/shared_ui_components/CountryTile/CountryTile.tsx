
import React, { FunctionComponent } from 'react';
import { CountryTileProps } from './CountryTileProps';
import { TableHeader } from '../TableHeader/TableHeader';
import './styles.scss';

export const CountryTile: FunctionComponent<CountryTileProps> = (props: CountryTileProps) => {
    const { country, onPress } = props;
    return (
        <div className='country-tile'>
            <span className='country-tile-item'>{country.iso2Code}</span>
            <span className='country-tile-item'>{country.name}</span>    
            <span className='country-tile-item'>{country.capitalCity}</span>    
            <span className='country-tile-item'>{country.longitude}</span>    
            <span className='country-tile-item'>{country.latitude}</span>
        </div>
    );
}