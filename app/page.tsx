"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Heart, Users, Gift, FileText, Music, Trophy, ChevronDown, ArrowRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import WaitlistForm from "@/components/waitlist-form"
import DemoTabs from "@/components/demo-tabs"
import MobileMenu from "@/components/mobile-menu"
import useMobile from "@/hooks/use-mobile"

export default function LandingPage() {
  const [showWaitlistForm, setShowWaitlistForm] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useMobile()
  const heroTitleRef = useRef<HTMLHeadingElement>(null)

  // 모바일 스크롤 최적화를 위한 참조
  const featuresRef = useRef<HTMLDivElement>(null)

  // 스크롤 애니메이션을 위한 상태와 로직
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll(".animate-fade-in")

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementBottom = element.getBoundingClientRect().bottom

        // 요소가 화면에 보이는지 확인
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
          element.classList.add("visible")
        }
      })
    }

    // 히어로 섹션의 요소들은 페이지 로드 시 바로 보이게 설정
    const heroElements = document.querySelectorAll(
      ".animate-slide-up, .animate-scale-in, .animate-fade-left, .animate-fade-right, .text-reveal, .image-zoom, .button-pulse, .char-reveal, .waitlist-text-animation",
    )

    // 지연 시간을 두고 애니메이션 적용
    setTimeout(() => {
      heroElements.forEach((element) => {
        element.classList.add("visible")
      })
    }, 100)

    // 글자별 애니메이션을 위한 처리
    if (heroTitleRef.current) {
      const titleText = heroTitleRef.current.innerText
      heroTitleRef.current.innerHTML = ""

      // 각 단어를 span으로 감싸기
      titleText.split(" ").forEach((word, wordIndex) => {
        const wordSpan = document.createElement("span")
        wordSpan.className = "inline-block"

        // 각 글자를 span으로 감싸기
        word.split("").forEach((char, charIndex) => {
          const charSpan = document.createElement("span")
          charSpan.className = `char-reveal`
          charSpan.style.transitionDelay = `${wordIndex * 0.1 + charIndex * 0.03}s`
          charSpan.textContent = char
          wordSpan.appendChild(charSpan)
        })

        heroTitleRef.current.appendChild(wordSpan)
        // 단어 사이에 공백 추가
        if (wordIndex < titleText.split(" ").length - 1) {
          heroTitleRef.current.appendChild(document.createTextNode(" "))
        }
      })
    }

    // 초기 로드 시 한 번 실행
    animateElements()

    // 스크롤 이벤트에 애니메이션 함수 연결
    window.addEventListener("scroll", animateElements)

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", animateElements)
    }
  }, [])

  // 모바일에서 가로 스크롤 기능
  const scrollFeatures = (direction: "left" | "right") => {
    if (!featuresRef.current || !isMobile) return

    const scrollAmount = 300 // 스크롤할 픽셀 양
    const currentScroll = featuresRef.current.scrollLeft

    featuresRef.current.scrollTo({
      left: direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount,
      behavior: "smooth",
    })
  }

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
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden touch-target"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="메뉴 열기"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* 모바일 메뉴 */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* 히어로 섹션 */}
      <section className="relative bg-[#a7c7e7] py-12 md:py-0">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-6 py-4 md:py-12 mt-4 md:mt-0">
              <h1 ref={heroTitleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Redefining Your Healthcare Journey
              </h1>
              <p className="text-base sm:text-lg text-white/90 max-w-md text-reveal delay-400 mobile-text-adjust">
                병원에서의 스트레스, 나은 내일이 함께합니다. 환자와 보호자를 위한 커뮤니티, 심리 안정 리소스, 기부
                기능을 한 곳에서 경험하세요.
              </p>
              <Button
                size="lg"
                className="waitlist-btn-white bg-white text-[#2a7d8c] hover:bg-gray-100 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full button-pulse delay-600 touch-target w-full sm:w-auto"
                onClick={() => setShowWaitlistForm(true)}
              >
                <div className="waitlist-text-animation">
                  <span>J</span>
                  <span>o</span>
                  <span>i</span>
                  <span>n</span>
                  <span> </span>
                  <span>t</span>
                  <span>h</span>
                  <span>e</span>
                  <span> </span>
                  <span>w</span>
                  <span>a</span>
                  <span>i</span>
                  <span>t</span>
                  <span>l</span>
                  <span>i</span>
                  <span>s</span>
                  <span>t</span>
                </div>
              </Button>
            </div>
            {/* 히어로 섹션 이미지 변경 */}
            <div className="md:w-1/2 mt-8 md:mt-0 pb-16 md:pb-20">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/hero-doctor-patient.png"
                  width={600}
                  height={600}
                  alt="환자와 보호자"
                  className="object-cover w-full image-zoom"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full text-center py-4 md:py-6 bg-white text-[#2a7d8c] text-3xl sm:text-5xl md:text-7xl font-bold text-reveal delay-800">
          나은 내일
        </div>
      </section>

      {/* 서비스 설명 섹션 */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#2a7d8c] animate-fade-in">
            나은 내일은 당신의 건강 파트너입니다
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed animate-fade-in delay-200 mobile-text-adjust">
            더 많은 에너지. 더 큰 힘. 더 느린 노화. 더 선명한 집중력.
            <br className="hidden sm:block" />더 적은 스트레스. 질병 예방. 더 긴 수명. 더 나은 삶.
          </p>
        </div>
      </section>

      {/* 주요 기능 소개 */}
      <section id="features" className="py-12 md:py-20 px-4 md:px-6 lg:px-8 bg-gray-50 relative">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#2a7d8c] mb-8 md:mb-16 animate-fade-in">
            나은 내일의 핵심 기능
          </h2>

          {/* 모바일 스크롤 컨트롤 */}
          {isMobile && (
            <div className="flex justify-between items-center mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => scrollFeatures("left")}
                className="touch-target"
                aria-label="이전 기능 보기"
              >
                ← 이전
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => scrollFeatures("right")}
                className="touch-target"
                aria-label="다음 기능 보기"
              >
                다음 →
              </Button>
            </div>
          )}

          {/* 주요 기능 소개 섹션의 FeatureCard 컴포넌트 변경 */}
          <div
            ref={featuresRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isMobile ? "flex overflow-x-auto pb-4 mobile-scroll" : ""}`}
          >
            <div className={`animate-fade-in ${isMobile ? "min-w-[85vw] sm:min-w-[70vw]" : ""}`}>
              <FeatureCard
                icon={<Heart className="h-10 w-10 text-[#2a7d8c]" />}
                title="상황 공유 피드"
                description="보호자와 환자가 병원에서 겪는 힘든 순간을 공유하는 커뮤니티. 공감 기능과 익명 댓글로 서로를 지지해요."
                image="/images/community-support.png"
              />
            </div>
            <div className={`animate-fade-in delay-200 ${isMobile ? "min-w-[85vw] sm:min-w-[70vw]" : ""}`}>
              <FeatureCard
                icon={<Gift className="h-10 w-10 text-[#2a7d8c]" />}
                title="기부 기능"
                description="소액 기부로 환자 치료비(70%)와 병원 시설 개선(30%)에 기여하세요. 사용 내역은 투명하게 공개됩니다."
                image="/images/donation-charity.png"
              />
            </div>
            <div className={`animate-fade-in delay-400 ${isMobile ? "min-w-[85vw] sm:min-w-[70vw]" : ""}`}>
              <FeatureCard
                icon={<FileText className="h-10 w-10 text-[#2a7d8c]" />}
                title="자원봉사 신청"
                description="병원 봉사 활동을 위한 신청서류를 간편하게 제출하고 봉사 활동에 참여하세요."
                image="/images/hospital-volunteer.png"
              />
            </div>
            <div className={`animate-fade-in ${isMobile ? "min-w-[85vw] sm:min-w-[70vw]" : ""}`}>
              <FeatureCard
                icon={<Music className="h-10 w-10 text-[#2a7d8c]" />}
                title="심리 안정 리소스"
                description="명상 음원, 호흡 가이드 등 심리적 안정을 위한 다양한 콘텐츠를 제공합니다."
                image="/images/meditation-wellness.png"
              />
            </div>
            <div className={`animate-fade-in delay-200 ${isMobile ? "min-w-[85vw] sm:min-w-[70vw]" : ""}`}>
              <FeatureCard
                icon={<Trophy className="h-10 w-10 text-[#2a7d8c]" />}
                title="마일리지 시스템"
                description="걷기, 피드 올리기, 봉사활동 참여, 기부하기로 마일리지를 적립하고 다양한 혜택을 누리세요."
                image="/images/medical-team.png"
              />
            </div>
            <div className={`animate-fade-in delay-400 ${isMobile ? "min-w-[85vw] sm:min-w-[70vw]" : ""}`}>
              <FeatureCard
                icon={<Users className="h-10 w-10 text-[#2a7d8c]" />}
                title="전문가 주도 포럼"
                description="의료 전문가와의 Q&A 세션에 참여하여 궁금한 점을 해결하세요. (프리미엄 전용)"
                image="/images/doctor-consultation.png"
              />
            </div>
          </div>

          {/* 모바일 스크롤 인디케이터 */}
          {isMobile && (
            <div className="flex justify-center mt-4 space-x-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`h-2 w-2 rounded-full ${i === 0 ? "bg-[#2a7d8c]" : "bg-gray-300"}`}></div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 멤버십 섹션 */}
      <section id="about" className="py-12 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* 멤버십 섹션 이미지 변경 */}
            <div className="md:w-1/2 animate-fade-in">
              <Image
                src="/images/medical-team.png"
                width={600}
                height={500}
                alt="멤버십 혜택"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2 space-y-4 md:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2a7d8c] animate-fade-in">
                All-in-One Membership
                <br />
                for Your Health and
                <br />
                Peak Performance
              </h2>
              <p className="text-base sm:text-lg text-gray-700 animate-fade-in delay-200 mobile-text-adjust">
                나은 내일 멤버십은 병원에서의 경험을 완전히 새롭게 만들어 드립니다. 전문가의 지원, 커뮤니티의 응원,
                그리고 최신 기술을 통해 더 나은 건강 여정을 시작하세요.
              </p>
              <div className="space-y-3 md:space-y-4 animate-fade-in delay-400">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2a7d8c] flex items-center justify-center mt-1 touch-target">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="ml-3 text-gray-700 mobile-text-adjust">전문가와 정기적인 상담 및 건강 체크</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2a7d8c] flex items-center justify-center mt-1 touch-target">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="ml-3 text-gray-700 mobile-text-adjust">맞춤형 건강 관리 플랜 제공</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2a7d8c] flex items-center justify-center mt-1 touch-target">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="ml-3 text-gray-700 mobile-text-adjust">독점 콘텐츠 및 리소스 접근 권한</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2a7d8c] flex items-center justify-center mt-1 touch-target">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="ml-3 text-gray-700 mobile-text-adjust">마일리지 2배 적립 혜택</p>
                </div>
              </div>
              <Button
                className="waitlist-btn bg-[#2a7d8c] hover:bg-[#236778] text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg animate-fade-in delay-600 touch-target w-full sm:w-auto mt-4"
                onClick={() => setShowWaitlistForm(true)}
              >
                <div className="waitlist-text-animation">
                  <span>웨</span>
                  <span>이</span>
                  <span>팅</span>
                  <span> </span>
                  <span>리</span>
                  <span>스</span>
                  <span>트</span>
                  <span> </span>
                  <span>등</span>
                  <span>록</span>
                  <span>하</span>
                  <span>기</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-12 md:py-16 px-4 bg-[#f0f7fa]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#2a7d8c] mb-8 md:mb-12 animate-fade-in">
            사용자 경험
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in">
              <div className="p-4 md:p-6 border-b border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-center text-[#2a7d8c] mb-3 md:mb-4">요약 데모</h3>
                <p className="text-center text-gray-600 mb-4 md:mb-6 mobile-text-adjust">
                  '나은 내일'의 주요 기능을 미리 살펴보세요
                </p>

                <DemoTabs />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="bg-white p-4 md:p-8 rounded-lg shadow-md text-center animate-fade-in">
                <div className="text-2xl md:text-4xl font-bold text-[#2a7d8c] mb-2">80%</div>
                <p className="text-gray-700 text-sm sm:text-base">사용자가 첫 12개월 내에 건강 개선 경험</p>
              </div>
              <div className="bg-white p-4 md:p-8 rounded-lg shadow-md text-center animate-fade-in delay-200">
                <div className="text-2xl md:text-4xl font-bold text-[#2a7d8c] mb-2">10,000+</div>
                <p className="text-gray-700 text-sm sm:text-base">활성 커뮤니티 멤버</p>
              </div>
              <div className="bg-white p-4 md:p-8 rounded-lg shadow-md text-center animate-fade-in delay-400">
                <div className="text-2xl md:text-4xl font-bold text-[#2a7d8c] mb-2">50+</div>
                <p className="text-gray-700 text-sm sm:text-base">전문 의료진 참여</p>
              </div>
              <div className="bg-white p-4 md:p-8 rounded-lg shadow-md text-center animate-fade-in delay-600">
                <div className="text-2xl md:text-4xl font-bold text-[#2a7d8c] mb-2">95%</div>
                <p className="text-gray-700 text-sm sm:text-base">사용자 만족도</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 가격 정책 */}
      <section id="pricing" className="py-12 md:py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#2a7d8c] mb-8 md:mb-16 animate-fade-in">
            가격 정책
          </h2>

          {/* 모바일에서는 스와이프 가능한 카드로 변경 */}
          <div
            className={`${isMobile ? "flex overflow-x-auto pb-4 snap-x snap-mandatory space-x-4 mobile-scroll" : "grid grid-cols-1 md:grid-cols-3 gap-8"}`}
          >
            <div className={`animate-fade-in ${isMobile ? "min-w-[85vw] sm:min-w-[70vw] snap-start" : ""}`}>
              <PricingCard
                title="기본 플랜"
                price="무료"
                features={[
                  "상황 공유 피드 (제한된 게시물)",
                  "자원봉사 신청서류 제출",
                  "기본 심리 안정 리소스",
                  "기부 기능",
                  "마일리지 적립 (표준 비율)",
                ]}
                onCardClick={() => setSelectedPlan("basic")}
                highlighted={false}
                showButton={false}
              />
            </div>
            <div className={`animate-fade-in delay-200 ${isMobile ? "min-w-[85vw] sm:min-w-[70vw] snap-start" : ""}`}>
              <PricingCard
                title="프리미엄 플랜"
                price="월 10,000원"
                subtext="연 100,000원 (16% 할인)"
                features={[
                  "모든 심리 안정 리소스 무제한 접근",
                  "고급 심리 상담 (연간 4회)",
                  "개인 맞춤형 건강 관리 플랜",
                  "독점 콘텐츠 (웨비나, 전문가 팁)",
                  "광고 제거",
                  "마일리지 2배 적립",
                ]}
                onCardClick={() => setSelectedPlan("premium")}
                highlighted={true}
                showButton={false}
              />
            </div>
            <div className={`animate-fade-in delay-400 ${isMobile ? "min-w-[85vw] sm:min-w-[70vw] snap-start" : ""}`}>
              <PricingCard
                title="패밀리 플랜"
                price="월 20,000원"
                subtext="연 200,000원 (16% 할인)"
                features={[
                  "최대 4명 사용 가능",
                  "프리미엄 플랜 기능 전부",
                  "공유 상담 세션 (연간 8회)",
                  "각 사용자별 2배 마일리지 적립",
                  "가족 간 마일리지 공유 가능",
                ]}
                onCardClick={() => setSelectedPlan("family")}
                highlighted={false}
                showButton={false}
              />
            </div>
          </div>

          {/* 모바일 스크롤 인디케이터 */}
          {isMobile && (
            <div className="flex justify-center mt-4 space-x-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`h-2 w-2 rounded-full ${i === 0 ? "bg-[#2a7d8c]" : "bg-gray-300"}`}></div>
              ))}
            </div>
          )}

          {/* 중앙 정렬된 웨이팅 리스트 등록 버튼 */}
          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="waitlist-btn bg-[#2a7d8c] hover:bg-[#236778] text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full animate-fade-in delay-400 touch-target w-full sm:w-auto"
              onClick={() => setShowWaitlistForm(true)}
            >
              <span className="waitlist-text-animation">
                <span>웨</span>
                <span>이</span>
                <span>팅</span>
                <span> </span>
                <span>리</span>
                <span>스</span>
                <span>트</span>
                <span> </span>
                <span>등</span>
                <span>록</span>
                <span>하</span>
                <span>기</span>
              </span>
              <ArrowRight className="ml-2 h-5 w-5 arrow-icon" />
            </Button>
          </div>
        </div>
      </section>

      {/* 사용자 후기 */}
      <section className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#2a7d8c] mb-8 md:mb-16 animate-fade-in">
            사용자 후기
          </h2>
          {/* 사용자 후기 섹션의 이미지 변경 */}
          <div
            className={`${isMobile ? "flex overflow-x-auto pb-4 snap-x snap-mandatory space-x-4 mobile-scroll" : "grid grid-cols-1 md:grid-cols-3 gap-8"}`}
          >
            <div className={`animate-fade-in ${isMobile ? "min-w-[85vw] sm:min-w-[70vw] snap-start" : ""}`}>
              <TestimonialCard
                role="프리미엄 회원, 서울"
                quote="나은 내일 덕분에 어머니의 병원 치료 과정에서 느끼는 불안감을 크게 줄일 수 있었습니다. 커뮤니티의 지지와 명상 콘텐츠가 큰 도움이 되었어요."
              />
            </div>
            <div className={`animate-fade-in delay-200 ${isMobile ? "min-w-[85vw] sm:min-w-[70vw] snap-start" : ""}`}>
              <TestimonialCard
                role="기본 회원, 부산"
                quote="병원 대기 시간이 지루하지 않게 되었어요. 명상 음원을 들으며 불안감을 줄이고, 다른 사용자들과 경험을 공유하는 것이 정말 좋습니다."
              />
            </div>
            <div className={`animate-fade-in delay-400 ${isMobile ? "min-w-[85vw] sm:min-w-[70vw] snap-start" : ""}`}>
              <TestimonialCard
                role="패밀리 플랜 회원, 대전"
                quote="가족 모두가 함께 건강 관리를 할 수 있어 좋습니다. 마일리지로 기부도 하고, 전문가 상담도 받을 수 있어 매우 만족스러워요."
              />
            </div>
          </div>

          {/* 모바일 스크롤 인디케이터 */}
          {isMobile && (
            <div className="flex justify-center mt-4 space-x-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`h-2 w-2 rounded-full ${i === 0 ? "bg-[#2a7d8c]" : "bg-gray-300"}`}></div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section id="faq" className="py-12 md:py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#2a7d8c] mb-8 md:mb-16 animate-fade-in">
            자주 묻는 질문
          </h2>
          <div className="space-y-4 md:space-y-6 max-w-3xl mx-auto">
            <div className="animate-fade-in">
              <FaqItem
                question="구독은 언제든지 취소할 수 있나요?"
                answer="네, 언제든지 구독을 취소할 수 있습니다. 취소 시 다음 결제일까지 서비스를 이용할 수 있으며, 자동으로 갱신되지 않습니다."
              />
            </div>
            <div className="animate-fade-in delay-200">
              <FaqItem
                question="마일리지는 어떻게 사용하나요?"
                answer="마일리지는 프리미엄 기능 체험, 기부금 전환, 자원봉사 우선 배정, 특별 이벤트 응모 등에 사용할 수 있습니다. 마이페이지에서 현재 마일리지 잔액과 사용 내역을 확인할 수 있습니다."
              />
            </div>
            <div className="animate-fade-in delay-400">
              <FaqItem
                question="기부금은 어떻게 사용되나요?"
                answer="기부금의 70%는 환자 치료비 지원에, 30%는 병원 시설 개선에 사용됩니다. 모든 기부금 사용 내역은 투명하게 공개되며, 마이페이지에서 확인할 수 있습니다."
              />
            </div>
            <div className="animate-fade-in delay-600">
              <FaqItem
                question="자원봉사는 어떻게 신청하나요?"
                answer="자원봉사 메뉴에서 원하는 봉사 활동을 선택하고 필요한 서류를 제출하면 됩니다. 승인 후 일정을 조율하여 봉사 활동에 참여할 수 있습니다."
              />
            </div>
            <div className="animate-fade-in delay-600">
              <FaqItem
                question="프리미엄 플랜의 무료 체험 기간은 얼마인가요?"
                answer="프리미엄 플랜은 14일간 무료로 체험할 수 있습니다. 체험 기간 동안 언제든지 구독을 취소할 수 있으며, 취소하지 않으면 체험 기간 종료 후 자동으로 결제됩니다."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8 bg-[#a7c7e7]">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 animate-fade-in">
            Are You Truly Healthy?
            <br />
            It's Time to Check
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto animate-fade-in delay-200 mobile-text-adjust">
            지금 웨이팅 리스트에 등록하고 출시 소식을 가장 먼저 받아보세요. 출시 후 14일간 프리미엄 기능을 무료로 체험할
            수 있습니다.
          </p>
          <Button
            size="lg"
            className="waitlist-btn-white bg-white text-[#2a7d8c] hover:bg-gray-100 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full animate-fade-in delay-400 touch-target w-full sm:w-auto"
            onClick={() => setShowWaitlistForm(true)}
          >
            <span className="waitlist-text-animation">
              <span>웨</span>
              <span>이</span>
              <span>팅</span>
              <span> </span>
              <span>리</span>
              <span>스</span>
              <span>트</span>
              <span> </span>
              <span>등</span>
              <span>록</span>
              <span>하</span>
              <span>기</span>
            </span>
            <ArrowRight className="ml-2 h-5 w-5 arrow-icon" />
          </Button>
        </div>
      </section>

      {/* 푸터 섹션의 여백을 줄이고 더 깔끔하게 수정 */}
      {/* 패딩 값을 줄이고, 간격을 조정하며, 레이아웃을 더 컴팩트하게 변경 */}

      {/* 푸터 */}
      <footer className="bg-[#2a7d8c] text-white py-6 md:py-8 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div>
              <h3 className="text-lg font-bold mb-2">나은 내일</h3>
              <p className="text-xs text-gray-200">
                병원 여정의 동반자, 나은 내일이 여러분의 더 나은 내일을 응원합니다.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-sm">서비스</h4>
              <ul className="space-y-1 text-xs text-gray-200">
                <li className="touch-target flex items-center h-6">상황 공유 피드</li>
                <li className="touch-target flex items-center h-6">기부 기능</li>
                <li className="touch-target flex items-center h-6">자원봉사 신청</li>
                <li className="touch-target flex items-center h-6">심리 안정 리소스</li>
                <li className="touch-target flex items-center h-6">마일리지 시스템</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-sm">회사</h4>
              <ul className="space-y-1 text-xs text-gray-200">
                <li className="touch-target flex items-center h-6">소개</li>
                <li className="touch-target flex items-center h-6">팀</li>
                <li className="touch-target flex items-center h-6">채용</li>
                <li className="touch-target flex items-center h-6">블로그</li>
                <li className="touch-target flex items-center h-6">언론 보도</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-sm">법적 정보</h4>
              <ul className="space-y-1 text-xs text-gray-200">
                <li className="touch-target flex items-center h-6">이용약관</li>
                <li className="touch-target flex items-center h-6">개인정보처리방침</li>
                <li className="touch-target flex items-center h-6">쿠키 정책</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-500 mt-4 pt-4 text-xs text-gray-300">
            <p>© {new Date().getFullYear()} 나은 내일. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* 플랜 상세 정보 모달 */}
      {selectedPlan && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPlan(null)}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-md w-full relative p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 touch-target"
              aria-label="닫기"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="sr-only">닫기</span>
            </button>

            <div className="text-center mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-[#2a7d8c] mb-2">
                {selectedPlan === "basic" ? "기본 플랜" : selectedPlan === "premium" ? "프리미엄 플랜" : "패밀리 플랜"}{" "}
                상세 정보
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                {selectedPlan === "basic"
                  ? "무료로 시작하는 건강 관리"
                  : selectedPlan === "premium"
                    ? "개인 맞춤형 건강 관리 서비스"
                    : "가족과 함께하는 건강 관리"}
              </p>
            </div>

            <div className="space-y-3 md:space-y-4 mb-6">
              {selectedPlan === "basic" && (
                <>
                  <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                    <h3 className="font-medium text-[#2a7d8c] mb-1 md:mb-2 text-sm md:text-base">상황 공유 피드</h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      매일 최대 3개의 게시물을 작성할 수 있으며, 다른 사용자의 게시물에 댓글을 달 수 있습니다.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                    <h3 className="font-medium text-[#2a7d8c] mb-1 md:mb-2 text-sm md:text-base">자원봉사 신청</h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      월 1회 자원봉사 활동에 참여할 수 있으며, 봉사 활동 인증서를 발급받을 수 있습니다.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                    <h3 className="font-medium text-[#2a7d8c] mb-1 md:mb-2 text-sm md:text-base">마일리지 적립</h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      활동 1회당 10 마일리지가 적립되며, 적립된 마일리지는 기부나 서비스 이용에 사용할 수 있습니다.
                    </p>
                  </div>
                </>
              )}

              {selectedPlan === "premium" && (
                <>
                  <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                    <h3 className="font-medium text-[#2a7d8c] mb-1 md:mb-2 text-sm md:text-base">고급 심리 상담</h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      연간 4회의 1:1 전문가 상담 세션을 제공합니다. 각 세션은 50분 동안 진행됩니다.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                    <h3 className="font-medium text-[#2a7d8c] mb-1 md:mb-2 text-sm md:text-base">
                      맞춤형 건강 관리 플랜
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      개인의 건강 상태와 목표에 맞춘 맞춤형 건강 관리 플랜을 제공합니다. 분기별로 업데이트됩니다.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                    <h3 className="font-medium text-[#2a7d8c] mb-1 md:mb-2 text-sm md:text-base">마일리지 2배 적립</h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      모든 활동에서 기본 플랜의 2배 마일리지가 적립됩니다. 활동 1회당 20 마일리지가 적립됩니다.
                    </p>
                  </div>
                </>
              )}

              {selectedPlan === "family" && (
                <>
                  <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                    <h3 className="font-medium text-[#2a7d8c] mb-1 md:mb-2 text-sm md:text-base">가족 계정 관리</h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      최대 4명의 가족 구성원을 하나의 계정으로 관리할 수 있습니다. 각 구성원은 개별 프로필을 가집니다.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                    <h3 className="font-medium text-[#2a7d8c] mb-1 md:mb-2 text-sm md:text-base">공유 상담 세션</h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      연간 8회의 가족 공유 상담 세션을 제공합니다. 가족 구성원이 함께 참여할 수 있습니다.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                    <h3 className="font-medium text-[#2a7d8c] mb-1 md:mb-2 text-sm md:text-base">마일리지 공유</h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      가족 구성원 간에 마일리지를 공유하고 합산하여 사용할 수 있습니다.
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="text-center">
              <Button
                className="waitlist-btn bg-[#2a7d8c] hover:bg-[#236778] text-white px-6 md:px-8 py-2 touch-target w-full sm:w-auto"
                onClick={() => {
                  setSelectedPlan(null)
                  setShowWaitlistForm(true)
                }}
              >
                <span className="waitlist-text-animation">
                  <span>웨</span>
                  <span>이</span>
                  <span>팅</span>
                  <span> </span>
                  <span>리</span>
                  <span>스</span>
                  <span>트</span>
                  <span> </span>
                  <span>등</span>
                  <span>록</span>
                  <span>하</span>
                  <span>기</span>
                </span>
                <ArrowRight className="ml-2 h-5 w-5 arrow-icon" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* 웨이팅 리스트 폼 모달 */}
      {showWaitlistForm && <WaitlistForm onClose={() => setShowWaitlistForm(false)} />}
    </div>
  )
}

// 컴포넌트들
function FeatureCard({ icon, title, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden h-full">
      <div className="h-40 sm:h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          width={400}
          height={300}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 sm:p-6">
        <div className="mb-3 sm:mb-4">{icon}</div>
        <h3 className="text-lg sm:text-xl font-bold text-[#2a7d8c] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base mobile-text-adjust">{description}</p>
      </div>
    </div>
  )
}

function PricingCard({ title, price, subtext, features, onCardClick, highlighted, showButton = true }) {
  return (
    <div
      className={`rounded-lg shadow-md overflow-hidden ${highlighted ? "border-2 border-[#2a7d8c] ring-2 ring-[#2a7d8c]/20 relative" : "border border-gray-200"} cursor-pointer transform transition-transform hover:scale-105 h-full`}
      onClick={onCardClick}
    >
      {highlighted && (
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#2a7d8c] text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-md z-10"
          style={{ marginTop: "-5px" }}
        >
          인기 플랜
        </div>
      )}
      <div className={`p-4 sm:p-6 ${highlighted ? "bg-[#f0f7fa]" : "bg-white"}`}>
        <h3 className="text-lg sm:text-xl font-bold text-[#2a7d8c] mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600">{price}</p>
        {subtext && <p className="text-xs sm:text-sm text-gray-500 mb-3">{subtext}</p>}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-600 text-sm">
              {feature}
            </li>
          ))}
        </ul>
        {showButton && (
          <Button className="waitlist-btn bg-[#2a7d8c] hover:bg-[#236778] text-white mt-4 w-full touch-target">
            웨이팅 리스트 등록
          </Button>
        )}
      </div>
    </div>
  )
}

function TestimonialCard({ role, quote }) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-100 h-full">
      <div className="flex items-center mb-4">
        <div className="bg-gray-100 rounded-lg p-2 mr-3 touch-target">
          <Users className="h-5 w-5 text-[#2a7d8c]" />
        </div>
        <div>
          <h4 className="font-bold text-[#2a7d8c] text-sm sm:text-base">
            {role.includes("서울") ? "김OO" : role.includes("부산") ? "이OO" : "박OO"}
          </h4>
          <p className="text-xs sm:text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 italic text-sm sm:text-base mobile-text-adjust">"{quote}"</p>
    </div>
  )
}

// Also add the missing FaqItem component
function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="flex justify-between items-center w-full p-3 sm:p-4 text-left bg-white hover:bg-gray-50 touch-target"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <span className="font-medium text-[#2a7d8c] text-sm sm:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div
          className="p-3 sm:p-4 bg-gray-50 border-t border-gray-200"
          id={`faq-answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
        >
          <p className="text-gray-600 text-sm sm:text-base mobile-text-adjust">{answer}</p>
        </div>
      )}
    </div>
  )
}
