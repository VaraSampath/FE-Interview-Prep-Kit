"use client";
import { useRef, useState } from "react";

const Page = () => {
  const [withoutThrottle, setWithoutThrottle] = useState(0);
  const [withThrottle, setWithThrottle] = useState(0);
  const throttleSeed = useRef<NodeJS.Timeout | null>(null);
  const myThrottle = (cb: () => void, time: number) => {
    if (throttleSeed.current) return;
    cb();
    throttleSeed.current = setTimeout(() => {
      throttleSeed.current = null;
    }, time);
  };
  const handleThrottle = () => {
    setWithoutThrottle((prev) => (prev += 1));
    myThrottle(() => {
      setWithThrottle((prev) => (prev += 1));
    }, 500);
  };
  return (
    <>
      <div className="flex flex-col gap-5">
        <h2>Throttling</h2>
        <p>
          Throttling limits the rate of function calls. It guarantees that a
          function is only executed once within a set time interval. If the
          function is called multiple times during that interval, only the first
          call is executed. Subsequent calls are ignored until the interval has
          elapsed.
        </p>
      </div>
      <div className="flex flex-col gap-10 mt-5">
        <div className="flex fle gap-4">
          <p>Without Throttle: {withoutThrottle}</p>
          <p>With usage of Throttle: {withThrottle}</p>
        </div>
        <button onClick={handleThrottle}>Send Email</button>
      </div>
    </>
  );
};

export default Page;
