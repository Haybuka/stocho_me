import { useGetDashboardData } from '../../api/dashboard';

import { toast } from 'react-toastify';
import Button from '../../components/button';
import Card from './card';

const Dashboard = () => {
  // React query usage starts here
  const onSuccess = () => {
    toast.success('Data fetched');
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
    data: dashboardData,
    isLoading: loading,
    isFetching,
  } = useGetDashboardData(options);

  console.log(dashboardData);
  if (loading || isFetching) {
    return (
      <main className="w-full h-full flex justify-center items-center">
        <Button isSubmitting={true} />
      </main>
    );
  }
  return (
    <section className="w-full grid grid-cols-12 gap-2">
      <Card
        title={'Clients'}
        amount={dashboardData?.total?.clients}
        delay={0.5}
      />
      <Card
        title={'Transaction Amount'}
        amount={dashboardData?.total?.transaction_amount}
        delay={0.5}
      />
      <Card
        title={'Weekly Amount due to platform'}
        amount={dashboardData?.weekly_amount_due_to_platforms}
        delay={1}
      />
      <Card
        title={'Daily Amount due to platform'}
        amount={dashboardData?.daily_amount_due_to_platforms}
        delay={1}
      />
      <Card
        title={'Completed Amount'}
        amount={dashboardData?.total?.completed_transaction_amount}
        delay={1}
      />
      <Card
        title={'Failed Transaction Amount'}
        amount={dashboardData?.total?.failed_transaction_amount}
        delay={0.8}
      />
    </section>
  );
};

export default Dashboard;
