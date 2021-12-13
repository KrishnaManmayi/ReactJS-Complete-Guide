import React from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "./../components/comments/Comments";
import HighlightedQuote from "./../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Manmayi", text: "React is amazing!" },
  { id: "q2", author: "Anju", text: "React is fun!" },
];

function QuoteDetail() {
  const params = useParams();
  const match = useRouteMatch();

  console.log(match);

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Check comments
          </Link>
        </div>
      </Route>
    </>
  );
}

export default QuoteDetail;
