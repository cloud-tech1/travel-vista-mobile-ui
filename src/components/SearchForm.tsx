
import React, { useState } from 'react';
import { Calendar, Users, ArrowLeftRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SearchForm = () => {
  const [tripType, setTripType] = useState<'round' | 'one-way'>('round');
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  const swapCities = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  return (
    <div className="bg-white rounded-2xl p-6 mx-4 neu-shadow">
      {/* Trip Type Toggle */}
      <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
        <button
          onClick={() => setTripType('round')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
            tripType === 'round'
              ? 'bg-white text-sky-blue-600 shadow-sm'
              : 'text-gray-600'
          }`}
        >
          Round Trip
        </button>
        <button
          onClick={() => setTripType('one-way')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
            tripType === 'one-way'
              ? 'bg-white text-sky-blue-600 shadow-sm'
              : 'text-gray-600'
          }`}
        >
          One Way
        </button>
      </div>

      {/* From and To Cities */}
      <div className="relative mb-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
            <input
              type="text"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              placeholder="Delhi"
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
            <input
              type="text"
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
              placeholder="Mumbai"
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
        {/* Swap Button */}
        <button
          onClick={swapCities}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-sky-blue-500 text-white p-2 rounded-full hover:bg-sky-blue-600 transition-colors"
        >
          <ArrowLeftRight size={16} />
        </button>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Departure</label>
          <div className="relative">
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-blue-500 focus:border-transparent"
            />
            <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
          </div>
        </div>
        
        {tripType === 'round' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Return</label>
            <div className="relative">
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-blue-500 focus:border-transparent"
              />
              <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
            </div>
          </div>
        )}
      </div>

      {/* Passengers */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
        <div className="relative">
          <select
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-blue-500 focus:border-transparent appearance-none"
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
            ))}
          </select>
          <Users className="absolute right-3 top-3 text-gray-400" size={20} />
        </div>
      </div>

      {/* Search Button */}
      <Button className="w-full travel-gradient text-white py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
        Search Flights
      </Button>
    </div>
  );
};

export default SearchForm;
