import React from "react";
import PageNumber from "./PageNumber";

export default function Pagination() {
  return (
    <div className="flex gap-2 mx-auto justify-center  p-5">
      <PageNumber number="<" />
      <PageNumber number="1" />
      <PageNumber number="2" />
      <PageNumber number="3" />
      <PageNumber number="4" />
      <PageNumber number="5" />
      <PageNumber number=">" />

    </div>
  );
}
