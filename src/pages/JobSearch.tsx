
import React, { useState } from 'react';
import { Search, Filter, MapPin, Building, DollarSign, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const JobSearch = () => {
  const [searchKeywords, setSearchKeywords] = useState('');

  const jobListings = [{
    title: "Waiter's Assistant (M/F)",
    company: "Terme Olimia d.d.",
    location: "Slovenia, Podčetrtek",
    sector: "Hotels and similar accommodation",
    event: "Seize the Summer with EURES 2025",
    language: "English - Good",
    salary: "1277 - 1278 EUR (Gross pay)",
    description: "Waiter's Assisant (M/F) Your Responsibilities: Taking guest orders Serving food and beverages Serving drinks at the bar Serving drinks during pension meals Clearing tables, setting up restaurant spaces, and preparing equipment and inventory for service Ensuring cleanliness and organization of the workspace Performing other tasks as assigned by the supervisor Requirements: Level IV education (secondary school diploma) At least 3 months of work ..."
  },
  {
    title: "Waiter's Assistant (M/F)",
    company: "Terme Olimia d.d.",
    location: "Slovenia, Podčetrtek",
    sector: "Hotels and similar accommodation",
    event: "Seize the Summer with EURES 2025",
    language: "English - Good",
    salary: "1277 - 1278 EUR (Gross pay)",
    description: "Waiter's Assisant (M/F) Your Responsibilities: Taking guest orders Serving food and beverages Serving drinks at the bar Serving drinks during pension meals Clearing tables, setting up restaurant spaces, and preparing equipment and inventory for service Ensuring cleanliness and organization of the workspace Performing other tasks as assigned by the supervisor Requirements: Level IV education (secondary school diploma) At least 3 months of work ..."
  }
  ];


  const JobComponent = ({ jobListing }) => {
    return (
      <div className="bg-white rounded-lg border-b border-black/80 shadow-sm p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border-2 border-gray-300 rounded flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{jobListing.title}</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <Building size={24} className="text-gray-600" />
            </div>
            <span className="font-semibold text-gray-700">Terme Olimia</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Offered by:</span>{' '}
              <span className="text-blue-600">{jobListing.company}</span>
            </p>
            <p className="text-gray-600 mb-6">
              <span className="font-semibold">Available for event:</span>{' '}
              <span className="text-blue-600">{jobListing.event}</span>
            </p>

            <div className="">
              <h3 className="font-semibold text-gray-800 mb-2">About:</h3>
              <p className="text-gray-600 leading-relaxed">{jobListing.description}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Workplace:</h4>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={16} />
                <span>{jobListing.location}</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Sector:</h4>
              <span className="text-blue-600">{jobListing.sector}</span>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Language skills:</h4>
              <div className="flex items-center gap-2 text-gray-600">
                <Globe size={16} />
                <span>{jobListing.language}</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Salary range (Monthly):</h4>
              <div className="flex items-center gap-2 text-gray-600">
                <DollarSign size={16} />
                <span>{jobListing.salary}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto py-14" style={{ paddingLeft: '6%', paddingRight: '6%', paddingTop: '2rem' }}>
        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search by keywords"
                value={searchKeywords}
                onChange={(e) => setSearchKeywords(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              FILTERS
              <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">2</span>
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8">
              FIND
            </Button>
          </div>
        </div>

        {/* Page Title */}
        <div className="text-center mb-5">
          <h1 className="text-5xl font-bold text-gray-800">Find your job</h1>
          {/* <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
            <Search className="text-gray-400" size={32} />
          </div> */}
        </div>
        <div className='border-t-2 border-black'>
          {jobListings.map((x, index) =>
            <JobComponent key={index} jobListing={x} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobSearch;
