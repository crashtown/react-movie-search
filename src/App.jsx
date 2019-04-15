import React, { Fragment } from 'react';
import MoviesContainer from './Components/MoviesContainer';
import MovieView from './Components/MovieView';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from "react-router";
import './app.scss'; 


const App = () => {
    return (
      <Fragment>
        <Switch>
          <Route 
            path="/:id" 
            exact
            render= {({match, history, location}) => <MovieView match={match} history={history} location={location} />} 
          />
          <Route 
            path="/" 
            exact 
            render= {() => <MoviesContainer />} 
          />
          <MoviesContainer />
        </Switch>
      </Fragment>
    );
}

export default withRouter(App);
