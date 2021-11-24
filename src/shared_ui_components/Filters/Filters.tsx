import React, { FunctionComponent } from 'react';
import { FiltersProps } from './FiltersProps';

export const Filters: FunctionComponent<FiltersProps> = (props: FiltersProps) => {
    const { filterBy, itemsPerPage, onChange, onSelect } = props;

    return (
        <form className='filter'>
            <input
                type='text'
                placeholder='filter by name' 
                name='filterBy' 
                value={filterBy} 
                onChange={onChange} 
            />
            <label htmlFor='per_page'>Item per page</label>
            <select 
                name='per_page'
                value={itemsPerPage} 
                onChange={onSelect}
            >
                <option selected={itemsPerPage === 20} value={20}>20</option>
                <option selected={itemsPerPage === 50} value={50}>50</option>
                <option selected={itemsPerPage === 100} value={100}>100</option>
                <option selected={itemsPerPage === 150} value={150}>150</option>
                <option selected={itemsPerPage === 200} value={200}>200</option>
            </select> 
        </form>
    );
}