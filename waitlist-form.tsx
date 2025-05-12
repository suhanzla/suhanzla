"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function WaitlistForm({ onClose }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // 실제 구현에서는 addToWaitlist 함수를 호출하여 노션 API로 데이터 전송
      // 여기서는 페이크 도어 테스트이므로 성공 시나리오만 구현
      // await addToWaitlist({ name, email });

      // 성공 시나리오 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSuccess(true)
    } catch (err) {
      setError("등록 중 오류가 발생했습니다. 다시 시도해주세요.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <X className="h-5 w-5" />
          <span className="sr-only">닫기</span>
        </button>

        {!isSuccess ? (
          <>
            <div className="p-6">
              <div className="flex items-center justify-center mb-4">
                <h2 className="text-2xl font-bold text-[#2a7d8c] text-center w-full">웨이팅 리스트 등록</h2>
              </div>
              <p className="text-gray-600 mb-6">나은 내일 서비스 출시 소식을 가장 먼저 받아보세요.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">이름</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="홍길동"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">이메일</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    required
                  />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <Button type="submit" className="w-full bg-[#2a7d8c] hover:bg-[#236778]" disabled={isSubmitting}>
                  {isSubmitting ? "등록 중..." : "등록하기"}
                </Button>
              </form>
            </div>

            <div className="bg-gray-50 p-4 text-xs text-gray-500 rounded-b-lg">
              개인정보는 서비스 출시 알림 목적으로만 사용되며, 제3자에게 제공되지 않습니다.
            </div>
          </>
        ) : (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-[#2a7d8c] rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#2a7d8c] mb-2 animate-fade-in delay-200">
              웨이팅 리스트 등록 완료!
            </h2>
            <p className="text-gray-600 mb-6 animate-fade-in delay-400">출시되면 가장 먼저 알려드릴게요.</p>
            <Button onClick={onClose} className="bg-[#2a7d8c] hover:bg-[#236778] animate-fade-in delay-600">
              확인
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
