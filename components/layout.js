import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export const siteTitle = 'Josh Pigford';

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="title" content={siteTitle} />
        <meta name="description" content={siteTitle} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteTitle} />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={siteTitle} />
        <meta property="twitter:description" content={siteTitle} />
        <meta property="twitter:image" content="" />
      </Head>
      <header>

      </header>
      <main>{children}</main>
    </div>
  );
}