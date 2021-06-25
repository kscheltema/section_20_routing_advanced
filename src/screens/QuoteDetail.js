import { Fragment } from "react";
import { useParams } from "react-router-dom";

const QuoteAll = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>All Quotes</h1>
      <p>{params.quoteID}</p>
    </Fragment>
  );
};

export default QuoteAll;
