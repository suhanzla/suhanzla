"use client"

import { useState } from "react"
import { Play, Upload } from "lucide-react"

export default function DemoTabs() {
  const [activeTab, setActiveTab] = useState("피드")

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="flex border-b">
        <button
          className={`flex-1 py-3 px-4 text-center font-medium ${
            activeTab === "피드"
              ? "bg-white text-[#2a7d8c] border-b-2 border-[#2a7d8c]"
              : "text-gray-500 hover:text-[#2a7d8c] hover:bg-gray-50"
          }`}
          onClick={() => setActiveTab("피드")}
        >
          피드
        </button>
        <button
          className={`flex-1 py-3 px-4 text-center font-medium ${
            activeTab === "기부 내역"
              ? "bg-white text-[#2a7d8c] border-b-2 border-[#2a7d8c]"
              : "text-gray-500 hover:text-[#2a7d8c] hover:bg-gray-50"
          }`}
          onClick={() => setActiveTab("기부 내역")}
        >
          기부 내역
        </button>
        <button
          className={`flex-1 py-3 px-4 text-center font-medium ${
            activeTab === "봉사 신청"
              ? "bg-white text-[#2a7d8c] border-b-2 border-[#2a7d8c]"
              : "text-gray-500 hover:text-[#2a7d8c] hover:bg-gray-50"
          }`}
          onClick={() => setActiveTab("봉사 신청")}
        >
          봉사 신청
        </button>
        <button
          className={`flex-1 py-3 px-4 text-center font-medium ${
            activeTab === "명상 리소스"
              ? "bg-white text-[#2a7d8c] border-b-2 border-[#2a7d8c]"
              : "text-gray-500 hover:text-[#2a7d8c] hover:bg-gray-50"
          }`}
          onClick={() => setActiveTab("명상 리소스")}
        >
          명상 리소스
        </button>
      </div>

      <div className="p-4">
        {activeTab === "피드" && <FeedTab />}
        {activeTab === "기부 내역" && <DonationTab />}
        {activeTab === "봉사 신청" && <VolunteerTab />}
        {activeTab === "명상 리소스" && <MeditationTab />}
      </div>
    </div>
  )
}

function FeedTab() {
  return (
    <div>
      <h4 className="text-lg font-medium mb-4">상황 공유 피드</h4>

      <div className="space-y-4">
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
            <div>
              <div className="font-medium">김OO님</div>
              <div className="text-sm text-gray-500">2시간 전</div>
            </div>
          </div>
          <p className="mb-3">
            오늘 아버지 수술이 무사히 끝났습니다. 대기실에서 불안한 마음으로 기다리는 동안 이곳에서 많은 위로를
            받았어요.
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <div className="flex items-center mr-4">
              <svg className="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>공감 24</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span>댓글 8</span>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
            <div>
              <div className="font-medium">이OO님</div>
              <div className="text-sm text-gray-500">5시간 전</div>
            </div>
          </div>
          <p className="mb-3">병원 생활 3주차입니다. 처음엔 막막했는데 여기 계신 분들 덕분에 하루하루 버티고 있어요.</p>
          <div className="flex items-center text-sm text-gray-500">
            <div className="flex items-center mr-4">
              <svg className="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>공감 42</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span>댓글 15</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DonationTab() {
  return (
    <div>
      <h4 className="text-lg font-medium mb-4">기부 내역 그래프</h4>

      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-500 mb-2">기부금 분배율</p>
          <div className="w-full h-8 bg-gray-200 rounded-full overflow-hidden">
            <div className="flex h-full">
              <div className="bg-emerald-500 h-full w-[60%] flex items-center justify-center text-xs text-white">
                환자 지원 60%
              </div>
              <div className="bg-blue-500 h-full w-[30%] flex items-center justify-center text-xs text-white">
                운영 30%
              </div>
              <div className="bg-purple-500 h-full w-[10%] flex items-center justify-center text-xs text-white">
                개발 10%
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="font-medium">4월 기부 내역</span>
            <span className="font-bold text-emerald-600">₩1,240,000</span>
          </div>

          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="font-medium">5월 기부 내역</span>
            <span className="font-bold text-emerald-600">₩1,580,000</span>
          </div>

          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="font-medium">지원 환자 수</span>
            <span className="font-bold text-blue-600">32명</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function VolunteerTab() {
  return (
    <div>
      <h4 className="text-lg font-medium mb-4">봉사활동 신청</h4>

      <div className="space-y-6">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <Upload className="h-12 w-12 text-gray-400" />
          </div>
          <p className="text-gray-600 mb-2">서류를 여기에 드래그하거나 클릭하여 업로드하세요</p>
          <p className="text-xs text-gray-500">지원서, 신분증, 자격증 등</p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="font-medium">병원 동행 봉사</span>
            <span className="text-sm text-blue-600 font-medium">신청 가능</span>
          </div>

          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="font-medium">말벗 봉사</span>
            <span className="text-sm text-blue-600 font-medium">신청 가능</span>
          </div>

          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="font-medium">식사 도움 봉사</span>
            <span className="text-sm text-red-500 font-medium">마감됨</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function MeditationTab() {
  return (
    <div>
      <h4 className="text-lg font-medium mb-4">명상 리소스</h4>

      <div className="space-y-6">
        <div className="bg-[#1a2b3c] text-white rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h5 className="font-medium text-lg">5분 호흡 명상</h5>
              <p className="text-sm text-gray-300">스트레스 해소에 도움이 됩니다</p>
            </div>
            <button className="bg-white rounded-full p-3 text-[#1a2b3c]">
              <Play className="h-6 w-6" />
            </button>
          </div>
          <div className="mb-2">
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-blue-400 h-2 rounded-full" style={{ width: "30%" }}></div>
            </div>
          </div>
          <div className="flex justify-between text-sm">
            <span>1:30</span>
            <span>5:00</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <div>
              <span className="font-medium">수면 유도 명상</span>
              <p className="text-xs text-gray-500">8분</p>
            </div>
            <Play className="h-5 w-5 text-gray-600" />
          </div>

          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <div>
              <span className="font-medium">불안 완화 호흡법</span>
              <p className="text-xs text-gray-500">10분</p>
            </div>
            <Play className="h-5 w-5 text-gray-600" />
          </div>

          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <div>
              <span className="font-medium">마음 챙김 명상</span>
              <p className="text-xs text-gray-500">15분</p>
            </div>
            <Play className="h-5 w-5 text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  )
}
