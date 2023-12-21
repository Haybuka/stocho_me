/* eslint-disable react/prop-types */
import CountUp from 'react-countup';

const Card = ({ amount, title, delay }) => {
  return (
    <aside className="bg-white rounded-lg p-10 text-center lg:my-0 col-span-12 md:col-span-6 xl:col-span-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="my-1 text-2xl">
        <CountUp delay={delay} end={amount} />
      </p>
    </aside>
  );
};

export default Card;
