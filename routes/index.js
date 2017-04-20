import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../Components/App'
import A from '../containers/A'
import B from '../Components/B'
import C from '../Components/C'
import NoMatch from '../Components/NoMatch'
 

const routes = browserHistory => ( 
   <Router history={browserHistory}> 
      <Route path="/" component={App}>
      	<IndexRoute component={A}/>
        <Route path="A" component={A}/>
        <Route path="B" component={B}/>
        <Route path="C" component={C}/> 
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  );
 

export default routes;
