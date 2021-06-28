import { Redirect, Route, Switch } from "react-router-dom";
import QuoteAll from "./screens/QuoteAll";
import QuoteAdd from "./screens/QuotesAdd";
import QuoteDetail from "./screens/QuoteDetail";
import NotFound from "./screens/NotFound";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="quotes" />
        </Route>
        <Route path="/quotes" exact>
          <QuoteAll />
        </Route>
        <Route path="/new-quote">
          <QuoteAdd />
        </Route>
        <Route path="/quotes/:quoteID">
          <QuoteDetail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
