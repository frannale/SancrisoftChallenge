import { ApolloProvider } from '@apollo/client';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ThemeProvider } from '../context/themeCtx/theme.context';
import client from '../graphql/client';

const SrcLayout: React.FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ApolloProvider client={client}>
        <ThemeProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
          </Stack>
        </ThemeProvider>
      </ApolloProvider>
    </GestureHandlerRootView>
  );
};

export default SrcLayout;
