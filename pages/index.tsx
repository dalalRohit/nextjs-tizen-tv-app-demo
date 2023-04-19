import Link from "next/link";
import React from "react";

const Index = () => {
  return (
    <div>
      Index
      <br />
      <Link href="/about">About</Link>
      <h1>this is the next.js app running no Samsung Tizen TV</h1>
    </div>
  );
};

export default Index;
