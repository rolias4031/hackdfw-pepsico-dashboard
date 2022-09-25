import '../styles/globals.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import Navigation from '../components/display/Navigation';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-50 h-full w-full">
        <Navigation />
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
