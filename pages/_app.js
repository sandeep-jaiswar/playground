import '../styles/globals.css'
import { Layout } from './utils/layout'
import '/node_modules/@openlibrary/ui/dist/style.css';

function MyApp({ Component, pageProps }) {
  return (<Layout>
    <Component {...pageProps} />
  </Layout>)
}

export default MyApp
