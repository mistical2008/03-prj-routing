import '../styles/globals.css'
import LayoutWrapper from '../components/layout/layout';

function MyApp({Component, pageProps}) {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  )
}

export default MyApp
