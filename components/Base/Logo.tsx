import Image from "next/image"
import Link from "./Link"

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/images/Logo_White.png" alt="The Peaks Logo" width={131} height={51.66} />
    </Link>
  )
}

export default Logo