import { Redirect, Route, Switch } from "react-router-dom";
import QuoteAll from "./screens/QuoteAll";
import QuoteAdd from "./screens/QuotesAdd";
import QuoteDetail from "./screens/QuoteDetail";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="quotes" />
      </Route>
      <Route path="/quotes" exact>
        <QuoteAll />
      </Route>
      <Route path="/quote-add">
        <QuoteAdd />
      </Route>
      <Route path="/quotes/:quoteID">
        <QuoteDetail />
      </Route>
    </Switch>
  );
}

export default App;
