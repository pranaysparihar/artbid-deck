import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ChevronLeft, ChevronRight, TrendingUp, Users, Star, Calendar, ExternalLink, QrCode, BarChart3, Zap, Target, Award } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const ArtistsDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8;

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + totalSlides) % totalSlides);
  const goToSlide = (i: number) => setCurrentSlide(i);

  const slides = [
    {
      id: 1,
      content: (
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-pink-50 to-purple-50 p-12">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Fornyus for Artists
            </h1>
            <p className="text-xl text-gray-600">Grow your audience, get discovered by galleries and investors, and sell more.</p>
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
              <Zap className="w-12 h-12 text-fuchsia-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Portfolio</h3>
              <p className="text-gray-600">Create a stunning, shoppable portfolio in minutes.</p>
            </Card>
            <Card className="p-8 text-center">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reach Galleries</h3>
              <p className="text-gray-600">Get discovered by leading galleries actively looking.</p>
            </Card>
            <Card className="p-8 text-center">
              <TrendingUp className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Insights</h3>
              <p className="text-gray-600">See what’s trending and what buyers engage with.</p>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-indigo-50 to-blue-50 p-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Target className="w-7 h-7 text-indigo-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Smart submissions</h3>
                  <p className="text-gray-600">Match with galleries that fit your style and price point.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BarChart3 className="w-7 h-7 text-indigo-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Audience analytics</h3>
                  <p className="text-gray-600">Understand engagement and improve what you publish.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-7 h-7 text-indigo-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Build reputation</h3>
                  <p className="text-gray-600">Badges for exhibitions, sales, and collector interest.</p>
                </div>
              </div>
            </div>
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Your Portfolio Snapshot</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Followers</span>
                  <Badge className="bg-blue-100 text-blue-800">2,340</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Gallery Views</span>
                  <Badge className="bg-green-100 text-green-800">+18% MoM</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Investor Saves</span>
                  <Badge className="bg-purple-100 text-purple-800">64</Badge>
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
        <div className="flex flex-col justify-center h-full bg-gradient-to-br from-blue-50 to-indigo-50 p-12">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-12">Ready to Grow?</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 text-lg">
                <QrCode className="w-5 h-5 mr-2" />
                Create Your Portfolio
              </Button>
              <Button asChild variant="outline" className="px-8 py-4 text-lg border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50">
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
            <p className="text-gray-300">Join a community of artists building careers with data and distribution.</p>
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
              className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? 'bg-purple-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
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

export default ArtistsDeck;
