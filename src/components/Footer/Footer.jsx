function Footer() {
  return (
    <footer className="mt-16 bg-[#071122] px-3 pt-11 pb-6 text-[#e5e9f2] md:px-4 lg:px-6" id="footer">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))]">
        <div>
          <h3 className="font-heading text-2xl font-bold text-white">DigiTools</h3>
          <p className="text-[#e5e9f2]">
            All-in-one digital resource platform for modern builders and creators.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-xl font-bold text-white">Product</h4>
          <ul className="list-none p-0 text-[#e5e9f2]">
            <li>Tools</li>
            <li>Pricing</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-xl font-bold text-white">Resources</h4>
          <ul className="list-none p-0 text-[#e5e9f2]">
            <li>Documentation</li>
            <li>Tutorials</li>
            <li>Community</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-xl font-bold text-white">Contact</h4>
          <ul className="list-none p-0 text-[#e5e9f2]">
            <li>support@digitools.dev</li>
            <li>+880 1999 123456</li>
            <li>Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>
      <p className="mt-4 text-center opacity-75">© 2026 DigiTools. All rights reserved.</p>
    </footer>
  )
}

export default Footer
