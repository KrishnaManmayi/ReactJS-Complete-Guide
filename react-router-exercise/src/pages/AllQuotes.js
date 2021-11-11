import React from "react";
import QuoteList from "./../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Manmayi", text: "React is amazing!" },
  { id: "q2", author: "Anju", text: "React is fun!" },
];

function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}

export default AllQuotes;
