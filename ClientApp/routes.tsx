import * as React from 'react';
import { Router, Route, HistoryBase } from 'react-router';
import { Layout, Home, FetchData, Counter, Schedule, GameRatings } from 'components';

export default <Route component={ Layout }>
	               <Route path='/' components={{ body: Home }}/>
	               <Route path='/counter' components={{ body: Counter }}/>
	               <Route path='/fetchdata' components={{ body: FetchData }}>
		               <Route path='(:startDateIndex)'/> {
/* Optional route segment that does not affect NavMenu highlighting */
 }
	               </Route>
	               <Route path='/schedule' components={{ body: Schedule }}/>
								<Route path='/game/:id' components={{ body: GameRatings }}/>
               </Route>;

// Enable Hot Module Replacement (HMR)
if (module.hot) {
	module.hot.accept();
}