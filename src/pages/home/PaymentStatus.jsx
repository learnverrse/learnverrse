import {
  FaCheck,
  FaTimes,
  FaDownload,
  FaExclamationTriangle,
  FaRegCreditCard,
} from 'react-icons/fa';
import { useNavigate } from 'react-router';
import HeaderNav from "@/components/UI/HeaderNav";
import Footer from "@/components/UI/footer";
import Loader from "@/components/UI/Loader";

import React from 'react';

const PaymentStatus = ({
  status = 'success',
  course = 'Product Design',
  amount = '#10000.00',
  date = new Date().toLocaleString(),
  transactionId = 'Tdfggsfs',
  errorCode = 'THghgjsjsb',
  errorMessage = ' Here is the error message',
  onContinue = () => {() => navigate('/dashboard')},
  onRetry = () => {},
  onDownloadReceipt = () => {() => window.print()},
  onChangePaymentMethod = () => {}

}) => {
  const isSuccess = status === 'success';
    const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-50 p-6">
      <HeaderNav />
      <div className="w-full max-w-2xl rounded-2xl bg-white p-12 shadow-lg my-6">
        <div className="mb-6 flex justify-center">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-full ${isSuccess ? 'bg-green-500' : 'bg-red-500'}`}
          >
            {isSuccess ? (
              <FaCheck className="text-2xl text-white" />
            ) : (
              <FaTimes className="text-2xl text-white" />
            )}
          </div>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-4 text-2xl font-semibold text-gray-800">
            {isSuccess ? 'Payment Successful!' : 'Payment Failed!'}
          </h1>

          <p className="text-sm text-gray-600">
            {isSuccess
              ? 'Your payment has been processed successfully.'
              : 'There was an issue with your payment.'}
          </p>
        </div>

        <div
          className={`mb-6 rounded-lg p-6 ${isSuccess ? 'bg-green-50' : 'bg-red-50'}`}
        >
          <div className="mb-4 flex items-center justify-center">
            {isSuccess ? (
              <div className="flex items-center text-green-500">
                <FaRegCreditCard className="mr-2" />
                <span>Payment Confirmed</span>
              </div>
            ) : (
              <div className="flex items-center text-red-600">
                <FaExclamationTriangle className="mr-2" />
                <span>Payment Error</span>
              </div>
            )}
          </div>

          <div className="space-y-4 text-lg">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm md:text-lg">Course:</span>
              <span className="text-sm font-medium md:text-lg">{course}</span>
            </div>
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm md:text-lg">Amount:</span>
              <span className="text-sm font-medium md:text-lg">{amount}</span>
            </div>
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm md:text-lg">Date:</span>
              <span className="text-xs font-medium md:text-lg">{date}</span>
            </div>
            {isSuccess && transactionId && (
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm md:text-lg">Transaction ID:</span>
                <span className="text-sm font-medium md:text-lg">
                  {transactionId}
                </span>
              </div>
            )}

            {!isSuccess && errorCode && (
              <div className="flex justify-between">
                <span className="text-sm md:text-lg">Error Code:</span>
                <span className="text-sm text-red-600 md:text-lg">
                  {errorCode}
                </span>
              </div>
            )}
          </div>

          {!isSuccess && errorMessage && (
            <div className="mt-4 border-t border-red-200 pt-4">
              <p className="text-sm text-red-600 md:text-lg">
                Error: {errorMessage}
              </p>
            </div>
          )}
        </div>

        {isSuccess ? (
          <div className="space-y-4">
            <button
              onClick={onContinue}
              className="w-full rounded-lg bg-green-500 py-4 font-medium text-white transition-colors duration-300 hover:bg-green-600"
            >
              Continue To Course
            </button>
            <button
              onClick={onDownloadReceipt}
              className="w-full rounded-lg border-2 border-black bg-white py-4 font-medium text-black transition-colors duration-300 hover:bg-black hover:text-white"
            >
                <FaDownload className="inline mr-2" />
              Download Receipt
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <button
              onClick={onRetry}
              className="w-full rounded-lg bg-black py-4 font-medium text-white transition-colors duration-300 hover:bg-gray-800"
            >
              Retry Payment
            </button>
            <button
              onClick={onChangePaymentMethod}
              className="w-full rounded-lg border-2 border-black bg-white py-4 font-medium text-black transition-colors duration-300 hover:bg-black hover:text-white"
            >
              Change Payment Method
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PaymentStatus;
