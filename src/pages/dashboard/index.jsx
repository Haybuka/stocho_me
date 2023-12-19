import CountUp from 'react-countup';

const Dashboard = () => {
  return (
    <section className="w-full">
      <aside className="bg-white rounded-lg p-10 text-center">
        <h3 className="text-lg font-semibold">Transaction Amount</h3>
        <p className="my-1 text-2xl">
          <CountUp delay={1} end={1000} />
        </p>
      </aside>
    </section>
  );
};

export default Dashboard;
