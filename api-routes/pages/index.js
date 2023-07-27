import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Fragment, useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const [feedbackItems, setFeedbackItems] = useState([]);

  const submitFormHandler = (event) => {
    console.log("clicked");
    event.preventDefault();
    const email = emailInputRef.current.value;
    const feedback = feedbackInputRef.current.value;
    const reqBody = { email: email, text: feedback };
    fetch(`/api/feedback`, {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleGetFeedback = () => {
    fetch(`/api/feedback`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => setFeedbackItems(data.feedback));
  };
  return (
    <Fragment>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback </label>
          <textarea id="feedback" rows={5} ref={feedbackInputRef}></textarea>
        </div>
        <button type="submit">Send Feedback</button>
      </form>
      <hr />
      <button onClick={handleGetFeedback}>Get Feedback</button>

      {[...feedbackItems].map((item) => (
        <p key={item.id}>{item.email}</p>
      ))}
    </Fragment>
  );
}
