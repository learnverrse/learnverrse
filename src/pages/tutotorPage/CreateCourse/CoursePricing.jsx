import React, { useState } from 'react';
import CreateCourseNav from '@/components/UI/CreateCourseNav';
import useAppContext from '@/hooks/useAppContext';
import { useNavigate } from 'react-router';

const CoursePricing = () => {
  const navigate = useNavigate();

  const {
    dispatch,
    state: { courseData },
  } = useAppContext();

  const [subscriptionType, setSubscriptionType] = useState(
    courseData.subscription || 'FREE'
  );

  const [price, setPrice] = useState(courseData.price || '');
  // const [discount, setDiscount] = useState(courseData.discount || '');

  const handleSubscriptionChange = (e) => {
    setSubscriptionType(e.target.value);
    if (e.target.value === 'FREE') {
      setPrice(0); // Reset price if subscription is free
    }
  };

  const saveAsDraft = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SAVE_COURSE_PRICING',
      payload: {
        subscription: subscriptionType,
        price: subscriptionType === 'PAID' ? price : 0,
      },
    });
    console.log(courseData);
  };
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 px-6 py-2">
      <CreateCourseNav currentStep={4} />

      <form action="" className="space-y-6">
        <p className="text-sm text-gray-500">
          Create and define what your course is all about{' '}
        </p>
        <div className="space-y-3">
          <h3 className="mb-4 text-lg font-semibold">Pricing Options</h3>
          <label
            htmlFor="free"
            className="flex cursor-pointer items-center space-x-3"
          >
            <input
              type="radio"
              name="pricing"
              id="free"
              value="FREE"
              onChange={handleSubscriptionChange}
              checked={subscriptionType === 'FREE'}
              className="h-4 w-4 border-gray-300 text-purple-600 focus:ring-purple-500"
            />
            <span className="font-medium">Free</span>
          </label>
          <label
            htmlFor="paid"
            className="flex cursor-pointer items-center space-x-3"
          >
            <input
              type="radio"
              name="pricing"
              value="PAID"
              id="paid"
              onChange={handleSubscriptionChange}
              checked={subscriptionType === 'PAID'}
              className="h-4 w-4 border-gray-300 text-purple-600 focus:ring-purple-500"
            />
            <span className="font-medium">Paid</span>
          </label>
        </div>
        {subscriptionType === 'PAID' && (
          // Show pricing options only if the subscription type is PAID
          <>
            <div>
              <label htmlFor="" className="ml-4">
                Set Price
              </label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={price}
                onChange={(e) => setPrice(e.target.value.replace(/\D/, ''))}
                className="mt-2 w-full rounded-full border border-gray-400 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="" className="ml-4">
                Discount <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                type="text"
                className="mt-2 w-full rounded-full border border-gray-400 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="" className="ml-4">
                Enrollement Cap{' '}
                <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                type="text"
                className="mt-2 w-full rounded-full border border-gray-400 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <h3 className="mb-4 text-lg font-semibold">Pricing Options</h3>
          </>
        )}
        <div>
          <label
            htmlFor=""
            className="flex cursor-pointer items-center space-x-3"
          >
            <input
              type="checkbox"
              name=""
              id=""
              required
              className="h-6 w-6 md:h-4 md:w-4"
            />
            <span>
              I confirm that all course content complies with learnverse
              guidelines.
            </span>
          </label>
        </div>
        {/* Buttons */}
        <div className="mt-12 flex justify-end">
          <button
            type="submit"
            className="rounded-full bg-purple-600 px-8 py-3 font-medium text-white hover:bg-purple-700"
            onClick={(e) => saveAsDraft(e)}
          >
            Save as Draft
          </button>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="rounded-full bg-purple-600 px-8 py-3 font-medium text-white hover:bg-purple-700"
            onClick={(e) => saveAsDraft(e)}
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default CoursePricing;
