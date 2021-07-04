import React, {Suspense} from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
// import QuoteAll from "./screens/QuoteAll";
// import QuoteAdd from "./screens/QuotesAdd";
// import QuoteDetail from "./screens/QuoteDetail";
// import NotFound from "./screens/NotFound";
import Layout from "./components/layout/Layout";
import LoadingSpinner from './components/ui/LoadingSpinner';

const NewQuote = React.lazy(() => import('./screens/NewQuote'));
const QuoteDetail = React.lazy(() => import('./screens/QuoteDetail'));
const NotFound = React.lazy(() => import('./screens/NotFound'));
const AllQuotes = React.lazy(() => import('./screens/AllQuotes'));

function App() {
  return (
    <Layout>
      <Suspense fallback={
        <div className='centered'>
<LoadingSpinner />
        </div>
      }>
      <Switch>
        <Route path="/" exact component={AllQuotes}>
          <Redirect to='/quotes'/>
        </Route>
        <Route path="/quotes" exact component={AllQuotes} />
        <Route path="/new-quote" component={NewQuote} />
        <Route path="/quotes/:quoteID" component={QuoteDetail} />
        <Route path="*" component={NotFound} />
      </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
