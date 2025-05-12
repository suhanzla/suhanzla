import { useState, useEffect } from "react"
import { ChevronUp, MessageCircle, Heart } from "lucide-react"

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 200)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed right-6 bottom-8 z-50 flex flex-col items-end space-y-3">
      {/* 후원하기 버튼 */}
      <a
        tabIndex={0}
        onClick={e => e.preventDefault()}
        className="group flex items-center bg-white shadow-lg rounded-full px-4 py-2 transition-all duration-200 hover:bg-orange-500 hover:shadow-xl cursor-pointer"
        style={{ minWidth: 48 }}
      >
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 group-hover:bg-white transition-colors duration-200">
          <Heart className="text-white group-hover:text-orange-500 transition-colors duration-200" />
        </span>
        <span className="ml-3 text-orange-500 font-bold transition-all duration-200 whitespace-nowrap group-hover:text-white">
          후원하기
        </span>
      </a>
      {/* 챗봇문의 버튼 */}
      <a
        tabIndex={0}
        onClick={e => e.preventDefault()}
        className="group flex items-center bg-white shadow-lg rounded-full px-4 py-2 transition-all duration-200 hover:bg-yellow-400 hover:shadow-xl cursor-pointer"
        style={{ minWidth: 48 }}
      >
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 group-hover:bg-white transition-colors duration-200">
          <MessageCircle className="text-white group-hover:text-yellow-400 transition-colors duration-200" />
        </span>
        <span className="ml-3 text-yellow-500 font-bold transition-all duration-200 whitespace-nowrap group-hover:text-white">
          챗봇문의
        </span>
      </a>
      {/* 맨위로 버튼 */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all duration-200 border border-gray-200"
          aria-label="맨 위로"
        >
          <ChevronUp className="text-gray-700 w-6 h-6" />
        </button>
      )}
    </div>
  )
} 