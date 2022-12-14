import React, { useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import Maprow from "../components/Motorcyle Page Components/Maprow";
export default function Form() {
  const [country, setCountry] = useState(1);
  const [state, setState] = useState(1);
  const [district, setDistrict] = useState(1);
  return (
    <>
      <div className="bg-[#212121] h-full flex flex-col items-center bg-[url('https://www.royalenfield.com/content/dam/royal-enfield/india/support/become-a-dealer/desktop/become_a_dealer.jpg')] bg-cover bg-fixed">
        <div className="container bg-white w-[90%] md:w-[750px] lg:w-[875px] px-[15px] py-6 mt-48 pb-16 mb-12">
          <p className="font-Montserrat text-[14px] font-[500] text-[#212529] text-left">
            At Royal Enfield, we endeavour to partner our patrons and customers
            in their journeys of exploration. Our main objective is to provide
            an immersive brand and retail experience in addition to ensuring a
            superior product experience. Our dealers, distributors and network
            teams are our extended partners in this task. <br />
            <br />
            Royal Enfield employs a comprehensive and professional process for
            Dealership allotment. Dealer selection is done based on a variety of
            criteria including a personal meeting with the applicant. It is only
            post completion of the evaluation and selection process, that other
            formalities are considered. <br /> <br />
            Royal Enfield does not accept or demand money / deposits from
            prospective partners prior to processing the application or
            candidature of the Dealership <br /> <br />
            If you receive any communication offering allotment of Royal Enfield
            Dealership against payment / transfer of money and / or otherwise,
            we advise you to seek information / clarifications by writing to us
            at{" "}
            <b className="text-[#ff0000] font-semibold">
              support@royalenfield.com
            </b>{" "}
            or by contacting us on our customer care toll-free number{" "}
            <b className="text-[#ff0000] font-semibold">1800 210 0007</b>.{" "}
            <br /> <br />
            <b className="text-[#212121] font-Montserrat font-bold">
              *This is the ONLY official website and central number for
              dealership enquiries for Royal Enfield and we do not have any
              other partner website(s).
            </b>
          </p>
          <div className="w-full px-3">
            <div className="flex flex-row items-center justify-between flex-wrap my-20">
              <div className="w-full my-1 border border-[rgb(33,33,33)] h-[45px] md:w-[200px] lg:w-[250px] ">
                <Select
                  value={country}
                  className="grid rounded-none outline-none border-none focus:outline-none hover:outline-none focus:border-none hover:border-none hover:border-t-0"
                >
                  <Option value={1}>India</Option>
                  <Option
                    value={2}
                    onClick={() => {
                      setCountry(2);
                    }}
                  >
                    China
                  </Option>
                  <Option
                    value={3}
                    onChange={() => {
                      setCountry(3);
                    }}
                  >
                    Japan
                  </Option>
                  <Option
                    value={4}
                    onChange={() => {
                      setCountry(4);
                    }}
                  >
                    Bahamas
                  </Option>
                  <Option
                    value={5}
                    onChange={() => {
                      setCountry(5);
                    }}
                  >
                    Finland
                  </Option>
                </Select>
              </div>
              <div className="w-full my-1 border border-[rgb(33,33,33)] h-[45px] md:w-[200px] lg:w-[250px] ">
                <Select
                  value={state}
                  className="grid rounded-none outline-none border-none focus:outline-none hover:outline-none focus:border-none hover:border-none hover:border-t-0"
                >
                  <Option value={1} disabled>
                    Select State
                  </Option>
                  <Option
                    value={2}
                    onClick={() => {
                      setState(2);
                    }}
                  >
                    J&K
                  </Option>
                  <Option
                    value={3}
                    onClick={() => {
                      setState(3);
                    }}
                  >
                    Himachal
                  </Option>
                  <Option
                    value={4}
                    onChange={() => {
                      setState(4);
                    }}
                  >
                    Punjab
                  </Option>
                  <Option
                    value={5}
                    onChange={() => {
                      setState(5);
                    }}
                  >
                    Haryana
                  </Option>
                  <Option
                    value={5}
                    onChange={() => {
                      setState(5);
                    }}
                  >
                    Delhi
                  </Option>
                </Select>
              </div>
              <div className="w-full my-1 border border-[rgb(33,33,33)] h-[45px] md:w-[200px] lg:w-[250px] ">
                <Select
                  value={district}
                  className="grid rounded-none outline-none border-none focus:outline-none hover:outline-none focus:border-none hover:border-none hover:border-t-0"
                >
                  <Option value={1} disabled>
                    Select District
                  </Option>
                  <Option
                    value={2}
                    onClick={() => {
                      setState(2);
                    }}
                  >
                    A
                  </Option>
                  <Option
                    value={3}
                    onClick={() => {
                      setState(3);
                    }}
                  >
                    B
                  </Option>
                  <Option
                    value={4}
                    onChange={() => {
                      setState(4);
                    }}
                  >
                    C
                  </Option>
                  <Option
                    value={5}
                    onChange={() => {
                      setState(5);
                    }}
                  >
                    D
                  </Option>
                  <Option
                    value={5}
                    onChange={() => {
                      setState(5);
                    }}
                  >
                    E
                  </Option>
                </Select>
              </div>
            </div>
            <p className="font-Montserrat text-[16px] text-[#212121] font-bold text-left">
              Become a Dealer
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-between flex-wrap lg:my-4">
              <input
                className="w-full text-[#212121] font-Montserrat text-[14px] font-semibold my-1 border border-[rgb(33,33,33)] h-[45px] md:w-[48%] px-3 mx-1"
                placeholder="Name*"
              ></input>
              <input
                className="w-full text-[#212121] font-Montserrat text-[14px] font-semibold my-1 border border-[rgb(33,33,33)] h-[45px] md:w-[48%] px-3 mx-1"
                placeholder="Interested city for Dealership*"
              ></input>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between flex-wrap lg:my-4">
              <input
                className="w-full text-[#212121] font-Montserrat text-[14px] font-semibold my-1 border border-[rgb(33,33,33)] h-[45px] md:w-[48%] px-3 mx-1"
                placeholder="Email Id*"
              ></input>
              <input
                className="w-full text-[#212121] font-Montserrat text-[14px] font-semibold my-1 border border-[rgb(33,33,33)] h-[45px] md:w-[48%] px-3 mx-1"
                placeholder="Pincode*"
              ></input>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between flex-wrap lg:my-4">
              <input
                className="w-full text-[#212121] font-Montserrat text-[14px] font-semibold my-1 border border-[rgb(33,33,33)] h-[45px] md:w-[48%] px-3 mx-1"
                placeholder="Mobile No.*"
              ></input>
              <div className="flex flex-col w-full h-[45px] md:w-[48%] lg:mx-1 items-start justify-start">
                <p className="font-Montserrat text-[14px] text-[#212121] font-semibold text-left">
                  Own a Royal Enfield
                </p>
                <div className="flex flex-row items-center justify-start my-1">
                  <input
                    id="red-radio"
                    type="radio"
                    onChange={(e) => {
                      console.log(e);
                    }}
                    name="colored-radio"
                    class="w-4 h-4 mx-1 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="red-radio"
                    class="ml-2 text-sm font-Montserrat font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                  <input
                    id="red-radio"
                    type="radio"
                    value=""
                    name="colored-radio"
                    class="w-4 h-4 ml-7 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="red-radio"
                    class=" ml-2 text-sm font-Montserrat font-medium text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between flex-wrap lg:my-4">
              <input
                className="w-full text-[#212121] font-Montserrat text-[14px] font-semibold my-1 border border-[rgb(33,33,33)] h-[45px] md:w-[48%] px-3 mx-1"
                placeholder="Age*"
              ></input>
              <input
                className="w-full text-[#212121] font-Montserrat text-[14px] font-semibold my-1 border border-[rgb(33,33,33)] h-[45px] md:w-[48%] px-3 mx-1"
                placeholder="Education Qualification*"
              ></input>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between flex-wrap lg:my-4">
              <input
                className="w-full text-[#212121] font-Montserrat text-[14px] font-semibold my-1 border border-[rgb(33,33,33)] h-[45px] md:w-[48%] px-3 mx-1"
                placeholder="Company Name*"
              ></input>
              <div className="w-full text-[#212121] font-Montserrat text-[14px] font-semibold my-1 border border-[rgb(33,33,33)] h-[45px] md:w-[48%] px-3 mx-1"></div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between flex-wrap lg:my-4">
              <textarea
                id="message"
                rows="4"
                className="focus:ring-[#fff0] focus:border-[#fff0] block p-2.5 w-full text-[#212121] font-Montserrat text-[14px] font-semibold my-1 border border-[rgb(33,33,33)] focus:border focus:border-[rgb(33,33,33)] px-3 mx-1"
                placeholder="Description*"
              ></textarea>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between flex-wrap lg:my-4">
              <textarea
                id="message"
                rows="4"
                className="focus:ring-[#fff0] focus:border-[#fff0] block p-2.5 w-full text-[#212121] font-Montserrat text-[14px] font-semibold my-1 border border-[rgb(33,33,33)] focus:border focus:border-[rgb(33,33,33)] px-3 mx-1"
                placeholder="Address*"
              ></textarea>
            </div>
            <p className="font-Montserrat text-[14px] font-[500] text-[#212529] text-left mt-7">
              Disclaimer: By signing this form/checking this box, you
              acknowledge and agree that we may use the information you share
              with us, to communicate with you through e-mails, text messages,
              WhatsApp and calls, in order to provide our product or service
              related information and/or for promotional and marketing purposes.
              All information provided will be secured and processed as per our{" "}
              <b>privacy policy</b>.
            </p>
            <div class="flex items-center mt-12">
              <input
                checked
                id="red-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2"
              />
              <label
                for="red-checkbox"
                class="ml-2 text-sm font-Montserrat font-medium text-gray-900"
              >
                I accept the <b>terms and conditions</b> as well as{" "}
                <b>privacy policy</b>.
              </label>
            </div>
            <button
              type="button"
              class="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium font-Montserrat text-sm px-5 py-2.5 text-center inline-flex items-center mt-12 mb-2"
            >
              Submit &gt;
            </button>
          </div>
        </div>
        <Maprow />
      </div>
    </>
  );
}
