'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [collegeName, setCollegeName] = useState("");

  useEffect(() => {
    // Check if window object is defined (i.e., if the code is running on the client side)
    if (typeof window !== "undefined") {
      // Get the college name from URL search parameters
      const searchParams = new URLSearchParams(window.location.search);
      const college = searchParams.get("college");

      // Function to format the college name based on the query parameter
      const formatCollegeName = (college) => {
        // If college is "lnct", return "LNCT INDORE"
        if (college === "lnct") {
          return "LNCT INDORE";
        }
        // If college is "lncts", return "LNCT (RIT) INDORE"
        if (college === "lncts") {
          return "LNCT (RIT) INDORE";
        }
        // If college contains "-" (e.g., college-lncts), split it and format the name accordingly
        if (college && college.includes("-")) {
          const [collegeCode, collegeName] = college.split("-");
          return `${collegeName} (${collegeCode.toUpperCase()})`;
        }
        // If college does not contain "-", return the college name in uppercase
        return college ? `${college.toUpperCase()} College` : "College Name";
      };

      // Set the formatted college name in state
      setCollegeName(formatCollegeName(college));
    }
  }, []);

  return (
    <div className="px-20 py-2 flex gap-10 items-center">
      <div className="w-[370px] h-[120px] relative">
        <Image src="/logo1.png" alt="logo" width={370} height={120} />
      </div>
      <h1 className="text-4xl font-bold text-blue-600">
        {/* Render the college name obtained from URL search parameters */}
        {collegeName}
      </h1>
    </div>
  );
}
