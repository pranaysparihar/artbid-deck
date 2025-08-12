import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronLeft, ChevronRight, Search, Globe, TrendingUp, Users, Star, Calendar, Mail, ExternalLink, QrCode, ArrowRight, BarChart3, Zap, Target, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const totalSlides = 10;
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slides = [
    // Slide 1: Title
    {
      id: 1,
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-8">
            <div className="mb-8">
              <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                The Future of the Gallery is Here
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Discover, Curate, and Sell Art with Unprecedented Insight
              </p>
            </div>
            <div className="flex items-center justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-8 py-6 rounded-2xl border border-white/20 flex items-center space-x-4">
                <h2 className="text-3xl font-bold text-white">Fornyus</h2>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 2: The Problem
    {
      id: 2,
      content: (
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-red-50 to-orange-50 p-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 text-center">
              The Gallery Model is Evolving. Are You?
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <Card className="p-8 text-center bg-white shadow-lg border-red-200">
                <Search className="w-16 h-16 text-red-500 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Talent Discovery is Difficult
                </h3>
                <p className="text-gray-600">
                  Finding the next great artist is like searching for a needle in a haystack.
                </p>
              </Card>
              
              <Card className="p-8 text-center bg-white shadow-lg border-orange-200">
                <Users className="w-16 h-16 text-orange-500 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Reaching New Collectors is Expensive
                </h3>
                <p className="text-gray-600">
                  Traditional marketing and art fairs have diminishing returns.
                </p>
              </Card>
              
              <Card className="p-8 text-center bg-white shadow-lg border-red-200">
                <TrendingUp className="w-16 h-16 text-red-500 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Market Uncertainty is High
                </h3>
                <p className="text-gray-600">
                  Guessing which artists and styles will sell is a constant risk.
                </p>
              </Card>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 3: The Solution
    {
      id: 3,
      content: (
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-blue-50 to-purple-50 p-12">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              What if you had a data-powered scout, a global sales team, and a market analyst, all in one platform?
            </h1>
            <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-16">
              Introducing Fornyus
            </h2>
            
            <div className="relative max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-6 rounded-2xl text-2xl font-bold flex items-center space-x-4">

                  <span>Fornyus</span>
                </div>
              </div>
              
              <div className="flex justify-around items-center">
                <div className="text-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg mb-4">
                    <Search className="w-12 h-12 text-blue-600 mx-auto" />
                  </div>
                  <p className="font-semibold text-gray-700">Artists</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg mb-4">
                    <BarChart3 className="w-12 h-12 text-purple-600 mx-auto" />
                  </div>
                  <p className="font-semibold text-gray-700">Data</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg mb-4">
                    <Globe className="w-12 h-12 text-green-600 mx-auto" />
                  </div>
                  <p className="font-semibold text-gray-700">Investors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 4: How It Works
    {
      id: 4,
      content: (
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-green-50 to-teal-50 p-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 text-center">
              A Seamless Connection Between Talent and Capital
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl mb-6 shadow-lg">
                  <Search className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Discover</h3>
                  <p className="text-blue-100">
                    We bring you a curated stream of emerging artists, vetted by AI and audience data.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-2xl mb-6 shadow-lg">
                  <Star className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Curate</h3>
                  <p className="text-purple-100">
                    Easily review submissions, manage artists, and launch stunning digital exhibitions on your personalized gallery page.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-2xl mb-6 shadow-lg">
                  <Globe className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Sell</h3>
                  <p className="text-green-100">
                    Connect directly with a pre-qualified network of global investors actively looking for their next acquisition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 5: Advantage 1
    {
      id: 5,
      content: (
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-indigo-50 to-blue-50 p-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-16 text-center">
              Stop Searching. Start Discovering.
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Zap className="w-8 h-8 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Access a constant pipeline of emerging artists from across India and the world.
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Target className="w-8 h-8 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Our AI analyzes each artist's work for cultural relevance, audience engagement, and market potential.
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <BarChart3 className="w-8 h-8 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        View an artist's "Momentum Score" before you even connect.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Card className="p-6 bg-white shadow-xl">
                  <h3 className="font-semibold text-gray-900 mb-4">Fornyus Artist Discovery Dashboard</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg"></div>
                        <div>
                          <p className="font-medium">Priya Sharma</p>
                          <p className="text-sm text-gray-600">Contemporary Abstract</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">92 Score</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg"></div>
                        <div>
                          <p className="font-medium">Arjun Patel</p>
                          <p className="text-sm text-gray-600">Digital Installations</p>
                        </div>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">87 Score</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg"></div>
                        <div>
                          <p className="font-medium">Maya Chen</p>
                          <p className="text-sm text-gray-600">Mixed Media</p>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">84 Score</Badge>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 6: Advantage 2
    {
      id: 6,
      content: (
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-emerald-50 to-green-50 p-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-16 text-center">
              Go Beyond Your Walls.
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
                  alt="Global network visualization"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="mt-6 p-6 bg-white rounded-xl shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">Global Investor Network</h4>
                    <Badge className="bg-green-100 text-green-800">1,247 Active</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-green-600">127</p>
                      <p className="text-sm text-gray-600">North America</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-600">89</p>
                      <p className="text-sm text-gray-600">Europe</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-purple-600">156</p>
                      <p className="text-sm text-gray-600">Asia Pacific</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Globe className="w-8 h-8 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Instantly tap into our exclusive network of verified art investors.
                    </h3>
                    <p className="text-gray-600">
                      Connect with collectors who are actively seeking new acquisitions and have the budget to invest.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Star className="w-8 h-8 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Showcase your curated collection to buyers who are actively looking for new pieces.
                    </h3>
                    <p className="text-gray-600">
                      Your gallery gets premium placement in front of qualified investors.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <TrendingUp className="w-8 h-8 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Reduce your reliance on foot traffic and expensive art fairs.
                    </h3>
                    <p className="text-gray-600">
                      Reach global markets without the overhead of traditional art fair participation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 7: Advantage 3
    {
      id: 7,
      content: (
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-purple-50 to-pink-50 p-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-16 text-center">
              Replace Guesswork with Insight.
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <BarChart3 className="w-8 h-8 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Understand what styles, mediums, and themes are trending with our real-time market analytics.
                    </h3>
                    <p className="text-gray-600">
                      Get insights into emerging trends before they become mainstream.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Target className="w-8 h-8 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      See which of your gallery's artworks are getting the most attention from investors.
                    </h3>
                    <p className="text-gray-600">
                      Track engagement metrics and investor interest in real-time.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Award className="w-8 h-8 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Make data-driven decisions on which artists to represent and which exhibitions to launch.
                    </h3>
                    <p className="text-gray-600">
                      Minimize risk and maximize success with predictive analytics.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 bg-white shadow-xl">
                  <h3 className="font-semibold text-gray-900 mb-4">Style Trend Analysis</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Contemporary Abstract</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                        <span className="text-sm font-medium">+15%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Digital Art</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '72%'}}></div>
                        </div>
                        <span className="text-sm font-medium">+12%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Mixed Media</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '65%'}}></div>
                        </div>
                        <span className="text-sm font-medium">+8%</span>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-white shadow-xl">
                  <h3 className="font-semibold text-gray-900 mb-4">Investor Interest Heatmap</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-red-100 rounded-lg text-center">
                      <p className="text-sm font-medium text-red-800">High Interest</p>
                      <p className="text-xs text-red-600">Abstract Paintings</p>
                    </div>
                    <div className="p-3 bg-orange-100 rounded-lg text-center">
                      <p className="text-sm font-medium text-orange-800">Medium</p>
                      <p className="text-xs text-orange-600">Sculptures</p>
                    </div>
                    <div className="p-3 bg-yellow-100 rounded-lg text-center">
                      <p className="text-sm font-medium text-yellow-800">Growing</p>
                      <p className="text-xs text-yellow-600">Photography</p>
                    </div>
                    <div className="p-3 bg-green-100 rounded-lg text-center">
                      <p className="text-sm font-medium text-green-800">Emerging</p>
                      <p className="text-xs text-green-600">Digital Art</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 8: Partnership Offer
    {
      id: 8,
      content: (
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-orange-50 to-yellow-50 p-12">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-16">
              Join as a Founding Gallery Partner
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-xl border-0">
                <div className="text-4xl font-bold mb-4">0%</div>
                <h3 className="text-xl font-semibold mb-4">Zero Commission</h3>
                <p className="text-green-100">
                  0% commission on all sales for your first 6 months.
                </p>
              </Card>
              
              <Card className="p-8 bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-xl border-0">
                <Star className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Featured Placement</h3>
                <p className="text-purple-100">
                  Be featured on the Fornyus homepage and in our investor newsletter.
                </p>
              </Card>
              
              <Card className="p-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-xl border-0">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Dedicated Support</h3>
                <p className="text-blue-100">
                  A personal onboarding specialist to help you set up your digital gallery.
                </p>
              </Card>
            </div>
            
            <div className="mt-12">
              <Badge className="bg-orange-100 text-orange-800 text-lg px-6 py-2">
                Limited Time Offer
              </Badge>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 9: Next Steps
    {
      id: 9,
      content: (
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-blue-50 to-indigo-50 p-12">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-16">
              Let's Shape the Future of Art, Together
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Schedule a 15-Min Demo</h3>
                <p className="text-gray-600">
                  A personalized walkthrough of the platform.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Receive Your Invitation</h3>
                <p className="text-gray-600">
                  Get exclusive access to the gallery portal.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Discover Your Next Artist</h3>
                <p className="text-gray-600">
                  Start exploring the platform today.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-lg">
                <QrCode className="w-5 h-5 mr-2" />
                Scan to Book Demo
              </Button>
              <Button asChild variant="outline" className="px-8 py-4 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                <a href="https://fornyus.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Visit fornyus.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 10: Thank You
    {
      id: 10,
      content: (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
          <div className="text-center max-w-3xl mx-auto px-8">
            <div className="flex flex-col items-center mb-16">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Fornyus
              </h1>
            </div>
            
            <div className="space-y-6 text-xl">
              <div>
                <p className="text-gray-300 mb-2">Contact:</p>
                <p className="text-white">pranaysparihar@gmail.com</p>
              </div>
              
              <div>
                <p className="text-gray-300 mb-2">Website:</p>
                <p className="text-white">www.fornyus.com</p>
              </div>
            </div>
            
            <div className="mt-16">
              <a 
                href="https://fornyus.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 text-lg rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
      {/* Slide Content */}
      <div className="w-full h-full">
        {slides[currentSlide].content}
      </div>
      
      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
        <Button
          variant="ghost"
          size="sm"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-2"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        
        <div className="flex space-x-2">
          {Array.from({ length: totalSlides }, (_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentSlide ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="p-2"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
      
      {/* Slide Counter */}
      <div className="absolute top-8 right-8 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
};

export default PitchDeck;