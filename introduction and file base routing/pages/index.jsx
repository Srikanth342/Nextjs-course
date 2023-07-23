import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
