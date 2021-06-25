import { Route } from "react-router-dom";
import QuoteAll from "./screens/QuoteAll";
import QuoteAdd from "./screens/QuotesAdd";
import QuoteDetail from "./screens/QuoteDetail";

function App() {
  return (
    <div>
      <Route path="/quote-all" exact>
        <QuoteAll />
      </Route>
      <Route path="/quote-add">
        <QuoteAdd />
      </Route>
      <Route path="/quote-all:quoteID">
        <QuoteDetail />
      </Route>
    </div>
  );
}

export default App;
