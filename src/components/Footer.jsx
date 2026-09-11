function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold">
              <span className="gradient-text">Dev Stack</span>
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-600">
              Explore modern technologies and build a personalized developer
              stack for your next project.
            </p>

            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-600"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-600"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-600"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Product</h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#technologies"
                  className="text-sm text-gray-600 transition hover:text-pink-600"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-sm text-gray-600 transition hover:text-pink-600"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-sm text-gray-600 transition hover:text-pink-600"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-sm text-gray-600 transition hover:text-pink-600"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm text-gray-600 transition hover:text-pink-600"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-sm text-gray-600 transition hover:text-pink-600"
                >
                  Our Story
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#privacy"
                  className="text-sm text-gray-600 transition hover:text-pink-600"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#terms"
                  className="text-sm text-gray-600 transition hover:text-pink-600"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#privacy" className="transition hover:text-gray-900">
              Privacy
            </a>

            <a href="#terms" className="transition hover:text-gray-900">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
