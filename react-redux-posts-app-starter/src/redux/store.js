import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import { postsReducer } from "./reducer/postsReducer";

//create store
// const store = createStore(notesReducer, composeWithDevTools());

//configure store

const configureStore = () => {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(
    postsReducer,
    composeWithDevTools(middlewareEnhancer)
  );
  return store;
};

const store = configureStore();
//dispatch action
store.dispatch({
  type: "ADD_NOTE",
  payload: { title: "test", content: "test" },
});

export default configureStore;
