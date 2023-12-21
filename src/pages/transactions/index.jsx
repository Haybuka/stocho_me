import { useGetTransactionData } from '../../api/transactions';
import Button from '../../components/button';
import TransactionTable from '../../components/table';

import { toast } from 'react-toastify';

const Transactions = () => {
  const onSuccess = () => {
    toast.success('Transaction Data fetched');
    console.log('success');
  };

  const onError = (error) => {
    console.log(error);
    toast.error('Failed to load resource data');
  };

  const options = {
    onError,
    onSuccess,
  };

  const {
    data: transactions = [],
    isFetching,
    isLoading: loading,
  } = useGetTransactionData(options);

  if (loading || isFetching) {
    return (
      <main className="w-full h-full flex justify-center items-center">
        <Button isSubmitting={true} />
      </main>
    );
  }

  return (
    <main className="bg-red-500">
      <TransactionTable transactions={transactions} />
    </main>
  );
};

export default Transactions;
