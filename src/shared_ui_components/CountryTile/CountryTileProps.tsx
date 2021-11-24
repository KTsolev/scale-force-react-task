import { MouseEventHandler, TouchEventHandler } from 'react';
import { Countries } from '../../interfaces/interfaces';

export interface CountryTileProps {
    key: String,
    country: Countries, 
    style?: React.CSSProperties, 
    onPress?: TouchEventHandler<HTMLDivElement> | MouseEventHandler<HTMLDivElement> | undefined
};