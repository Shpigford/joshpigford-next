import '../styles/globals.css'
import { Space_Mono } from '@next/font/google'

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-space-mono',
})

function App({ Component, pageProps }) {
  return (
    <main className={`${spaceMono.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}

export default App
