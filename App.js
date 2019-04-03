import React from 'react';
import { ApolloProvider } from 'react-apollo';
import MoviesExplorer from './components/MovieList';
import { client } from './Setup/apollo.config';
import { NavBar } from './components/NavBar';
import { Demo } from './components/Demo';
// export default () => (
//   <ApolloProvider client={client}>
//     <NavBar title="HackFlix By Hackages" />
//     <MoviesExplorer />
//   </ApolloProvider>
// );

export default () => <Demo />;
