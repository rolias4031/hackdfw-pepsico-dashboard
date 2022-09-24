import '../styles/globals.css';
import Navigation from '../components/display/Navigation';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-50 h-full w-full">
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
