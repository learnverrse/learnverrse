import React from 'react';
import { Calendar } from '@/components/UI/calendar';

const CalenderSection = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <section className="flex h-full flex-col gap-12 pb-4 sm:flex-row md:flex-col">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      />

      {/* messages */}
      <div>
        <h2 className="text-lg font-semibold">Recent Messages</h2>
        <ul className="mt-2 space-y-2">
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
                <h3 className="text-[16px] font-semibold">{from}</h3>
                <p className="text-[14px]">{message}</p>
                <small className="text-[10px] font-light">{time}</small>
              </div>
              <button className="cursor-pointer bg-gray-200 p-2">View</button>
            </li>
          ))}
        </ul>
      </div>
      {/* section above keeps cutting off without this div, will research more about it 
      <div className="mt-10 text-black">END OF COLUMN</div> */}
    </section>
  );
};

export default CalenderSection;
