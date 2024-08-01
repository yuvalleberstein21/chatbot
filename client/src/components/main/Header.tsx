import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <div className="py-2 flex justify-center items-center w-full static bg-black">
          <p className="text-gray-200">free shipping on us orders over 80$</p>
        </div>

        <nav className="bg-gray-100 w-full z-20 top-0 start-0">
          <div className="max-w-screen-full flex flex-wrap items-center justify-between mx-auto p-4">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              Ecomm2024
            </span>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button type="button" className="text-black p-2">
                icon
              </button>
              <button type="button" className="text-black p-2">
                icon
              </button>
              <button type="button" className="text-black p-2">
                icon
              </button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                <li>
                  <Link to={'/'} className="block py-2 px-3 text-black">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={'/'} className="block py-2 px-3 text-black">
                    About
                  </Link>
                </li>
                <li>
                  <Link to={'/'} className="block py-2 px-3 text-black">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to={'/'} className="block py-2 px-3 text-black">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
