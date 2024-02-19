import { Allerta_Stencil } from "next/font/google";

const allertaStencil = Allerta_Stencil({ subsets: ["latin"], weight: ["400"],});

export default function TestComponent() {
  return (
    <div className={`${allertaStencil.className} antialiased`}>
    <p>page</p>
    </div>
  )
}
