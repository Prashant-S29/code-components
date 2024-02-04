"use client";

import { sendMail } from "@/utils/sendMail";
import React, { useState } from "react";

const SUGGESTION_FORM = () => {
  const [successMessage, setSuccessMessage] = useState({
    display: false,
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    display: false,
    message: "",
  });
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [componentType, setComponentType] = useState("");
  const [liveExampleLink, setLiveExampleLink] = useState("");
  const [description, setDescription] = useState("");


  const handleInputChangeOne = (e: any) => {
    setComponentType(e.target.value);
  };
  const handleInputChangeTwo = (e: any) => {
    setLiveExampleLink(e.target.value);
  };
  const handleInputChangeThree = (e: any) => {
    setDescription(e.target.value);
  };

  const clearFormData = () => {
    setComponentType("");
    setLiveExampleLink("");
    setDescription("");
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    if (componentType && description != "") {
      clearFormData();
      try {
        const mailResponse = await sendMail({
          componentType: componentType,
          liveExampleLink: liveExampleLink,
          description: description,
        });
        if (mailResponse.status === "success") {
          setTimeout(() => {
            setIsFormSubmitting(false);
          }, 1000);
          setTimeout(() => {
            setSuccessMessage({
              display: true,
              message: "Suggestion submitted successfully.",
            });
          }, 1000);
          setTimeout(() => {
            setSuccessMessage({
              display: false,
              message: "",
            });
          }, 3500);
        } else {
          setTimeout(() => {
            setIsFormSubmitting(false);
          }, 1000);
          setTimeout(() => {
            setErrorMessage({
              display: true,
              message: "Error in submission. Please try again.",
            });
          }, 1000);
          setTimeout(() => {
            setErrorMessage({
              display: false,
              message: "",
            });
          }, 3500);
        }
      } catch (error) {
        setTimeout(() => {
          setIsFormSubmitting(false);
        }, 1000);
        setTimeout(() => {
          setErrorMessage({
            display: true,
            message: "Unexpected Error.",
          });
        }, 1000);
        setTimeout(() => {
          setErrorMessage({
            display: false,
            message: "",
          });
        }, 3500);
      }
      return;
    }
    setTimeout(() => {
      setIsFormSubmitting(false);
    }, 1000);
    setTimeout(() => {
      setErrorMessage({
        display: true,
        message: "fields marked with * are compulsory",
      });
    }, 1000);
    setTimeout(() => {
      setErrorMessage({
        display: false,
        message: "",
      });
    }, 3500);
  };

  return (
    <>
      <div className="w-full ">
        <form onSubmit={handleFormSubmit}>
          <div className="w-full sm:w-[350px]">
            <div>
              <span className="text-[13px] font-semibold sm:text-[14px]">
                What type of component<span className="text-red-400">*</span>
              </span>
            </div>
            <div>
              <input
                type="text"
                tabIndex={-1}
                disabled={isFormSubmitting}
                value={componentType}
                onChange={handleInputChangeOne}
                placeholder="eg: Hero Section"
                className={` w-full overflow-y-scroll rounded-[7px] border border-gray-300 bg-white px-3  py-2 text-[14px] outline-none`}
              />
            </div>
          </div>
          <div className="mt-1 w-full sm:w-[350px]">
            <div>
              <span className="text-[13px] font-semibold sm:text-[14px]">
                Link to an example
              </span>
            </div>
            <div>
              <input
                type="text"
                tabIndex={-1}
                disabled={isFormSubmitting}
                value={liveExampleLink}
                onChange={handleInputChangeTwo}
                placeholder="eg: example-website.com/cool-animation"
                className={` w-full overflow-y-scroll rounded-[7px] border border-gray-300 bg-white px-3 py-2  text-[14px] outline-none`}
              />
            </div>
          </div>
          <div className="mt-1 w-full sm:w-[350px]">
            <div>
              <span className="text-[13px] font-semibold sm:text-[14px]">
                Explain the animation/interaction
                <span className="text-red-400">*</span>
              </span>
            </div>
            <div>
              <textarea
                tabIndex={-1}
                disabled={isFormSubmitting}
                value={description}
                onChange={handleInputChangeThree}
                placeholder="Try your best to explain"
                className={` h-[100px] w-full overflow-y-scroll rounded-[7px] border border-gray-300 bg-white px-3  py-2 text-[14px] outline-none`}
              />
            </div>
          </div>
          <div className="mt-1 w-full sm:w-[350px]">
            <button
              type="submit"
              disabled={isFormSubmitting}
              className={`w-full rounded-[5px] ${isFormSubmitting ? "bg-gray-400" : "bg-black"} px-4 py-2 text-[12px]
               font-medium text-white `}
            >
              {isFormSubmitting ? "submitting..." : "Submit your Suggestion"}
            </button>
          </div>
        </form>
      </div>

      {errorMessage.display && (
        <div>
          <span className="text-[12px] font-semibold text-red-500">
            {errorMessage.message}
          </span>
        </div>
      )}
      {successMessage.display && (
        <div>
          <span className="text-[12px] font-semibold text-green-500">
            {successMessage.message}
          </span>
        </div>
      )}
    </>
  );
};

export default SUGGESTION_FORM;
