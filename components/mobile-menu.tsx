"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // 모바일 메뉴가 열릴 때 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // 메뉴 항목 클릭 시 메뉴 닫기
  const handleLinkClick = () => {
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col overflow-y-auto">
      <div className="flex justify-end p-4">
        <Button variant="ghost" size="icon" onClick={onClose} aria-label="메뉴 닫기">
          <X className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 space-y-8 p-4">
        <Link
          href="#"
          className="text-xl font-medium text-[#2a7d8c] hover:text-[#236778] transition-colors"
          onClick={handleLinkClick}
        >
          홈
        </Link>
        <Link
          href="#features"
          className="text-xl font-medium text-[#2a7d8c] hover:text-[#236778] transition-colors"
          onClick={handleLinkClick}
        >
          주요 기능
        </Link>
        <Link
          href="#pricing"
          className="text-xl font-medium text-[#2a7d8c] hover:text-[#236778] transition-colors"
          onClick={handleLinkClick}
        >
          가격 정책
        </Link>
        <Link
          href="#about"
          className="text-xl font-medium text-[#2a7d8c] hover:text-[#236778] transition-colors"
          onClick={handleLinkClick}
        >
          소개
        </Link>
        <Link
          href="#faq"
          className="text-xl font-medium text-[#2a7d8c] hover:text-[#236778] transition-colors"
          onClick={handleLinkClick}
        >
          FAQ
        </Link>

        <div className="pt-8 space-y-4 w-full max-w-xs">
          <Button
            variant="outline"
            className="w-full border-[#2a7d8c] text-[#2a7d8c] hover:bg-[#f0f7fa]"
            onClick={handleLinkClick}
          >
            로그인
          </Button>
          <Button className="w-full bg-[#2a7d8c] hover:bg-[#236778] text-white" onClick={handleLinkClick}>
            회원 가입
          </Button>
        </div>
      </div>
    </div>
  )
}
