import React from 'react';
import { Calendar } from '@/components/UI/calendar';

const CalenderSection = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <section className="flex flex-col gap-12">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      />

      {/* messages */}
      <div>
        <h2 className="text-lg font-semibold">Recent Messages</h2>
        <ul className="scroll-container mt-2 h-[50%] overflow-y-auto">
          {[
            {
              from: ' Message from James . T.',
              message: `Will the next class be live or recorded?`,
              time: '1 hour ago',
            },
            {
              from: ' Message from James . T.',
              message: `Will the next class be live or recorded?`,
              time: '1 hour ago',
            },
            {
              from: ' Message from James . T.',
              message: `Will the next class be live or recorded?`,
              time: '1 hour ago',
            },
            {
              from: ' Message from James . T.',
              message: `Will the next class be live or recorded?`,
              time: '1 hour ago',
            },
            {
              from: ' Message from James . T.',
              message: `Will the next class be live or recorded?`,
              time: '1 hour ago',
            },
          ].map(({ from, message, time }, index) => (
            <li
              className="flex items-center justify-between border-b py-2"
              key={index}
            >
              <div>
                <h3 className="text-[12px] font-semibold">{from}</h3>
                <p className="text-[10px]">{message}</p>
                <small className="text-[8px] font-light">{time}</small>
              </div>
              <button className="cursor-pointer bg-gray-200 p-2">View</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CalenderSection;
