import Link from "next/link"

const Navbar = () => {
  return (
    <div className="bg-slate-600 flex justify-around h-16 items-center">
      <Link href="/">Home</Link>
      <div className="flex gap-8">
        <Link href="/industry">Industry page</Link>
        <Link href="/page2">page 2</Link>
        <Link href="/page3">page 3</Link>
      </div>
    </div>
  )
}

export default Navbar
