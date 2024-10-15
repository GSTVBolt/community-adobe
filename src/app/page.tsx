import { NavItems } from "@/components/nav/nav-items"
import ImageAfter from '../../public/image-after-effects.jpg'
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1">

        <NavItems />

        <main className="flex p-10 mt-28">
          {/* <Image src={ImageAfter} alt="After Effects Text Presets" /> */}
          MAIN
        </main>

      </div>

      <footer>
        Footer
      </footer>
    </div>
  )
}