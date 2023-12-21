/* eslint-disable react/prop-types */
'use client';
import { useMemo } from 'react';

import {
  useTable,
  usePagination,
  useGlobalFilter,
  useFilters,
  useRowSelect,
} from 'react-table';
import GlobalFilter from './GlobalFilter';
import { COLUMNS } from './columns';
import './table.css';

const TransactionTable = ({ transactions }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => transactions, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    page,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: '',
          Header: () => <p className="text-sm text-[#606060] text-left"></p>,
        },
        ...columns,
      ]);
    }
  );

  const { pageIndex, pageSize, globalFilter } = state;
  return (
    <>
      <section className="bg-white py-3 overflow-x-scroll">
        <article className="px-10 my-3">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </article>
        <article className="flex justify-between text-black my-3">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup, id) => (
                <tr key={id} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, id) => (
                    <th
                      key={id}
                      {...column.getHeaderProps()}
                      className="font-normal capitalize text-sm text-[#303030] text-left"
                    >
                      {' '}
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, id) => {
                prepareRow(row);
                return (
                  <tr key={id} {...row.getRowProps()}>
                    {row.cells.map((cell, id) => {
                      return (
                        <td key={id} {...cell.getCellProps()} className="py-4">
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </article>
        <article className="text-[#4F4F4F] text-center text-sm">
          <p>
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>
            <p>
              Go to page :{' '}
              <input
                onChange={(e) => {
                  const pageNumber = e.target.value
                    ? Number(e.target.value) - 1
                    : 0;
                  gotoPage(pageNumber);
                }}
                type="number"
                defaultValue={pageIndex + 1}
                style={{ width: '50px', textAlign: 'center' }}
              />
            </p>
          </p>
          <aside className="flex justify-between items-center w-1/2 mx-auto my-3">
            <button
              disabled={!canPreviousPage}
              onClick={() => gotoPage(0)}
              className="text-[#4F4F4F] rotate-180"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-[#4F4F4F]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            </button>
            <button disabled={!canPreviousPage} onClick={() => previousPage()}>
              Previous
            </button>

            <select
              value={pageSize}
              style={{ margin: '0 15px', padding: '0 10px' }}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 25, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>

            <button disabled={!canNextPage} onClick={() => nextPage()}>
              Next
            </button>
            <button
              disabled={!canNextPage}
              onClick={() => gotoPage(pageCount - 1)}
              className="text-[#4F4F4F]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-[#4F4F4F]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            </button>
          </aside>
        </article>
      </section>
    </>
  );
};

export default TransactionTable;
