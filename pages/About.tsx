
import React from 'react';
import { Target, Search, Clock, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-title text-amber-900 mb-4">안녕하세요, 오두성입니다.</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-lg text-amber-800/90 leading-relaxed">
              제게 빵을 굽는다는 것은 단순한 작업이 아닌, 누군가에게 전할 선물을 준비하는 마음과 같습니다. 
              20년 전 처음 밀가루를 만지던 그 초심으로, 오늘도 이른 새벽 주방의 불을 밝힙니다.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-amber-50 rounded-xl border border-amber-100 flex flex-col items-center text-center">
                <Search className="w-10 h-10 text-amber-700 mb-4" />
                <h3 className="font-bold text-amber-900 mb-2">꼼꼼함</h3>
                <p className="text-sm text-amber-800/70">1g의 오차도 허용하지 않는 정확한 계량과 최적의 발효 시간을 준수합니다.</p>
              </div>
              <div className="p-6 bg-amber-50 rounded-xl border border-amber-100 flex flex-col items-center text-center">
                <Clock className="w-10 h-10 text-amber-700 mb-4" />
                <h3 className="font-bold text-amber-900 mb-2">부지런함</h3>
                <p className="text-sm text-amber-800/70">남들보다 일찍 하루를 시작해 신선한 빵을 준비하는 열정을 지니고 있습니다.</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-amber-50">
              <h3 className="text-2xl font-bold font-title text-amber-900 mb-6 flex items-center">
                <Target className="mr-2 text-amber-700" /> 핵심 가치관
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Award className="w-6 h-6 text-amber-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-amber-800">품질과 정직</h4>
                    <p className="text-amber-800/70">최상의 재료를 사용하여 타협하지 않는 품질을 보장합니다.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="w-6 h-6 text-amber-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-amber-800">지속적인 학습</h4>
                    <p className="text-amber-800/70">20년 경력에 안주하지 않고 끊임없이 새로운 트렌드와 기술을 연구합니다.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="w-6 h-6 text-amber-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-amber-800">소통과 행복</h4>
                    <p className="text-amber-800/70">고객의 피드백을 소중히 여기며, 빵을 통한 행복의 가치를 공유합니다.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
