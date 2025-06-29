
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import SearchForm from '@/components/SearchForm';
import TourPackageCard from '@/components/TourPackageCard';
import AttractionCard from '@/components/AttractionCard';
import { Bell, User, Camera, Utensils, Music, TreePine, Waves, Mountain } from 'lucide-react';

const Index = () => {
  const [currentTab, setCurrentTab] = useState<'home' | 'search' | 'bookings' | 'profile'>('home');

  const tourPackages = [
    {
      id: '1',
      title: 'Himalayan Adventure',
      location: 'Manali, Himachal Pradesh',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
      price: 15999,
      originalPrice: 19999,
      duration: '6 Days 5 Nights',
      rating: 4.8,
      reviews: 324
    },
    {
      id: '2',
      title: 'Tropical Paradise',
      location: 'Goa Beaches',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
      price: 12999,
      originalPrice: 16999,
      duration: '4 Days 3 Nights',
      rating: 4.6,
      reviews: 256
    },
    {
      id: '3',
      title: 'Heritage Explorer',
      location: 'Rajasthan Royal',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      price: 18999,
      originalPrice: 23999,
      duration: '7 Days 6 Nights',
      rating: 4.9,
      reviews: 189
    }
  ];

  const attractions = [
    {
      id: '1',
      title: 'Adventure Sports',
      category: 'Thrilling Activities',
      icon: <Mountain className="text-white" size={24} />,
      price: 2999,
      duration: '4-6 hours',
      capacity: 'Up to 12 people',
      color: 'bg-gradient-to-br from-red-500 to-pink-500'
    },
    {
      id: '2',
      title: 'Food Tours',
      category: 'Culinary Experience',
      icon: <Utensils className="text-white" size={24} />,
      price: 1499,
      duration: '3-4 hours',
      capacity: 'Up to 8 people',
      color: 'bg-gradient-to-br from-yellow-500 to-orange-500'
    },
    {
      id: '3',
      title: 'Cultural Shows',
      category: 'Traditional Performances',
      icon: <Music className="text-white" size={24} />,
      price: 899,
      duration: '2 hours',
      capacity: 'Up to 50 people',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-500'
    },
    {
      id: '4',
      title: 'Photography Walk',
      category: 'Guided Tours',
      icon: <Camera className="text-white" size={24} />,
      price: 799,
      duration: '3 hours',
      capacity: 'Up to 6 people',
      color: 'bg-gradient-to-br from-green-500 to-teal-500'
    }
  ];

  if (currentTab !== 'home') {
    return (
      <Layout currentTab={currentTab} onTabChange={setCurrentTab}>
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {currentTab.charAt(0).toUpperCase() + currentTab.slice(1)} Screen
            </h2>
            <p className="text-gray-600">This screen is under development</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout currentTab={currentTab} onTabChange={setCurrentTab}>
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80" 
            alt="Travel destination"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        </div>
        
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 pt-8">
          <div>
            <h1 className="text-white text-2xl font-bold">Welcome Back!</h1>
            <p className="text-white/80 text-sm">Where would you like to go?</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
              <Bell className="text-white" size={20} />
            </button>
            <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
              <User className="text-white" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div className="relative -mt-16 z-10 mb-8">
        <SearchForm />
      </div>

      {/* New Trip Booking Section */}
      <div className="px-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">New Trip Booking</h2>
          <button className="text-sky-blue-600 font-medium">View All</button>
        </div>
        
        <div className="flex overflow-x-auto pb-4">
          {tourPackages.map(pkg => (
            <TourPackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </div>

      {/* Entry Booking Section */}
      <div className="px-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Entry Booking</h2>
          <button className="text-sky-blue-600 font-medium">View All</button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {attractions.map(attraction => (
            <AttractionCard key={attraction.id} {...attraction} />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-3">
          <button className="bg-white rounded-xl p-4 neu-shadow text-center">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Waves className="text-white" size={24} />
            </div>
            <span className="text-sm font-medium text-gray-700">Hotels</span>
          </button>
          
          <button className="bg-white rounded-xl p-4 neu-shadow text-center">
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2">
              <TreePine className="text-white" size={24} />
            </div>
            <span className="text-sm font-medium text-gray-700">Activities</span>
          </button>
          
          <button className="bg-white rounded-xl p-4 neu-shadow text-center">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Camera className="text-white" size={24} />
            </div>
            <span className="text-sm font-medium text-gray-700">Tours</span>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
