"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Users, Gift, FileText, Music, Trophy, ChevronDown, ArrowRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import WaitlistForm from "@/components/waitlist-form"
import DemoTabs from "@/components/demo-tabs"

export default function LandingPage() {
  const [showWaitlistForm, setShowWaitlistForm] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)

  return (
    <div className="flex flex-col min-h-screen">
      {/* 네비게이션 바 */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            {/* 네비게이션 바의 로고 부분 변경 */}
            <div className="flex items-center">
              <div className="flex items-center mr-10">
                <Image src="/images/logo.png" width={40} height={40} alt="나은 내일 로고" className="mr-2" />
                <span className="text-[#2a7d8c] font-bold text-2xl">나은 내일</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-600 hover:text-[#2a7d8c] font-medium">
                  홈
                </a>
                <a href="#features" className="text-gray-600 hover:text-[#2a7d8c] font-medium">
                  주요 기능
                </a>
                <a href="#pricing" className="text-gray-600 hover:text-[#2a7d8c] font-medium">
                  가격 정책
                </a>
                <a href="#about" className="text-gray-600 hover:text-[#2a7d8c] font-medium">
                  소개
                </a>
                <a href="#faq" className="text-gray-600 hover:text-[#2a7d8c] font-medium">
                  FAQ
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden md:flex border-[#2a7d8c] text-[#2a7d8c] hover:bg-[#f0f7fa]">
                로그인
              </Button>
              <Button className="hidden md:flex bg-[#2a7d8c] hover:bg-[#236778] text-white">회원 가입</Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="relative bg-[#a7c7e7] py-16 md:py-0">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row items-center min-h-[400px]">
            <div className="md:w-1/2 space-y-3 py-4 md:py-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Redefining
                <br />
                Your Healthcare
                <br />
                Journey
              </h1>
              <p className="text-lg text-white/90 max-w-md">
                병원에서의 스트레스, 나은 내일이 함께합니다. 환자와 보호자를 위한 커뮤니티, 심리 안정 리소스, 기부
                기능을 한 곳에서 경험하세요.
              </p>
              <Button
                size="lg"
                className="bg-white text-[#2a7d8c] hover:bg-gray-100 px-8 py-6 text-lg rounded-full"
                onClick={() => setShowWaitlistForm(true)}
              >
                Join the waitlist
              </Button>
            </div>
            {/* 히어로 섹션 이미지 변경 */}
            <div className="md:w-1/2 mt-8 md:mt-0 h-full flex items-center justify-center">
              <Image
                src="/images/hero-doctor-patient.png"
                width={600}
                height={600}
                alt="환자와 보호자"
                className="object-cover w-full h-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full text-center py-6 bg-white text-[#2a7d8c] text-5xl md:text-7xl font-bold">
          나은 내일
        </div>
      </section>

      {/* 서비스 설명 섹션 */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2a7d8c]">나은 내일은 당신의 건강 파트너입니다</h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            더 많은 에너지. 더 큰 힘. 더 느린 노화. 더 선명한 집중력.
            <br />더 적은 스트레스. 질병 예방. 더 긴 수명. 더 나은 삶.
          </p>
        </div>
      </section>

      {/* 주요 기능 소개 */}
      <section id="features" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2a7d8c] mb-16">나은 내일의 핵심 기능</h2>
          {/* 주요 기능 소개 섹션의 FeatureCard 컴포넌트 변경 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Heart className="h-10 w-10 text-[#2a7d8c]" />}
              title="상황 공유 피드"
              description="보호자와 환자가 병원에서 겪는 힘든 순간을 공유하는 커뮤니티. 공감 기능과 익명 댓글로 서로를 지지해요."
              image="/images/community-support.png"
            />
            <FeatureCard
              icon={<Gift className="h-10 w-10 text-[#2a7d8c]" />}
              title="기부 기능"
              description="소액 기부로 환자 치료비(70%)와 병원 시설 개선(30%)에 기여하세요. 사용 내역은 투명하게 공개됩니다."
              image="/images/donation-charity.png"
            />
            <FeatureCard
              icon={<FileText className="h-10 w-10 text-[#2a7d8c]" />}
              title="자원봉사 신청"
              description="병원 봉사 활동을 위한 신청서류를 간편하게 제출하고 봉사 활동에 참여하세요."
              image="/images/hospital-volunteer.png"
            />
            <FeatureCard
              icon={<Music className="h-10 w-10 text-[#2a7d8c]" />}
              title="심리 안정 리소스"
              description="명상 음원, 호흡 가이드 등 심리적 안정을 위한 다양한 콘텐츠를 제공합니다."
              image="/images/meditation-wellness.png"
            />
            <FeatureCard
              icon={<Trophy className="h-10 w-10 text-[#2a7d8c]" />}
              title="마일리지 시스템"
              description="걷기, 피드 올리기, 봉사활동 참여, 기부하기로 마일리지를 적립하고 다양한 혜택을 누리세요."
              image="/images/medical-team.png"
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-[#2a7d8c]" />}
              title="전문가 주도 포럼"
              description="의료 전문가와의 Q&A 세션에 참여하여 궁금한 점을 해결하세요. (프리미엄 전용)"
              image="/images/doctor-consultation.png"
            />
          </div>
        </div>
      </section>

      {/* 가격 플랜 섹션 */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2a7d8c] mb-16">가격 플랜</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className={`rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform flex flex-col
                border ${selectedPlan === "basic" ? "border-2 border-[#2a7d8c] ring-2 ring-[#2a7d8c]/20" : "border-gray-200"} 
                ${selectedPlan === "basic" ? "bg-[#f0f7fa]" : "bg-white"} hover:scale-105`}
              onClick={() => setSelectedPlan("basic")}
            >
              <div className={`p-6 ${selectedPlan === "basic" ? "bg-[#f0f7fa]" : "bg-white"}`}>
                <h3 className="text-xl font-bold text-[#2a7d8c] mb-2">기본 플랜</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">무료</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2a7d8c] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">상황 공유 피드 (제한된 게시물)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2a7d8c] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">자원봉사 신청서류 제출</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2a7d8c] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">기본 심리 안정 리소스</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2a7d8c] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">기부 기능</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2a7d8c] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">마일리지 적립 (표준 비율)</span>
                  </li>
                </ul>
              </div>
              <div className="border-t border-gray-100 bg-white p-0 flex items-center justify-center mt-auto">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowWaitlistForm(true);
                  }}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-14 px-4 w-full bg-[#2a7d8c] hover:bg-[#236778] text-white m-0"
                >
                  웨이팅 리스트 등록하기
                </button>
              </div>
            </div>

            <div 
              className={`relative rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform flex flex-col
                border ${selectedPlan === "premium" ? "border-2 border-[#2a7d8c] ring-2 ring-[#2a7d8c]/20" : "border-gray-200"} 
                ${selectedPlan === "premium" ? "bg-[#f0f7fa]" : "bg-white"} hover:scale-105`}
              onClick={() => setSelectedPlan("premium")}
            >
              <div className={`p-6 ${selectedPlan === "premium" ? "bg-[#f0f7fa]" : "bg-white"}`}>
                <h3 className="text-xl font-bold text-[#2a7d8c] mb-2">프리미엄 플랜</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">월 10,000원</span>
                  <p className="text-sm text-gray-500">연 100,000원 (16% 할인)</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2a7d8c] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">모든 심리 안정 리소스 무제한 접근</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2a7d8c] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">고급 심리 상담 (연간 4회)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2a7d8c] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">개인 맞춤형 건강 관리 플랜</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2a7d8c] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">독점 콘텐츠 (웨비나, 전문가 팁)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2a7d8c] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">광고 제거</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2a7d8c] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">마일리지 2배 적립</span>
                  </li>
                </ul>
              </div>
              <div className="border-t border-gray-100 bg-white p-0 flex items-center justify-center mt-auto">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowWaitlistForm(true);
                  }}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-14 px-4 w-full bg-[#2a7d8c] hover:bg-[#236778] text-white m-0"
                >
                  웨이팅 리스트 등록하기
                </button>
              </div>
            </div>

            <div 
              className={`rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform flex flex-col
                border ${selectedPlan === "family" ? "border-2 border-[#2a7d8c] ring-2 ring-[#2a7d8c]/20" : "border-gray-200"} 
                ${selectedPlan === "family" ? "bg-[#f0f7fa]" : "bg-white"} hover:scale-105`}
              onClick={() => setSelectedPlan("family")}
            >
              <div className={`p-6 ${selectedPlan === "family" ? "bg-[#f0f7fa]" : "bg-white"}`}>
                <h3 className="text-xl font-bold text-[#2a7d8c] mb-2">패밀리 플랜</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">월 20,000원</span>
                  <p className="text-sm text-gray-500">연 200,000원 (16% 할인)</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2a7d8c] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">최대 4명 사용 가능</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2a7d8c] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">프리미엄 플랜 기능 전부</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2a7d8c] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">공유 상담 세션 (연간 8회)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2a7d8c] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">각 사용자별 2배 마일리지 적립</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2a7d8c] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">가족 간 마일리지 공유 가능</span>
                  </li>
                </ul>
              </div>
              <div className="border-t border-gray-100 bg-white p-0 flex items-center justify-center mt-auto">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowWaitlistForm(true);
                  }}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-14 px-4 w-full bg-[#2a7d8c] hover:bg-[#236778] text-white m-0"
                >
                  웨이팅 리스트 등록하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 멤버십 섹션 */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* 멤버십 섹션 이미지 변경 */}
            <div className="md:w-1/2">
              <Image
                src="/images/medical-team.png"
                width={600}
                height={500}
                alt="멤버십 혜택"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2a7d8c]">
                All-in-One Membership
                <br />
                for Your Health and
                <br />
                Peak Performance
              </h2>
              <p className="text-lg text-gray-700">
                나은 내일 멤버십은 병원에서의 경험을 완전히 새롭게 만들어 드립니다. 전문가의 지원, 커뮤니티의 응원,
                그리고 최신 기술을 통해 더 나은 건강 여정을 시작하세요.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2a7d8c] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="ml-3 text-gray-700">전문가와 정기적인 상담 및 건강 체크</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2a7d8c] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="ml-3 text-gray-700">맞춤형 건강 관리 플랜 제공</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2a7d8c] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="ml-3 text-gray-700">독점 콘텐츠 및 리소스 접근 권한</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2a7d8c] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="ml-3 text-gray-700">마일리지 2배 적립 혜택</p>
                </div>
              </div>
              <Button
                className="bg-[#2a7d8c] hover:bg-[#236778] text-white px-8 py-6 text-lg"
                onClick={() => setShowWaitlistForm(true)}
              >
                웨이팅 리스트 등록하기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-16 px-4 bg-[#f0f7fa]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2a7d8c] mb-12">사용자 경험</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-center text-[#2a7d8c] mb-4">요약 데모</h3>
                <p className="text-center text-gray-600 mb-6">'나은 내일'의 주요 기능을 미리 살펴보세요</p>

                <DemoTabs />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-[#2a7d8c] mb-2">80%</div>
                <p className="text-gray-700">사용자가 첫 12개월 내에 건강 개선 경험</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-[#2a7d8c] mb-2">10,000+</div>
                <p className="text-gray-700">활성 커뮤니티 멤버</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-[#2a7d8c] mb-2">50+</div>
                <p className="text-gray-700">전문 의료진 참여</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-[#2a7d8c] mb-2">95%</div>
                <p className="text-gray-700">사용자 만족도</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 사용자 후기 */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2a7d8c] mb-16">사용자 후기</h2>
          {/* 사용자 후기 섹션의 이미지 변경 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              role="프리미엄 회원, 서울"
              quote="나은 내일 덕분에 어머니의 병원 치료 과정에서 느끼는 불안감을 크게 줄일 수 있었습니다. 커뮤니티의 지지와 명상 콘텐츠가 큰 도움이 되었어요."
            />
            <TestimonialCard
              role="기본 회원, 부산"
              quote="병원 대기 시간이 지루하지 않게 되었어요. 명상 음원을 들으며 불안감을 줄이고, 다른 사용자들과 경험을 공유하는 것이 정말 좋습니다."
            />
            <TestimonialCard
              role="패밀리 플랜 회원, 대전"
              quote="가족 모두가 함께 건강 관리를 할 수 있어 좋습니다. 마일리지로 기부도 하고, 전문가 상담도 받을 수 있어 매우 만족스러워요."
            />
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section id="faq" className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2a7d8c] mb-16">자주 묻는 질문</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <FaqItem
              question="구독은 언제든지 취소할 수 있나요?"
              answer="네, 언제든지 구독을 취소할 수 있습니다. 취소 시 다음 결제일까지 서비스를 이용할 수 있으며, 자동으로 갱신되지 않습니다."
            />
            <FaqItem
              question="마일리지는 어떻게 사용하나요?"
              answer="마일리지는 프리미엄 기능 체험, 기부금 전환, 자원봉사 우선 배정, 특별 이벤트 응모 등에 사용할 수 있습니다. 마이페이지에서 현재 마일리지 잔액과 사용 내역을 확인할 수 있습니다."
            />
            <FaqItem
              question="기부금은 어떻게 사용되나요?"
              answer="기부금의 70%는 환자 치료비 지원에, 30%는 병원 시설 개선에 사용됩니다. 모든 기부금 사용 내역은 투명하게 공개되며, 마이페이지에서 확인할 수 있습니다."
            />
            <FaqItem
              question="자원봉사는 어떻게 신청하나요?"
              answer="자원봉사 메뉴에서 원하는 봉사 활동을 선택하고 필요한 서류를 제출하면 됩니다. 승인 후 일정을 조율하여 봉사 활동에 참여할 수 있습니다."
            />
            <FaqItem
              question="프리미엄 플랜의 무료 체험 기간은 얼마인가요?"
              answer="프리미엄 플랜은 14일간 무료로 체험할 수 있습니다. 체험 기간 동안 언제든지 구독을 취소할 수 있으며, 취소하지 않으면 체험 기간 종료 후 자동으로 결제됩니다."
            />
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#a7c7e7]">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Are You Truly Healthy?
            <br />
            It's Time to Check
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            지금 웨이팅 리스트에 등록하고 출시 소식을 가장 먼저 받아보세요. 출시 후 14일간 프리미엄 기능을 무료로 체험할
            수 있습니다.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#2a7d8c] hover:bg-gray-100 px-8 py-6 text-lg rounded-full"
            onClick={() => setShowWaitlistForm(true)}
          >
            웨이팅 리스트 등록하기 <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-[#2a7d8c] text-white py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">나은 내일</h3>
              <p className="text-sm text-gray-200">
                병원 여정의 동반자, 나은 내일이 여러분의 더 나은 내일을 응원합니다.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">서비스</h4>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>상황 공유 피드</li>
                <li>기부 기능</li>
                <li>자원봉사 신청</li>
                <li>심리 안정 리소스</li>
                <li>마일리지 시스템</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">회사</h4>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>소개</li>
                <li>팀</li>
                <li>채용</li>
                <li>블로그</li>
                <li>언론 보도</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">법적 정보</h4>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>이용약관</li>
                <li>개인정보처리방침</li>
                <li>쿠키 정책</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-500 mt-8 pt-8 text-sm text-gray-300">
            <p>© {new Date().getFullYear()} 나은 내일. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* 웨이팅 리스트 폼 모달 */}
      {showWaitlistForm && <WaitlistForm onClose={() => setShowWaitlistForm(false)} />}
    </div>
  )
}

// 컴포넌트들
function FeatureCard({ icon, title, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden">
      <div className="h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          width={400}
          height={300}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-[#2a7d8c] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-[#2a7d8c]">{question}</span>
        <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  )
}

function TestimonialCard({ role, quote }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="bg-gray-100 rounded-lg p-2 mr-3">
          <Users className="h-5 w-5 text-[#2a7d8c]" />
        </div>
        <div>
          <h4 className="font-bold text-[#2a7d8c]">
            {role.includes("서울") ? "김OO" : role.includes("부산") ? "이OO" : "박OO"}
          </h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{quote}"</p>
    </div>
  )
}
