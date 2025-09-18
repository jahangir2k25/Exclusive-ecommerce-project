import React, { useState } from "react";
import Monitor from '../assets/monitor.png';
import Gamepad from '../assets/gamepad.png';
import Container from "../components/Container";
import Payment from '../assets/paymentmethod.png'
import BreadCrumb from "../components/BreadCrumb";

const CheckOut = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");


  return (
    <>
      <Container>
        <div className="lg:my-20 my-6">
          <BreadCrumb />
        </div>
        <h2 className="text-4xl font-inter font-medium lg:mt-20 mt-6 lg:mb-12 mb-3 px-2 lg:px-0">Billing Details</h2>
        {/* Billing Details */}
        <div className="lg:flex font-poppins lg:gap-43.25 px-2 lg:px-0">
          <div className="space-y-4 text-secondary ">
            <div>
              <label className="mb-1 font-medium">First Name*</label>
              <input
                type="text"
                className="w-full bg-[#f5f5f5] rounded-sm p-2 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-1 font-medium">Company Name</label>
              <input type="text"
                className="w-full bg-[#f5f5f5] rounded-sm p-2 focus:outline-none" />
            </div>

            <div>
              <label className="mb-1 font-medium">Street Address*</label>
              <input type="text"
                className="w-full bg-[#f5f5f5] rounded-sm  p-2 focus:outline-none" required />
            </div>

            <div>
              <label className="mb-1 font-medium">Apartment, floor, etc. (optional)</label>
              <input type="text"
                className="w-full bg-[#f5f5f5] rounded-sm p-2  focus:outline-none" />
            </div>

            <div>
              <label className="mb-1 font-medium">Town/City*</label>
              <input type="text"
                className="w-full bg-[#f5f5f5] rounded-sm p-2  focus:outline-none" required />
            </div>

            <div>
              <label className="mb-1 font-medium">Phone Number*</label>
              <input type="text"
                className="w-full bg-[#f5f5f5] rounded-sm p-2 focus:outline-none" required />
            </div>

            <div>
              <label className="mb-1 text-secondary font-medium">Email Address*</label>
              <input type="email"
                className="w-full bg-[#f5f5f5] rounded-sm p-2 focus:outline-none" required />
            </div>

            <div className="flex items-center mt-3">
              <input type="checkbox"
                id="saveInfo"
                className="mr-2 " />
              <label htmlFor="saveInfo"
                className="text-sm ">
                Save this information for faster check-out next time
              </label>
            </div>
          </div>


          {/* Order Summary */}
          <div className="lg:flex-1 mt-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex justify-center items-center gap-3">
                  <img className='w-13.5 h-12' src={Monitor} alt="Monitor" />
                  <p>LCD Monitor</p>
                </div>
                <p>$650</p>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="flex justify-center items-center gap-3">
                  <img className='w-13.5 h-12' src={Gamepad} alt="Gamepad" />
                  <p>HI Gamepad</p>
                </div>
                <p>$1100</p>
              </div>

              <div className="flex justify-between border-b-2 border-secondary py-4">
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div className="flex justify-between border-b-2 border-secondary py-4">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold text-lg py-4">
                <span>Total:</span>
                <span>$1750</span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-2 mb-5">
              <label className="flex justify-between items-center gap-2">
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <h2>Bank</h2>
                </div>
                <img src={Payment} alt="" />
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <h2>Cash on delivery</h2>
              </label>
            </div>

            {/* Coupon */}
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border px-4 rounded-sm focus:outline-none"
              />
              <button className="bg-red-500 hover:bg-[#9a0606] text-white lg:px-12 lg:py-4 px-8 py-3 rounded-sm cursor-pointer">
                Apply Coupon
              </button>
            </div>

            {/* Place Order */}
            <button className="bg-red-500 hover:bg-[#9a0606] text-white lg:px-12 lg:py-4 px-8 py-3 rounded-sm cursor-pointer">
              Place Order
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CheckOut;
