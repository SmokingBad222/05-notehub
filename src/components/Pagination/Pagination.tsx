import ReactPaginate from 'react-paginate';
import css from './Pagination.module.css';

interface PaginationProps {
  pageCount: number;
  onPageChange: (page: number) => void;
}
export default function Pagination({ pageCount, onPageChange }: PaginationProps) {
  return (
    <ReactPaginate
      className={css.pagination}
      pageCount={pageCount}
      onPageChange={(e) => onPageChange(e.selected + 1)}
    />
  );
}
