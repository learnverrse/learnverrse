import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiCreditCard, FiDollarSign, FiMail, FiLinkedin, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { BsPrinter } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
import { useNavigate } from 'react-router';

import { VerveCard, MasterCard, VisaCard } from '@/components/details';
import HeaderNav from "@/components/UI/HeaderNav";
import Footer from "@/components/UI/footer";
import Loader from "@/components/UI/Loader";


// Main Enrollment Component
const EnrollmentPage = () => {

    const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  useEffect(() => {
      const fetchData = async () => {
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
        setLoading(false);
      };
      fetchData();
    }, []);

  const handleInputChange = (field, value) => {
    setCardData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1); // Go to previous page
    } else {
      navigate('/'); // Fallback to home
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <HeaderNav />
        <div className="flex-grow flex items-center justify-center">
          <Loader />
        </div>
        <Footer />
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderNav />
      
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Back Button */}
        <button onClick={handleGoBack} className="flex items-center space-x-2 border-2 px-4 py-2 rounded-md text-gray-600 hover:text-gray-900 mb-8">
          <FiArrowLeft className="w-4 h-4" />
          <span>Back to course</span>
        </button>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Complete Your Enrollment With Learn<span className="text-primary-600">verrse</span>
          </h1>
          
          <p className="text-gray-600 mb-6">
            You have chosen <span className="font-semibold text-gray-900">Product Design</span> as your course.
          </p>

          <div className="mb-8">
            <span className="text-gray-600">This course is currently priced at </span>
            <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-md font-bold text-lg">
              ₦15,000
            </span>
          </div>

          {/* Payment Method Selection */}
          <div className="flex space-x-2 mb-8 bg-white py-4  md:px-6 rounded-lg border ">
            <button
              onClick={() => setPaymentMethod('card')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-2 md:px-4 rounded-lg border  ${
                paymentMethod === 'card' 
                  ? 'bg-primary-50 border-primary-200 text-primary-700' 
                  : 'bg-white border-0 text-gray-600'
              }`}
            >
              <FiCreditCard className="w-4 h-4" />
              <span>Card</span>
            </button>
            <button
              onClick={() => setPaymentMethod('transfer')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-2 md:px-4 rounded-lg border ${
                paymentMethod === 'transfer' 
                  ? 'bg-primary-50 border-primary-200 text-primary-700' 
                  : 'bg-white border-0 text-gray-600'
              }`}
            >
            <BsPrinter  className="w-4 h-4" /> 
              <span>Transfer</span>
            </button>
            <button
              onClick={() => setPaymentMethod('ussd')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-2 md:px-4 rounded-lg border ${
                paymentMethod === 'ussd' 
                  ? 'bg-primary-50 border-primary-200 text-primary-700' 
                  : 'bg-white border-0 text-gray-600'
              }`}
            >
              <FiDollarSign className="w-4 h-4" />
              <span>USSD</span>
            </button>
            <button
              onClick={() => setPaymentMethod('other')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-2 md:px-4 rounded-lg border ${
                paymentMethod === 'other' 
                  ? 'bg-primary-50 border-primary-200 text-primary-700' 
                  : 'bg-white border-0 text-gray-600'
              }`}
            >
                 <MdOutlinePayments className="w-4 h-4" />
              <span>Other</span>
            </button>
          </div>

          {/* Card Payment Form */}
          {paymentMethod === 'card' && (
            <div className="space-y-6">
              {/* Card Icons */}
              <div className="flex space-x-4">
                <img src={VerveCard} alt="Verve Card"  />
                <img src={VisaCard} alt="Visa Card"  />
                <img src={MasterCard} alt="Master Card"  />
              </div>

              {/* Card Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9123 4567"
                  value={cardData.number}
                  onChange={(e) => handleInputChange('number', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                />
              </div>

              {/* Expiry and CVV */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={cardData.expiry}
                    onChange={(e) => handleInputChange('expiry', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    value={cardData.cvv}
                    onChange={(e) => handleInputChange('cvv', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Cardholder Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  placeholder="Adebola Buhari Chigozie"
                  value={cardData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                />
              </div>

              {/* Pay Button */}
              <button
                 onClick={() => navigate('/learner-dashboard/learning-page')} className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
              >
                Pay ₦15,000
              </button>
            </div>
          )}

          {/* Other payment methods placeholder */}
          {paymentMethod !== 'card' && (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">
                {paymentMethod === 'transfer' && 'Bank Transfer payment method coming soon'}
                {paymentMethod === 'ussd' && 'USSD payment method coming soon'}
                {paymentMethod === 'other' && 'Other payment methods coming soon'}
              </p>
              <button
                onClick={() => setPaymentMethod('card')}
                className="text-primary-600 hover:text-primary-800"
              >
                Use Card Payment Instead
              </button>
            </div>
          )}

          {/* Security Notice */}
          <div className="text-center mt-6 text-sm text-gray-500">
            <p>Your Payment Is Secured By Paystack</p>
            <p>Need Help? Contact Support At Support@Learnverse.Com</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EnrollmentPage;