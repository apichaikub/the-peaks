import { useState } from "react"

type Props = {
  delay: number;
}

const useToastBookmark = () => {
  const [isShowBookedToast, setIsShowBookedToast] = useState<Boolean>(false)
  const [isShowRemovedToast, setIsShowRemovedTost] = useState<Boolean>(false)

  const showBookedToast = ({ delay = 3000 } : Props) => {
    setIsShowRemovedTost(false)
    setTimeout(() => setIsShowBookedToast(true), 100)
    setTimeout(() => setIsShowBookedToast(false), delay)
  }

  const showRemovedToast = ({ delay = 3000 } : Props) => {
    setIsShowBookedToast(false)
    setTimeout(() => setIsShowRemovedTost(true), 100)
    setTimeout(() => setIsShowRemovedTost(false), delay)
  }

  return {
    isShowBookedToast,
    isShowRemovedToast,
    showBookedToast,
    showRemovedToast,
  }
}

export default useToastBookmark