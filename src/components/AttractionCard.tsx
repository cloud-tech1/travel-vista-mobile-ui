
import React from 'react';
import { Ticket, Clock, Users } from 'lucide-react';

interface AttractionProps {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  price: number;
  duration: string;
  capacity: string;
  color: string;
}

const AttractionCard = ({ 
  title, 
  category, 
  icon, 
  price, 
  duration, 
  capacity, 
  color 
}: AttractionProps) => {
  return (
    <div className="bg-white rounded-2xl p-4 neu-shadow hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-3`}>
        {icon}
      </div>
      
      <div className="mb-3">
        <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <Clock size={14} />
          <span className="text-sm ml-2">{duration}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users size={14} />
          <span className="text-sm ml-2">{capacity}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Ticket className="text-sunset-orange-500" size={16} />
          <span className="text-lg font-bold text-sky-blue-600 ml-1">₹{price}</span>
        </div>
        <button className="bg-gradient-to-r from-sky-blue-500 to-sunset-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-md transition-all">
          Book
        </button>
      </div>
    </div>
  );
};

export default AttractionCard;
