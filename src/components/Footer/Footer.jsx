import { FaFacebookF, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <footer className="mt-16 bg-[#040f2a] px-4 py-14 text-[#d5deef] md:px-6 lg:px-8" id="footer">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[1.6fr_repeat(3,minmax(0,1fr))_1fr]">
          <div>
            <h3 className="font-heading text-5xl font-extrabold text-white">DigiTools</h3>
            <p className="mt-3 max-w-xs text-base leading-relaxed text-[#b9c4d9]">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-xl font-semibold text-white">Product</h4>
            <ul className="mt-3 space-y-2 text-[#c7d2e7]">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl font-semibold text-white">Company</h4>
            <ul className="mt-3 space-y-2 text-[#c7d2e7]">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl font-semibold text-white">Resources</h4>
            <ul className="mt-3 space-y-2 text-[#c7d2e7]">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl font-semibold text-white">Social Links</h4>
            <div className="mt-3 flex items-center gap-3">
              <button
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0a1432]"
                type="button"
                aria-label="YouTube"
              >
                <FaYoutube size={15} />
              </button>
              <button
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0a1432]"
                type="button"
                aria-label="Facebook"
              >
                <FaFacebookF size={14} />
              </button>
              <button
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0a1432]"
                type="button"
                aria-label="X"
              >
                <FaXTwitter size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-5">
          <div className="flex flex-col items-start justify-between gap-3 text-sm text-[#95a4c0] md:flex-row md:items-center">
            <p>© 2026 Digitools. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
