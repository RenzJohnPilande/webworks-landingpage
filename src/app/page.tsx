'use client'

import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";


export default function Home() {
  return (
    <div className="flex w-full flex-wrap items-start justify-center">
      {/* Hero Banner */}
      <div className="flex flex-wrap w-full justify-center items-center px-10 py-40 text-white bg-slate-950">
        <div className="flex flex-wrap container max-w-[1200px]">
          <div className="flex flex-wrap max-w-[600px] gap-8">
            <h1 className="text-4xl md:text-6xl font-bold">Effortless Web Hosting Starts Here</h1>
            <p className="text-sm md:text-lg">Free Domain, Professional Email, and Privacy Protection included</p>
            <Link href="/" className="px-5 py-3 bg-blue-500 hover:bg-blue-400">Get Started</Link>
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="flex flex-wrap flex-col w-full justify-center items-center px-10 py-20 gap-4">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="text-slate-500 capitalize">Empower your online presence with blazing fast and secure web hosting!</p>
        <div className="container max-w-[1000px] py-4 gap-10">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full flex-wrap justify-center gap-4 md:gap-0 my-10">
            <div className="flex flex-col flex-wrap items-center text-center w-full p-2 capitalize gap-4">
              <h4 className="font-bold text-xl text-slate-800">Shared Hosting</h4>
              <p className="text-sm text-slate-500 line-clamp-2 max-w-[250px]">Fastest SSD based web hosting platform for your website</p>
              <div className="flex flex-col gap-2 text-sm text-slate-500">
                <p>single domain</p>
                <p>one click installs</p>
                <p>unlimited bandwidth</p>
                <p>SSL certificate</p>
              </div>
            </div>
             <div className="flex flex-col flex-wrap items-center text-center w-full p-2 capitalize gap-4">
              <h4 className="font-bold text-xl text-slate-800">Shared Hosting</h4>
              <p className="text-sm text-slate-500 line-clamp-2 max-w-[250px]">Fastest SSD based web hosting platform for your website</p>
              <div className="flex flex-col gap-2 text-sm text-slate-500">
                <p>single domain</p>
                <p>one click installs</p>
                <p>unlimited bandwidth</p>
                <p>SSL certificate</p>
              </div>
            </div>
             <div className="flex flex-col flex-wrap items-center text-center w-full p-2 capitalize gap-4">
              <h4 className="font-bold text-xl text-slate-800">Shared Hosting</h4>
              <p className="text-sm text-slate-500 line-clamp-2 max-w-[250px]">Fastest SSD based web hosting platform for your website</p>
              <div className="flex flex-col gap-2 text-sm text-slate-500">
                <p>single domain</p>
                <p>one click installs</p>
                <p>unlimited bandwidth</p>
                <p>SSL certificate</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-start md:justify-center bg-slate-900 p-5 gap-8 mt-20">
            <div className="flex gap-2 items-center ">
              <FaCheckCircle className="text-blue-500"/>
              <p className="text-white text-md">24/7 Customer Support</p>
            </div>
            <div className="flex gap-2 items-center ">
              <FaCheckCircle className="text-blue-500"/>
              <p className="text-white text-md">1-Click Install</p>
            </div>
            <div className="flex gap-2 items-center ">
              <FaCheckCircle className="text-blue-500"/>
              <p className="text-white text-md">99.9% Uptime Guarantee</p>
            </div>
          </div>
        </div>
        
        
      </div>
      {/* Why Choose Us */}
      <div className="grid w-full grid-cols-1 lg:grid-cols-2">
       <div className="flex flex-wrap lg:justify-end w-full bg-slate-200 py-15">
         <div className="flex flex-col flex-wrap justify-center content-center px-10 max-w-[400px] gap-4">
          <p className="text-blue-500 font-bold">Our Features</p>
          <h4 className="text-slate-900 text-3xl font-bold">Why Choose Us?</h4>
          <p className="text-gray-500 text-sm">Our web hosting solutions are an easy way to get a great website up and running, with so many robust features we throw in a domain, SSl Certificate, professional email address, and privacy protection for free.</p>
          <Link href="/" className="text-slate-900 border border-slate-900 w-fit px-8 py-3 text-sm font-semibold hover:border-slate-600 hover:text-slate-600">Get Started Today!</Link>
        </div>
       </div>
        <div className="w-full bg-slate-900 px-10 text-white">
          <div className="flex flex-wrap flex-col justify-center gap-10 py-15">
            <div className="flex items-center gap-6 w-full">
              <div className="flex items-center border p-4 bg-white text-slate-900 "><MdOutlineTimer className="text-3xl"/></div>
              <div className="flex flex-wrap max-w-[350px] gap-1.5">
                <h5 className="font-semibold">99% Network Uptime</h5>
                <p className="text-sm">At hosting maximum performance, we&apos;re dedicated to providing top tier soulutions tailored.</p>
              </div>
            </div>
            <div className="flex items-center gap-6 w-full">
              <div className="flex items-center border p-4 bg-white text-slate-900 "><MdOutlineTimer className="text-3xl"/></div>
              <div className="flex flex-wrap max-w-[350px] gap-1.5">
                <h5 className="font-semibold">99% Network Uptime</h5>
                <p className="text-sm">At hosting maximum performance, we&apos;re dedicated to providing top tier soulutions tailored.</p>
              </div>
            </div>
            <div className="flex items-center gap-6 w-full">
              <div className="flex items-center border p-4 bg-white text-slate-900 "><MdOutlineTimer className="text-3xl"/></div>
              <div className="flex flex-wrap max-w-[350px] gap-1.5">
                <h5 className="font-semibold">99% Network Uptime</h5>
                <p className="text-sm">At hosting maximum performance, we&apos;re dedicated to providing top tier soulutions tailored.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="flex flex-wrap flex-col w-full justify-center items-center px-10 py-20 gap-4">
        <h2 className="text-3xl font-bold">Our Projects</h2>
        <p className="text-slate-500 capitalize">Explore the projects that define our expertise.</p>
      </div>
    </div>
  );
}
