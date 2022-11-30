/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Layout(props: { title?: any; desc?: any; children?: any; }) {

  const pageTitle = props.title ? `${props.title} - Josh Pigford` : 'Josh Pigford';
  const pageDesc = props.desc ? props.desc : 'Josh Pigford: Maker. Dabbler. Founder and CEO of Maybe.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDesc} />
        <meta property="twitter:image" content="" />
      </Head>
      <header className="flex mb-10">
        <div className="flex-none mr-8">
          <Link href="/">
            <Image
              priority
              src="/images/joshpigford-avatar.png"
              height={144}
              width={144}
              alt="Josh Pigford"
              className="w-36 h-36 rounded-full"
            />
          </Link>
        </div>
        <div className="flex-auto mt-3">
          <h1 className="mb-3 text-3xl font-black inline"><Link href="/" className="text-black">Josh Pigford</Link></h1>
          <div className='inline ml-4 relative -top-1.5'>
            <a href="https://twitter.com/Shpigford?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-size="large" data-dnt="true" data-show-count="true">Follow @Shpigford</a>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </div>
          <p className="mb-4">Maker. Dabbler. I can't stop starting things. Bearded.</p>
          <p className='font-bold'>
            &rarr; <Link href="/gear">Gear</Link>, <Link href="/interviews">Interviews</Link>, <Link href="/investments">Investments</Link>, <Link href="/now">Now</Link>, <Link href="/podcasts">Podcasts</Link>, <Link href="/projects">Projects</Link>, <Link href="/reading">Reading</Link>
          </p>
        </div>
      </header>

      {props.children}

      <footer className="mt-20 text-sm text-gray-400">
        This is a footer and I have no idea what to put here. <a href="https://github.com/Shpigford/joshpigford-next /commits/main">Changelog</a>.
      </footer>
    </>
  );
}