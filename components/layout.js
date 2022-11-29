import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export const siteTitle = 'Josh Pigford';

export default function Layout({ children, home }) {
  return (
    <>
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
      <header class="flex mb-10">
        <div class="flex-none mr-8">
          <Image
            priority
            src="/images/joshpigford-avatar.png"
            height={144}
            width={144}
            alt="Josh Pigford"
            className="w-36 h-36 rounded-full"
          />
        </div>
        <div class="flex-auto mt-3">
          <h1 class="mb-3 text-3xl font-black">{siteTitle}</h1>
          <p class="mb-4">Maker. Dabbler. I can't stop starting things. Bearded.</p>
        </div>
      </header>
      {children}
    </>
  );
}