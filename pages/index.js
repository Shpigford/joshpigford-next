/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='prose max-w-none'>
        <h2 className="mb-2">What I'm working on</h2>
        <p>In 2021 I founded <a href="https://maybe.co">Maybe</a> where we're helping folks take control of their financial future. I also run <a href="https://lasertweets.co">Laser Tweets</a> because we all need something ridiculous to do.</p>

        <hr />

        <h2 className="mb-2">Interviews</h2>
        <p>Over the years I've <a href="/interviews">done some 40+ interviews</a>, mostly about business.</p>

        <hr />

        <h2 className="mb-2">Past projects</h2>
        <p>I've been a professional maker of things for 15+ years. <a href="/projects">See a thorough list of everything I've ever made &rarr;</a></p>

        <hr />

        <h2 className="mb-2">Music</h2>
        <p>I listen to an absurd amount of music. Basically I've always got <em>something</em> playing. <a href="/music">Check out what I'm listening to</a> along with some curated lists.</p>

        <hr />

        <h2 className="mb-2">Podcasts</h2>
        <p>I listen to way too many podcasts. <a href="/podcasts">See what I'm listening to</a> so you can also listen to way too many podcasts.</p>

        <hr />

        <h2 className="mb-2">Get in touch</h2>
        <p>I try to stay pretty accessible, but it may take a week or two to respond. Best ways to get in touch are on Twitter at <a href="http://twitter.com/Shpigford" rel="me">@Shpigford</a> or via email at <a href="mailto:josh@joshpigford.com" rel="me">josh@joshpigford.com</a>.</p>
      </section>
    </Layout>
  );
}