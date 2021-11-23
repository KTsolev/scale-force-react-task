
import React, { FunctionComponent } from 'react';
import { CountryTileProps } from './CountryTileProps';

export const CountryTile: FunctionComponent<CountryTileProps> = (props: CountryTileProps) => {
    const { country, onPress } = props;
    return (
        <div className='country-tile'>
            <span>{country.iso2code}</span>
            <span>{country.name}</span>    
            <span>{country.capitalCity}</span>    
            <span>{country.longitude}</span>    
            <span>{country.latitude}</span>
        </div>
    );
}