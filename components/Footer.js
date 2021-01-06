import React from "react";

function Footer() {
  return (
    <div class=" border-t border-gray-500 flex justify-center  items-center mt-24">
      <p className="font-medium pt-5 text-xs lg:text-sm text-gray-600">
        Copyright {new Date().getFullYear()} Alfredo & Nicky &mdash; D-3 Teknik
        Informatika USU
      </p>
    </div>
  );
}

export default Footer;
