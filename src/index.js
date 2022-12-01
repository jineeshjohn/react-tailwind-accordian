import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { accordionContent } from './data';
import AccordionItem from './AccordianItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div className="border border-grey-600 m-5 p-5  ">
        <div className="container p-2 mx-auto">
          <div className="flex flex-row flex-wrap py-4">
            <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
              <AccordionItem
                header="Description"
                classNameName="rounded-t-xl"
                isOpen={true}
              >
                <div
                  id="accordion-open-body-1"
                  aria-labelledby="accordion-open-heading-1"
                >
                  <div className="p-5 font-light border ">
                    <p className="mb-2  dark:text-gray-400">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
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
            <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
              <AccordionItem header="Additional Listings" isOpen={true}>
                <table className="w-full text-sm text-left  dark:text-gray-400">
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
                      <td className="py-4 px-6">b</td>
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
                      <td className="py-4 px-6">b</td>
                    </tr>
                  </tbody>
                </table>
              </AccordionItem>
              <br />

              <AccordionItem header="Item Activity">
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
              </AccordionItem>
              <br />

              <AccordionItem
                header="More From This Collection"
                classNameName=""
              >
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
              </AccordionItem>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
