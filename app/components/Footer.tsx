import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";
import site from "@/app/config/site.json";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-2 text-gray-300 border-t border-white/10 bg-gradient-to-b from-black/90 to-[#0f1218] relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)] bg-[radial-gradient(45rem_30rem_at_top,rgba(255,255,255,0.04),transparent)]" />

      <div className="relative">
        <div className="border-b border-white/10 bg-surface/40 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-white">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_20px_var(--primary)]" />
              <p className="text-lg font-semibold tracking-tight">
                Ride in luxury. Available 24/7 across Houston.
              </p>
            </div>
            <Link
              href={`tel:${site.tel}`}
              className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-black/30 hover:brightness-110 transition focus:outline-none focus:ring-4 focus:ring-[color:var(--primary)]/40"
            >
              Book Now
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
            <div className="h-32  overflow-hidden">
               <img
            src="https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/24%20Hour%20Limo%20For%20You.png?updatedAt=1755847281608"
            alt="LimoLux Logo"
            className="h-auto w-40  mr-2 object-contain"
          />
          </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Premium chauffeured limousine service delivering comfort, safety,
              and style for every occasion.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <FaLocationDot className="text-primary" />
              <span>{site.address}</span>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                aria-label="Facebook"
                href="#"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                aria-label="X (Twitter)"
                href="#"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition"
              >
                <FaXTwitter />
              </a>
              <a
                aria-label="YouTube"
                href="#"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-white transition">
                  Fleet
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services/airport-transportation"
                  className="hover:text-white transition"
                >
                  Airport Travel
                </Link>
              </li>
              <li>
                <Link
                  href="/services/wedding-transportation"
                  className="hover:text-white transition"
                >
                  Weddings
                </Link>
              </li>
              <li>
                <Link
                  href="/services/corporate-transportation"
                  className="hover:text-white transition"
                >
                  Corporate Travel
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold mb-4 tracking-wide">
              Contact
            </h4>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-primary">
                <FaPhone />
              </span>
              <a
                href={`tel:${site.tel}`}
                className="hover:text-white transition"
              >
                {site.No}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-primary">
                <FaEnvelope />
              </span>
              <a
                href={`mailto:${site.mail}`}
                className="hover:text-white transition"
              >
                {site.mail}
              </a>
            </div>
            <p className="text-xs text-gray-500 pt-2">
              Response time under 10 minutes during business hours.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-gray-400">
              © {year} {site.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Privacy Policy
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
