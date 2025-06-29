
import React from 'react';
import { Clock, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TourPackageProps {
  id: string;
  title: string;
  location: string;
  image: string;
  price: number;
  originalPrice?: number;
  duration: string;
  rating: number;
  reviews: number;
}

const TourPackageCard = ({ 
  title, 
  location, 
  image, 
  price, 
  originalPrice, 
  duration, 
  rating, 
  reviews 
}: TourPackageProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden neu-shadow min-w-[280px] mr-4">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-lg">
          <div className="flex items-center space-x-1">
            <Star className="text-yellow-400 fill-current" size={14} />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-gray-500">({reviews})</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-lg leading-tight">{title}</h3>
            <div className="flex items-center text-gray-500 mt-1">
              <MapPin size={14} />
              <span className="text-sm ml-1">{location}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center text-gray-500 mb-3">
          <Clock size={14} />
          <span className="text-sm ml-1">{duration}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-sky-blue-600">₹{price.toLocaleString()}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">₹{originalPrice.toLocaleString()}</span>
            )}
          </div>
          <Button className="bg-sunset-orange-500 hover:bg-sunset-orange-600 text-white px-4 py-2 rounded-lg font-medium">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TourPackageCard;
