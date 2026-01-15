
import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-amber-50/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-title text-amber-900 mb-4">함께 행복을 구워갈까요?</h2>
          <p className="text-amber-800/70">새로운 협업 제안이나 제빵에 관한 이야기는 언제나 환영합니다.</p>
          <div className="w-20 h-1 bg-amber-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-title text-amber-900">연락처 정보</h3>
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mr-4 group-hover:bg-amber-800 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-amber-600 font-bold uppercase tracking-wider">이메일</p>
                  <a href="mailto:oh.neodavinci@gmail.com" className="text-lg text-amber-900 hover:underline">oh.neodavinci@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mr-4 group-hover:bg-amber-800 group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-amber-600 font-bold uppercase tracking-wider">전화번호</p>
                  <a href="tel:01068225256" className="text-lg text-amber-900 hover:underline">010-6822-5256</a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mr-4 group-hover:bg-amber-800 group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-amber-600 font-bold uppercase tracking-wider">활동 지역</p>
                  <p className="text-lg text-amber-900">전국 어디든 빵의 온기가 필요한 곳</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-bold text-amber-900 mb-4">소셜 미디어</h4>
              <div className="flex space-x-4">
                <button disabled className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-400 cursor-not-allowed" title="미입력">
                  <Instagram className="w-5 h-5" />
                </button>
                <button disabled className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-400 cursor-not-allowed" title="미입력">
                  <Facebook className="w-5 h-5" />
                </button>
                <button disabled className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-400 cursor-not-allowed" title="미입력">
                  <Globe className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-amber-50">
            <h3 className="text-2xl font-bold font-title text-amber-900 mb-6">메시지 보내기</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">성함</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="오두성" />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">이메일</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">문의 내용</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" placeholder="메시지를 입력해주세요..."></textarea>
              </div>
              <button className="w-full bg-amber-800 text-white py-4 rounded-lg font-bold hover:bg-amber-900 transition-all flex items-center justify-center shadow-lg">
                보내기 <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
