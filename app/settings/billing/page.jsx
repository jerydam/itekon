'use client'
import { useState } from 'react';
import Navbar from '@/components/nav';
import Sidebar from '@/components/sidebar';
import React from 'react';

const Billing = () => {
  const [currentSubscription, setCurrentSubscription] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (subscription) => {
    if (isSubscribed && subscription === currentSubscription) {
      setCurrentSubscription(null);
      setIsSubscribed(false);
    } else {
      setCurrentSubscription(subscription);
      setIsSubscribed(true);
    }
  };

  const handleCancelSubscription = () => {
    setCurrentSubscription(null);
    setIsSubscribed(false);
  };

  return (
    <div className='flex justify-center'>
      <Sidebar />
      <div className='w-full'>
        <Navbar />
        <p className='m-5'>Setting {'>'} Billing</p>
        {isSubscribed ? (
          <p className='m-5 text-sm'>You are currently subscribed to the {currentSubscription} plan.</p>
        ) : (
          <p className='m-5 text-sm'>You have no active subscription.</p>
        )}
        <div className='flex gap-4'>
          {/* Basic Plan */}
          <div className='border-2 m-5 rounded p-5 h-full 1/4 text-center'>
            <p className='m-5 font-bold'>Basic</p>
            <p className='m-5 font-bold text-[#2D6C56]'>$15</p>
            <p className='m-5'>{`(paid monthly)`}</p>
            <p className='m-5'>5 Vehicles</p>
            {isSubscribed && currentSubscription === 'Basic' ? (
              <button  className="border-b-[#2D6C56] border-b-4 border-[#2D6C56] border-2 text-[#2D6C56] font-bold py-2 mx-2 px-4 rounded"
               onClick={handleCancelSubscription}>Cancel Subscription</button>
            ) : (
              <button  className="border-b-[#2D6C56] border-b-4 border-[#2D6C56] border-2 text-[#2D6C56] font-bold py-2 mx-2 px-4 rounded"
               onClick={() => handleSubscribe('Basic')}>Subscribe</button>
            )}
          </div>

          {/* Standard Plan */}
          <div className='border-2 m-5 rounded p-5 h-full 1/4 text-center'>
            <p className='m-5 font-bold'>Standard</p>
            <p className='m-5 font-bold text-[#2D6C56] '>$20</p>
            <p className='m-5'>{`(paid monthly)`}</p>
            <p className='m-5'>20 Vehicles</p>
            {isSubscribed && currentSubscription === 'Standard' ? (
              <button  className="border-b-[#2D6C56] border-b-4 border-[#2D6C56] border-2 text-[#2D6C56] font-bold py-2 mx-2 px-4 rounded"
               onClick={handleCancelSubscription}>Cancel Subscription</button>
            ) : (
              <button  className="border-b-[#2D6C56] border-b-4 border-[#2D6C56] border-2 text-[#2D6C56] font-bold py-2 mx-2 px-4 rounded"
               onClick={() => handleSubscribe('Standard')}>Subscribe</button>
            )}
          </div>

          {/* Super Standard Plan */}
          <div className='border-2 m-5 rounded p-5 h-full 1/4 text-center'>
            <p className='m-5 font-bold'>Super Standard</p>
            <p className='m-5 font-bold text-[#2D6C56]'>$150</p>
            <p className='m-5'>{`(paid monthly)`}</p>
            <p className='m-5'>100 Vehicles</p>
            {isSubscribed && currentSubscription === 'Super Standard' ? (
              <button  className="border-b-[#2D6C56] border-b-4 border-[#2D6C56] border-2 text-[#2D6C56] font-bold py-2 mx-2 px-4 rounded"
               onClick={handleCancelSubscription}>Cancel Subscription</button>
            ) : (
              <button  className="border-b-[#2D6C56] border-b-4 border-[#2D6C56] border-2 text-[#2D6C56] font-bold py-2 mx-2 px-4 rounded"
              onClick={() => handleSubscribe('Super Standard')}>Subscribe</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
