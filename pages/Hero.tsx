
import React from 'react';
import { Link } from 'react-router-dom';
import SteamEffect from '../components/SteamEffect';
import { ArrowRight, ChefHat } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-64px)] flex items-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeIn">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium">
              <ChefHat className="w-4 h-4" />
              <span>20년차 제빵 전문가</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-title text-amber-900 leading-tight">
              빵을 통해 <br />
              <span className="text-amber-700">행복</span>을 전하고 싶습니다.
            </h1>
            <p className="text-lg text-amber-800/80 leading-relaxed max-w-lg">
              진심을 담은 한 조각의 빵이 누군가의 하루를 바꿀 수 있다고 믿습니다. 
              20년의 시간 동안 변치 않는 <strong>꼼꼼함</strong>과 <strong>부지런함</strong>으로 
              최고의 맛과 행복을 굽고 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-800 text-white rounded-lg hover:bg-amber-900 transition-all shadow-lg hover:shadow-amber-900/20"
              >
                더 알아보기 <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-800 text-amber-800 rounded-lg hover:bg-amber-50 transition-all font-medium"
              >
                연락하기
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            {/* Main Bread Illustration Container */}
            <div className="relative w-full max-w-sm aspect-square bg-amber-200/30 rounded-2xl flex items-center justify-center overflow-visible">
              <SteamEffect className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-24" />
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                 {/* Placeholder for Bread Image */}
                 <img 
                    src="https://picsum.photos/id/488/600/600" 
                    alt="Freshly baked bread" 
                    className="w-64 h-64 object-cover rounded-xl shadow-2xl border-4 border-white"
                 />
                 <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-xl">
                    <p className="text-amber-900 font-bold text-lg italic">"따뜻함 그 자체"</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
