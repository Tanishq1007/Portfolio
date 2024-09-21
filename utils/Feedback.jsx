import React, { Fragment, useContext, useState } from "react";
import axios from "axios";

import { PortfolioContext } from "@/contextApi/PortfolioContext";

const Feedback = () => {
  const [formData, setFormData] = useState({});
  const [submit, setSubmit] = useState(false);
  const { showModal, setShowModal } = useContext(PortfolioContext);

  const collectData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitFeedback = async (e) => {
    e.preventDefault();

    const { name, email, rating } = formData;

    // Validate required fields: name, email, and rating
    if (!name || !email || !rating) {
      alert("Name, email, and rating are required fields.");
      return;
    }

    setSubmit(true);
    try {
      // Axios POST request to /api/feedback/new
      const { data } = await axios.post("/api/feedback/new", formData, {
        headers: {
          'Content-Type': 'application/json' // Ensure the correct content type
        }
      });

      setFormData({});
      setSubmit(false);
      setShowModal(false);

      if (data.success) {
        alert(data.message);
      }
    } catch (error) {
      setSubmit(false);
      console.error(error);
      alert(
        error.response?.data?.message || error.message || "An error occurred."
      );
    }
  };

  return (
    <Fragment>
      <div
        className={`fixed z-30 top-0 left-0 h-screen w-screen bg-[#80808082] flex justify-center md:items-center ${
          showModal ? "" : "hidden"
        }`}
      >
        <form
          className="dark:bg-black bg-[#ccf2f6] z-40 p-4 rounded sm:w-full sm:h-screen md:h-fit md:w-[500px] flex flex-col gap-4"
          onSubmit={submitFeedback}
        >
          <h3 className="text-center text-2xl font-bold dark:text-[#07d0e5] text-[#c72c6c]">
            Feedback
          </h3>
          <p>As a developer, you understand the importance of feedback.</p>
          <input
            className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded"
            id="name"
            name="name"
            onChange={collectData}
            placeholder="*Your Name"
            value={formData.name || ""}
            required
          />
          <input
            className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded"
            id="email"
            name="email"
            onChange={collectData}
            placeholder="*Your Email Address"
            value={formData.email || ""}
            required
            type="email"
          />
          <input
            className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded"
            id="rating"
            name="rating"
            onChange={collectData}
            placeholder="*Rating out of 5"
            type="number"
            value={formData.rating || ""}
            required
            min="1"
            max="5"
          />
          <input
            className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded"
            id="good"
            name="good"
            onChange={collectData}
            placeholder="What is good about this Project?"
            value={formData.good || ""}
          />
          <input
            className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded"
            id="bad"
            name="bad"
            onChange={collectData}
            placeholder="What is bad about this Project?"
            value={formData.bad || ""}
          />
          <textarea
            className="dark:bg-black border dark:border-[#07d0e5] border-[#c72c6c] p-2 rounded"
            id="suggestion"
            name="suggestion"
            onChange={collectData}
            placeholder="What is Your Suggestion?"
            rows="3"
            value={formData.suggestion || ""}
          />
          <div className="flex justify-between">
            <button
              className="font-bold px-4 text-white dark:bg-[#0ab0c2] disabled:cursor-default p-2 rounded dark:hover:bg-[#078795] bg-[#f91071] hover:bg-[#c72c6c]"
              onClick={() => {
                setShowModal(false);
                setFormData({});
              }}
              type="button"
            >
              Cancel
            </button>
            <button
              className="font-bold px-4 text-white dark:bg-[#0ab0c2] disabled:cursor-default p-2 rounded dark:hover:bg-[#078795] bg-[#f91071] hover:bg-[#c72c6c]"
              disabled={submit}
              type="submit"
            >
              {submit ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Feedback;
