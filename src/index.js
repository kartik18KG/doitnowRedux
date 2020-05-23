import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./Preloader/Preloader";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider, useSelector } from "react-redux";
import thunk from "redux-thunk";
import {
  reduxFirestore,
  createFirestoreInstance,
  getFirestore
} from "redux-firestore";

import {
  ReactReduxFirebaseProvider,
  getFirebase,
  isLoaded
} from "react-redux-firebase";

import firebase, { fbConfig } from "./config/fbConfig";

const store = createStore(
  rootReducer,

  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),

    reduxFirestore(firebase, fbConfig)
  )
);

const rrfConfig = {
  userProfile: "Users",
  useFirestoreForProfile: true
};

const rrfProps = {
  firebase,
  config: Object.assign({}, fbConfig, rrfConfig),
  dispatch: store.dispatch,
  createFirestoreInstance
};

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  console.log(auth);
  if (!isLoaded(auth))
    return (
      <div className="container">
        <Preloader />
      </div>
    );
  console.log(children);
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();