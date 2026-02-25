import { useState, useEffect } from "react";

const timerColor = [
  { name: 'red', time: 1, next: 'yellow' },
  { name: 'yellow', time: 1, next: 'green' },
  { name: 'green', time: 1, next: 'red' },
]

export default function TrafficLights() {
  const [light, setLight] = useState('red');
  useEffect(() => {
    const current = timerColor.find((c) => c.name === light);
    const timer = setTimeout(() => {
      setLight(current.next)
    }, current.time * 1000);

    return () => clearTimeout(timer)
  }, [light])
  return (
    <div>
      <h2 data-testid="title">Traffic Lights</h2>
      <div
        className="traffic-light"
        id="traffic-light"
        data-testid="traffic-light"
      >
        <div
          id="red-light"
          data-testid="red-light"
          className={`circle ${light === 'red' ? 'red-on' : ''}`}
        ></div>
        <div
          id="yellow-light"
          data-testid="yellow-light"
          className={`circle ${light === 'yellow' ? 'yellow-on' : ''}`}
        ></div>
        <div
          id="green-light"
          data-testid="green-light"
          className={`circle ${light === 'green' ? 'green-on' : ''}`}
        ></div>
      </div>
    </div>
  );
}
