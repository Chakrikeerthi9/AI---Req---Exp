import React from 'react'
import { useState } from 'react';

interface PaymentMethodProps{
    PaymentOption?: boolean;
    onClose?: ()=> void;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({PaymentOption, onClose}) => {
    if (!PaymentOption) return null; // Return null if no payment option is provided

    const [total, setTotal] = useState(0);
    const [selected, setSelected] = useState("credit_card");
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handlePayment = () => {
        setIsConfirmed(true);
        setTimeout(() => setIsConfirmed(false), 3000); // Reset after 3 seconds (optional)
      };

      const addCost = (amount:number) => {
        setTotal((prevTotal) => prevTotal + amount);
      };

  return (

        // Payment Method Modal
        // This div acts as a backdrop for the modal
        // It covers the entire screen with a semi-transparent black background
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center'>
            <button className='cursor-pointer text-gray-700 ml-160 hover:text-white' onClick={()=>onClose && onClose()}>X</button>
            <div className='bg-white p-4 rounded-lg shadow-lg w-[45%]'>
                <div className='flex flex-col gap-2max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg text-center'>
                    <h3 >Purchase 10 Credits to Activate MemberShip with limit of 30 Credits</h3>
                    <h2 className="text-lg font-semibold mb-4">Select Cost</h2>
                    <div className="flex justify-center space-x-3 mb-4">
                        {[1, 5, 10].map((cost) => (
                        <button
                            key={cost}
                            onClick={() => addCost(cost)}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
                        >
                            +{cost}
                        </button>
                        ))}
                    </div>
                    <div className="text-xl font-bold text-gray-800">
                        Total: <span className="text-green-600">${total}</span>
                    </div>
                    </div>
                <div className="space-y-3">
                    {[
                    { id: "credit_card", label: "Credit Card" },
                    { id: "paypal", label: "PayPal" },
                    { id: "Apple_pay", label: "Apple Pay" },
                    ].map((option) => (
                    <label
                        key={option.id}
                        className={`flex items-center space-x-3 p-3 border rounded-lg cursor-pointer ${
                        selected === option.id ? "border-blue-500 bg-blue-100" : "border-gray-300"
                        }`}
                    >
                        <input
                        type="radio"
                        name="payment"
                        value={option.id}
                        checked={selected === option.id}
                        onChange={() => setSelected(option.id)}
                        className="hidden"
                        />
                        <div
                        className={`w-5 h-5 flex items-center justify-center border-2 rounded-full ${
                            selected === option.id ? "border-blue-500" : "border-gray-400"
                        }`}
                        >
                        {selected === option.id && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>}
                        </div>
                        <span className="text-gray-700">{option.label}</span>
                    </label>
                    ))}
                </div>
                <button
                    onClick={handlePayment}
                    className={`mt-4 w-full text-white py-2 rounded-lg transition-colors duration-300 ${
                    isConfirmed ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 hover:bg-gray-600"
                    }`}
                >
                    {isConfirmed ? "Payment Confirmed" : "Proceed to Payment"}
                </button>
            </div>
        </div>
  )
}

export default PaymentMethod