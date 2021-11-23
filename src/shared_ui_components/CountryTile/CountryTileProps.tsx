import { Countries } from '../../interfaces/interfaces';

export interface CountryTileProps {
    key: String,
    country: Countries, // better, accepts array children
    style?: React.CSSProperties; // to pass through style props
    onPress?: void;// form events! the generic parameter is the type of event.target
}