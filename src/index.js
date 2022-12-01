import React from 'react';
import { render } from 'react-dom';
import AccordionItem from './AccordianItem';
const RoundedDiv = ({ children }) => (
  <div className="border rounded-xl">{children}</div>
);
const App = () => {
  return (
    <div className="border border-grey-600 m-5 p-5  ">
      <div className="container p-2 mx-auto">
        <div className="flex flex-row flex-wrap py-4">
          <aside className="w-full sm:w-1/3 md:w-1.5/4 px-2">
            <img src="./pic.jpg" />
            <br />
            <AccordionItem
              header="Description"
              rounderCornerClass="rounded-t-xl"
              isOpen={true}
            >
              <div
                id="accordion-open-body-1"
                aria-labelledby="accordion-open-heading-1"
              >
                <div className="p-5 font-light border ">
                  <p className="mb-2 dark:text-gray-400">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem header="Details" isOpen={true}>
              <ul className="p-5 max-w-md   divide-gray-200 dark:divide-gray-700 border ">
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">ProjectId</div>
                    <div className="inline-flex items-center text-base font-semibold  dark:text-white">
                      ERF121013
                    </div>
                  </div>
                </li>
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">Vintage</div>
                    <div className="inline-flex items-center text-base font-semibold  dark:text-white">
                      2022
                    </div>
                  </div>
                </li>
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">Location</div>
                    <div className="inline-flex items-center text-base font-semibold  dark:text-white">
                      New South Wales
                    </div>
                  </div>
                </li>
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">Methodology</div>
                    <div className="inline-flex items-center text-base font-semibold  dark:text-white">
                      Human-Induced Regeneration
                    </div>
                  </div>
                </li>
              </ul>
            </AccordionItem>
            <AccordionItem header="Contract" isOpen={true}>
              <ul className="p-5 max-w-md   divide-gray-200 dark:divide-gray-700 border rounded-b-xl">
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">ProjectId</div>
                    <div className="inline-flex items-center text-base font-semibold  dark:text-white">
                      ERF121013
                    </div>
                  </div>
                </li>
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">Vintage</div>
                    <div className="inline-flex items-center text-base font-semibold  dark:text-white">
                      2022
                    </div>
                  </div>
                </li>
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">Location</div>
                    <div className="inline-flex items-center text-base font-semibold  dark:text-white">
                      New South Wales
                    </div>
                  </div>
                </li>
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">Methodology</div>
                    <div className="inline-flex items-center text-base font-semibold  dark:text-white">
                      Human-Induced Regeneration
                    </div>
                  </div>
                </li>
              </ul>
            </AccordionItem>
          </aside>
          <main role="main" className="w-full sm:w-2/3 md:w-2.5/4 pt-1 px-2">
            <ul className="w-full p-5 divide-gray-200 dark:divide-gray-700  ">
              <li className="pb-3 sm:pb-4">
                <div className="flex space-x-4 align-top items-start ">
                  <div className="flex-1 min-w-0">
                    <button>Carbon Credit</button>
                    <h2 className="font-bold">
                      Darling River Eco Corridor #99
                    </h2>
                    <div>Project ID: ERF121013</div>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold  dark:text-white ">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m17 16 4-4m0 0-4-4m4 4H7m6 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1"
                      />
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                      />
                    </svg>
                  </div>
                </div>
              </li>{' '}
            </ul>
            <br />
            <RoundedDiv>
              <div>
                <table className="w-full text-sm text-left  dark:text-gray-400  ">
                  <thead className=" w-full p-3 font-medium text-left  border border-b-0 border-gray-200   focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-800">
                    <tr>
                      <td scope="col" className="py-3 px-6">
                        <div>Quantity (Tonnes CO2)</div>
                        <div>11.00</div>
                      </td>
                      <td scope="col" className="py-3 px-6">
                        <div>Unit Price (A$DC / Tonne CO2)</div>
                        <div>45.00</div>
                      </td>

                      <td>&nbsp;</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td
                        scope="row"
                        className="py-4 px-6 font-medium  whitespace-nowrap "
                      >
                        Total
                      </td>
                      <td className="py-4 px-6">
                        Unit Price (A$DC / Tonne CO2)
                      </td>
                      <td className="py-4 px-6">
                        <button>buy</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </RoundedDiv>
            <br />
            <RoundedDiv>
              <AccordionItem
                header="Additional Listings"
                isOpen={true}
                className="rounded-t-xl"
              >
                <div>
                  <table className="w-full text-sm text-left  dark:text-gray-400  ">
                    <thead className="text-xs  uppercase dark:text-gray-400">
                      <tr>
                        <td scope="col" className="py-3 px-6">
                          Quantity (Tonnes CO2)
                        </td>
                        <td scope="col" className="py-3 px-6">
                          Unit Price (A$DC)
                        </td>
                        <td scope="col" className="py-3 px-6">
                          Total Price (A$DC)
                        </td>
                        <td>&nbsp;</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td
                          scope="row"
                          className="py-4 px-6 font-medium  whitespace-nowrap "
                        >
                          5.0
                        </td>
                        <td className="py-4 px-6">45.00</td>
                        <td className="py-4 px-6">225.00</td>
                        <td className="py-4 px-6">
                          <button>View</button>
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td
                          scope="row"
                          className="py-4 px-6 font-medium  whitespace-nowrap "
                        >
                          20.0
                        </td>
                        <td className="py-4 px-6">45.00</td>
                        <td className="py-4 px-6">900.00</td>
                        <td className="py-4 px-6">
                          <button>View</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </AccordionItem>
            </RoundedDiv>
            <br />

            <RoundedDiv>
              <AccordionItem header="Item Activity">
                <p className="p-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </AccordionItem>
            </RoundedDiv>
            <br />

            <RoundedDiv>
              <AccordionItem header="More From This Collection">
                <p className="p-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </AccordionItem>
            </RoundedDiv>
          </main>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
