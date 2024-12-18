import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <footer className="bg-primary text-white p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div>
            <h4 className="font-bold text-lg">Posify Software</h4>
            <div className="flex items-center py-2 space-x-2">
              <Link
                to="mailto:whayes@uci.edu"
                className="hover:text-hover-link transition"
                aria-label="Email Wayne B. Hayes"
              >
                <FaEnvelope size={24} />
              </Link>
              <p>Wayne B. Hayes at U.C. Irvine</p>
            </div>
            <div className="flex items-center py-2 space-x-2">
              <Link
                to="https://github.com/waynebhayes"
                className="inline-flex items-center hover:text-hover-link transition"
                aria-label="GitHub Repository"
              >
                <FaGithub size={24} />
                <span className="ml-2">Posify</span>
              </Link>
            </div>
          </div>

          <div className="text-sm">
            <p className="py-2">
              Last update:{" "}
              <span className="font-semibold">{formattedDate}</span>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-400 mt-6 pt-4 text-center">
          <p className="text-sm">© {currentDate.getFullYear()} Posify</p>
        </div>
      </div>
      <hr className="border-t border-gray-300 my-4"></hr>
    </footer>
  );
}

export default Footer;