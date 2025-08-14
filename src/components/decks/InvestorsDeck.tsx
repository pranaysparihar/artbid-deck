import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ChevronLeft, ChevronRight, BarChart3, TrendingUp, Globe, Users, Target, Award, ExternalLink, QrCode } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const InvestorsDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8;

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + totalSlides) % totalSlides);
  const goToSlide = (i: number) => setCurrentSlide(i);

  const slides = [
    {
      id: 1,
      content: (
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-emerald-50 to-green-50 p-12">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent mb-6">
              Fornyus for Investors
            </h1>
            <p className="text-xl text-gray-600">Discover vetted artists, track momentum, and invest with confidence.</p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="flex flex-col justify-center h-full bg-white p-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <Globe className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Deal Flow</h3>
              <p className="text-gray-600">Curated pipeline of works from emerging and mid-career artists.</p>
            </Card>
            <Card className="p-8 text-center">
              <BarChart3 className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Analytics</h3>
              <p className="text-gray-600">Momentum scores, trend data, and price histories in one place.</p>
            </Card>
            <Card className="p-8 text-center">
              <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verified Network</h3>
              <p className="text-gray-600">Work with vetted galleries and artists to reduce risk.</p>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-blue-50 to-indigo-50 p-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Target className="w-7 h-7 text-indigo-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Signal over noise</h3>
                  <p className="text-gray-600">AI-driven rankings help you focus on works with real traction.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-7 h-7 text-indigo-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Market context</h3>
                  <p className="text-gray-600">Compare across styles, mediums, and geographies.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-7 h-7 text-indigo-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Track record</h3>
                  <p className="text-gray-600">Exhibitions, sales signals, and collector interest in one view.</p>
                </div>
              </div>
            </div>
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Watchlist</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Abstract — Priya Sharma</span>
                  <Badge className="bg-green-100 text-green-800">Up 12%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Digital — Arjun Patel</span>
                  <Badge className="bg-blue-100 text-blue-800">Trending</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Mixed — Maya Chen</span>
                  <Badge className="bg-yellow-100 text-yellow-800">Stable</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      content: (
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-emerald-50 to-green-50 p-12">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-12">Ready to Explore?</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Button className="bg-gradient-to-r from-emerald-600 to-green-700 text-white px-8 py-4 text-lg">
                <QrCode className="w-5 h-5 mr-2" />
                Request Access
              </Button>
              <Button asChild variant="outline" className="px-8 py-4 text-lg border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                <a href="https://fornyus.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Learn more
                </a>
              </Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 8,
      content: (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
          <div className="text-center max-w-3xl mx-auto px-8">
            <h1 className="text-5xl font-bold mb-6">Fornyus</h1>
            <p className="text-gray-300">Invest where culture and data meet.</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
      <div className="w-full h-full">{slides[currentSlide].content}</div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
        <Button variant="ghost" size="sm" onClick={prevSlide} disabled={currentSlide === 0} className="p-2">
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }, (_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? 'bg-emerald-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
        <Button variant="ghost" size="sm" onClick={nextSlide} disabled={currentSlide === totalSlides - 1} className="p-2">
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
      <div className="absolute top-8 right-8 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
};

export default InvestorsDeck;
