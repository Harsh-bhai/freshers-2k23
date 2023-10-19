import Footer from '@/components/footer'
import MatrixAnimation from '@/components/matrixAnimation'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  return <>
  <Navbar/>
  <MatrixAnimation/>
  <Component {...pageProps} />
  <Footer/>
  </>
}
