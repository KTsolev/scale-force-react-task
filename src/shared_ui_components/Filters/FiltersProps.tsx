export interface FiltersProps {
    filterBy: string,
    itemsPerPage: number,
    style?: React.CSSProperties,
    onChange: (event: React.FormEvent<HTMLInputElement>) => void,
    onSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void
};