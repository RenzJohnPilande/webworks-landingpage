import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="flex flex-wrap w-full">
      <div className="hidden md:flex flex-wrap justify-center w-full text-white bg-slate-900 p-3 text-sm">
        Hosting Flash Sale: Starting at <span className="font-bold px-1"> $2.59/mo </span> for a limited time
      </div>
      <div className="flex flex-wrap justify-between lg:justify-center w-full gap-x-10 p-5">
        <Link href="/">Webworks Solutions</Link>
        <div className="hidden lg:flex gap-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <Sheet>
          <SheetTrigger className="lg:hidden"><FaBars/></SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Navigate through our website</SheetTitle>
              <Link href="/">Home</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
