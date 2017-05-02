import DefaultLayout from '../../components/Layouts/Default';
import withRedux from 'next-redux-wrapper'
import {createStore} from "redux";

import AboutReducer from './reducer';

const About = () => {
  return (<DefaultLayout>
    About page
  </DefaultLayout>)
}


function makeStore(initState) {
  console.log('aboutState', initState);
  return createStore(AboutReducer, initState)
}

export default withRedux(makeStore, null, null)(About);