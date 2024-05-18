import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {Federated} from '@callstack/repack/client';
const Home = React.lazy(() => Federated.importModule('app1', './home'));
const App = () => {
  return (
    <SafeAreaView>
      <Text>Host App new</Text>
      <React.Suspense fallback={<Text>Loading app1...</Text>}>
        <Home />
      </React.Suspense>
    </SafeAreaView>
  );
};

export default App;
