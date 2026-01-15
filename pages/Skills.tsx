
import React from 'react';
import { FileSpreadsheet, Video, Croissant, Cog, LineChart, PlayCircle } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { 
      category: "제빵 전문 기술", 
      icon: <Croissant className="w-6 h-6" />,
      items: ["천연발효종 관리", "제과/제빵 전 공정 숙련", "신메뉴 개발 및 레시피 표준화", "품질 관리 및 위생 점검"]
    },
    { 
      category: "디지털 역량", 
      icon: <Cog className="w-6 h-6" />,
      items: ["엑셀 (데이터 관리 및 정산)", "영상 편집 (제조 공정 기록 및 홍보)", "매장 관리 시스템 운영"]
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-amber-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-title text-amber-900 mb-4">보유 기술 및 도구</h2>
          <p className="text-amber-800/70">현장 실무부터 디지털 활용까지 아우르는 융합형 인재</p>
          <div className="w-20 h-1 bg-amber-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6 text-amber-800">
                <div className="p-3 bg-amber-100 rounded-lg mr-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold font-title">{skill.category}</h3>
              </div>
              <ul className="space-y-4">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center text-amber-800/80">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-amber-100 text-center flex flex-col items-center group hover:bg-amber-800 transition-colors duration-300">
            <FileSpreadsheet className="w-10 h-10 text-emerald-600 mb-4 group-hover:text-white" />
            <span className="font-bold text-amber-900 group-hover:text-white">Excel</span>
          </div>
          <div className="bg-white p-6 rounded-xl border border-amber-100 text-center flex flex-col items-center group hover:bg-amber-800 transition-colors duration-300">
            <Video className="w-10 h-10 text-blue-600 mb-4 group-hover:text-white" />
            <span className="font-bold text-amber-900 group-hover:text-white">영상편집</span>
          </div>
          <div className="bg-white p-6 rounded-xl border border-amber-100 text-center flex flex-col items-center group hover:bg-amber-800 transition-colors duration-300">
            <LineChart className="w-10 h-10 text-amber-600 mb-4 group-hover:text-white" />
            <span className="font-bold text-amber-900 group-hover:text-white">분석</span>
          </div>
          <div className="bg-white p-6 rounded-xl border border-amber-100 text-center flex flex-col items-center group hover:bg-amber-800 transition-colors duration-300">
            <PlayCircle className="w-10 h-10 text-red-600 mb-4 group-hover:text-white" />
            <span className="font-bold text-amber-900 group-hover:text-white">콘텐츠 제작</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
