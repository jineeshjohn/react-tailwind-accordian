import React from 'react';
import { render } from 'react-dom';
import Accordian from './Accordian';
const RoundedDiv = ({ children }) => (
  <div className="border border-grey-600 rounded-xl mb-5">{children}</div>
);
const Button = (props) => (
  <button
    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    {...props}
  />
);

const ListItem = ({ itemKey, itemValue }) => (
  <li className="pb-3 sm:pb-4">
    <div className="flex items-center space-x-4">
      <div className="flex-1 min-w-0">{itemKey}</div>
      <div className="inline-flex items-center text-base font-semibold  dark:text-white">
        {itemValue}
      </div>
    </div>
  </li>
);
const App = () => (
  <div className="border border-grey-600 m-5 p-5  ">
    <div className="p-2  ">
      <div className="flex py-4">
        <aside className="w-full sm:w-1/3 md:w-1.5/4 px-2">
          <img src="./pic.jpg" className="mb-5" />
          <Accordian
            header="Description"
            topRounded={true}
            isOpen={true}
            bottomRounded={false}
          >
            <div
              id="accordion-open-body-1"
              aria-labelledby="accordion-open-heading-1"
            >
              <div className="p-5 font-light border ">
                <p>
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
              </div>
            </div>
          </Accordian>
          <Accordian header="Details" isOpen={true}>
            <ul className="p-5 border">
              <ListItem itemKey="ProjectId" itemValue="ERF121013" />
              <ListItem itemKey="Vintage" itemValue="2022" />
              <ListItem itemKey="Location" itemValue="New South Wales" />
              <ListItem
                itemKey="Methodology"
                itemValue="Human-Induced Regeneration"
              />
            </ul>
          </Accordian>
          <Accordian header="Contract" isOpen={true}>
            <ul className="p-5  border rounded-b-xl">
              <ListItem itemKey="Contract Address" itemValue="t456tgY78..98y" />
              <ListItem itemKey="Token ID" itemValue="1" />
              <ListItem itemKey="Token Standard" itemValue="ERC-1155" />
              <ListItem itemKey="Chain" itemValue="Ethereum" />
            </ul>
          </Accordian>
        </aside>
        <main role="main" className="w-full sm:w-2/3 md:w-2.5/4 pt-1 px-2">
          <ul className="w-full divide-gray-200 dark:divide-gray-700 px-4 pb-4 ">
            <li className="pb-3 sm:pb-4">
              <div className="flex space-x-4 align-top items-start ">
                <div className="flex-1">
                  <Button className="bg-gray-700 px-2 py-1 mb-5  text-white">
                    Carbon Credit
                  </Button>
                  <h2 className="font-bold mb-2">
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
                      className="py-4 px-6 font-medium  whitespace-nowrap rounded-b-xl"
                    >
                      Total
                    </td>
                    <td className="py-4 px-6 text-blue-500">A$DC 495.00</td>
                    <td className="py-4 px-6 rounded-b-xl">
                      <Button>buy</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </RoundedDiv>
          <RoundedDiv>
            <Accordian
              header="Additional Listings"
              isOpen={true}
              className="rounded-t-xl"
              topRounded={true}
              bottomRounded={true}
            >
              <div className="rounded-b-xl">
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
                        className="py-4 px-6 font-medium  whitespace-nowrap"
                      >
                        5.0
                      </td>
                      <td className="py-4 px-6">45.00</td>
                      <td className="py-4 px-6">225.00</td>
                      <td className="py-4 px-6">
                        <Button>View</Button>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td
                        scope="row"
                        className="py-4 px-6 font-medium  whitespace-nowrap rounded-b-xl"
                      >
                        20.0
                      </td>
                      <td className="py-4 px-6">45.00</td>
                      <td className="py-4 px-6">900.00</td>
                      <td className="py-4 px-6 rounded-b-xl">
                        <Button>View</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Accordian>
          </RoundedDiv>

          <RoundedDiv>
            <Accordian
              header="Item Activity"
              topRounded={true}
              bottomRounded={true}
            >
              <p className="p-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </Accordian>
          </RoundedDiv>

          <RoundedDiv>
            <Accordian
              header="More From This Collection"
              topRounded={true}
              bottomRounded={true}
            >
              <p className="p-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </Accordian>
          </RoundedDiv>
        </main>
      </div>
    </div>
  </div>
);

render(<App />, document.getElementById('root'));
