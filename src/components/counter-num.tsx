import { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const CounterNum = ({ endValue }: { endValue: number }) => {
  const [start, setStart] = useState(0);

  useEffect(() => {
    setStart(1);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="font-extrabold text-7xl text-blue">
        {start && <CountUp
        enableScrollSpy={true}
        // scrollSpyOnce={true}
        start={0} end={endValue} duration={4} />}
      </div>
    </div>
  );
};

export default CounterNum;
