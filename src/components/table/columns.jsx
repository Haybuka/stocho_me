/* eslint-disable react/prop-types */
import { format } from 'date-fns';

export const COLUMNS = [
  {
    Header: 'Client Id',
    accessor: 'client_id',
    Cell: ({ value }) => {
      return (
        <p className="text-sm text-[#606060] text-left">
          {value.slice(0, 12) + '...'}
        </p>
      );
    },
  },
  {
    Header: 'Name',
    accessor: 'client.name',
    Cell: ({ value }) => {
      return <p className="text-sm text-[#606060] text-left">{value}</p>;
    },
  },
  {
    Header: 'Email',
    accessor: 'client.email',
    Cell: ({ value }) => {
      return <p className="text-sm text-[#606060] text-left">{value}</p>;
    },
  },
  {
    Header: 'Amount',
    accessor: 'amount',
    Cell: ({ value }) => {
      return (
        <p className="text-sm text-[#606060] text-left">
          {value
            ? new Intl.NumberFormat('en-NG', {
                style: 'currency',
                currency: 'NGN',
              }).format(value)
            : '----------'}
        </p>
      );
    },
  },
  {
    Header: 'Status',
    Footer: '',
    accessor: 'status',
    Cell: ({ value }) => {
      return <p className="text-sm text-[#606060] text-left">{value}</p>;
    },
  },
  {
    Header: 'Date Created',
    accessor: 'client.created_at',
    Cell: ({ value }) => {
      const formattedDate = format(new Date(value), 'MM/dd/yyyy');
      return (
        <p className="text-sm text-[#606060] text-left">{formattedDate}</p>
      );
    },
  },
];
