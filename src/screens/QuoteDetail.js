import { useParams } from "react-router-dom";

const QuoteAll = () => {
  const params = useParams();

  return (
    <section>
      <h1>All Quotes</h1> <p>{params.QuoteID}</p>
    </section>
  );
};

export default QuoteAll;
