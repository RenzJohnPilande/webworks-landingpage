import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return(
    <div className="flex flex-wrap justify-center w-full bg-slate-900 text-white py-10 gap-10">
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <Link href="/" className="font-bold text-2xl">WebWorks</Link>
        <Separator orientation="vertical" className="hidden md:flex"/>
        <p className="text-sm">Copyright 2025 WebWorks Solutions. All rights Reserved</p>
      </div>
      <div className="flex flex-wrap gap-4 items-center">
          <Link href="/" className=""><FaFacebook/></Link>
          <Link href="/" className=""><FaXTwitter/></Link>
          <Link href="/" className=""><FaLinkedin/></Link>
        </div>
    </div>
  )
}