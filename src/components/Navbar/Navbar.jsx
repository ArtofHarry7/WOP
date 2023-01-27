import React from "react";
import { Disclosure } from "@headlessui/react";
import Logo from "../../img/Logo.png";

const Navbar = () => {
  const navigation = ["Blog", "Gallery", "FAQs"];
  return (
    <div className="w-full font-montserrat">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <a href="/">
                  <span>
                    <img
                      src={Logo}
                      alt="N"
                      // width="32"
                      // height="32"
                      // className="w-8"
                    />
                  </span>
                  {/* <span>WOP</span> */}
                </a>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <a key={index} href="/">
                        <a
                          href
                          className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                        >
                          {item}
                        </a>
                      </a>
                    ))}
                    <a href="/">
                      <a
                        href
                        className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                      >
                        Signup
                      </a>
                    </a>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <a href="/">
                  <a
                    href
                    className="transition ease-in-out inline-block font-light px-4 py-2 text-lg hover:underline hover:underline-offset-4 text-black no-underline rounded-md   focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
                  >
                    {menu}
                  </a>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-3 lg:flex nav__item align-middle">
          <auto href="/">
            <a
              href
              className="px-6 py-2 text-black outline outline-offset-2 align-middle outline-1 border-black hover:outline-2 rounded-md md:ml-5"
            >
              Signup
            </a>
            <span class="material-symbols-outlined font-thin px-6 py-2 text-4xl align-middle">account_circle</span>
          </auto>

          {/* <ThemeChanger /> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
