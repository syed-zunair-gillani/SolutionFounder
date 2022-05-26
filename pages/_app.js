import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo';
import { store } from './app/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {



  return (
    <>
    <Provider store={store}>
      <ApolloProvider client={client}>
          <Component {...pageProps} />   
      </ApolloProvider>
    </Provider>

    </>
  );
}

export default MyApp;

