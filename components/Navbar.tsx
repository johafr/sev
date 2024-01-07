import Link from "next/link"

const Navbar = () => {
  return (
    <div className="bg-sev-green-100 text-white h-16 grid grid-cols-5">
      <Link href="/" className="flex justify-center items-center border-r px-4">
        About global impact database
      </Link>
      <Link
        href="/methodology"
        className="flex justify-center items-center border-r px-4"
      >
        The Methodology - White Paper
      </Link>
      <Link
        href="/macro_assessments"
        className="flex justify-center items-center border-r px-4"
      >
        Macro assessments
      </Link>
      <Link
        href="/partnerships_and_ngo"
        className="flex justify-center items-center border-r px-4"
      >
        Partnership and NGO
      </Link>
      <Link
        href="/contact_us"
        className="flex justify-center items-center px-4"
      >
        Contact us
      </Link>
    </div>
  )
}

export default Navbar
