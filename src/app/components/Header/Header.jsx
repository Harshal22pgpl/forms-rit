'use client'
// Import Image from "next/image";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter hook from next/router
import React from "react";

export default function Header() {
  const router = useRouter(); // Use useRouter hook to access router object
  const { college } = router.query || {}; // Destructure college query parameter or provide an empty object as default

  return (
    <div className="px-20 py-2 flex gap-10 items-center">
      <div className="w-[370px] h-[120px] relative">
        <Image src="/logo1.png" alt="logo" width={370} height={120} />
      </div>
      <h1 className="text-4xl font-bold text-blue-600">
        {/* Use the college query parameter dynamically */}
        {college ? `${college} College` : "College Name"}
      </h1>
    </div>
  );
}
