
import React from 'react';
import { Calendar, Briefcase, Star } from 'lucide-react';

const Career: React.FC = () => {
  const experiences = [
    {
      period: "2004 - 현재",
      title: "베이커리 총괄 마스터 / 전문가",
      description: "20년간 다양한 제빵 기술을 섭렵하며 품질 관리, 레시피 개발 및 후학 양성에 힘써왔습니다. 전통적인 제빵 기법에 현대적인 감각을 더해 차별화된 베이커리 문화를 선도합니다."
    },
    {
      period: "2010 - 2018",
      title: "대형 베이커리 카페 운영 총괄",
      description: "매장 운영 전반을 관리하며 효율적인 생산 시스템을 구축하였습니다. 엑셀을 활용한 원가 분석 및 매출 관리를 통해 비즈니스 효율성을 극대화했습니다."
    },
    {
      period: "2004 - 2010",
      title: "프로페셔널 파티시에 과정 및 실무 경력",
      description: "기초부터 탄탄하게 제과제빵 기술을 익히며 현장에서의 실전 감각을 쌓았습니다. 성실함과 꼼꼼함으로 빠르게 업계에서 인정받았습니다."
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-title text-amber-900 mb-4">경력 및 활동 성과</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-amber-200 group">
              <div className="absolute -left-2.5 top-0 w-5 h-5 bg-white border-2 border-amber-600 rounded-full group-hover:bg-amber-600 transition-colors"></div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <span className="inline-flex items-center text-sm font-bold text-amber-600 mb-2 sm:mb-0">
                  <Calendar className="w-4 h-4 mr-2" /> {exp.period}
                </span>
                <h3 className="text-xl font-bold text-amber-900 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-amber-700" /> {exp.title}
                </h3>
              </div>
              <p className="text-amber-800/80 leading-relaxed bg-amber-50/50 p-6 rounded-xl border border-amber-50">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold font-title text-amber-900 mb-8 text-center flex items-center justify-center">
            <Star className="mr-2 text-amber-500 fill-amber-500" /> 주요 성과
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-amber-100/40 p-5 rounded-lg border border-amber-100">
              <h4 className="font-bold text-amber-900 mb-1">제빵 경력 20년 전문성</h4>
              <p className="text-sm text-amber-800/70">수만 개의 빵을 구워내며 쌓아온 숙련된 감각</p>
            </div>
            <div className="bg-amber-100/40 p-5 rounded-lg border border-amber-100">
              <h4 className="font-bold text-amber-900 mb-1">매출 200% 신장 기여</h4>
              <p className="text-sm text-amber-800/70">신메뉴 개발 및 매장 동선 최적화를 통한 효율 증대</p>
            </div>
            <div className="bg-amber-100/40 p-5 rounded-lg border border-amber-100">
              <h4 className="font-bold text-amber-900 mb-1">디지털 전환 선도</h4>
              <p className="text-sm text-amber-800/70">전통 베이커리에 엑셀 자동화 및 홍보 영상 도입</p>
            </div>
            <div className="bg-amber-100/40 p-5 rounded-lg border border-amber-100">
              <h4 className="font-bold text-amber-900 mb-1">후배 양성 50인 이상</h4>
              <p className="text-sm text-amber-800/70">꼼꼼한 노하우 전수를 통해 전문 인력 배출</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
