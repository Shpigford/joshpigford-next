/* eslint-disable react/no-unescaped-entities */
import Layout from '../components/layout'
import Head from 'next/head';

export default function Investments() {
  return (
    <Layout title="Now" desc="I've been doing tiny investments in startups since 2021, primarily to just get my feet wet and to diversify my high-level I've always got a number of things I'm dabbling in, but my primary focus is getting Maybe off the ground.ersonal finance holdings. Here are the investments I've made.">
      <div className="prose max-w-none">
        <h1>Now</h1>
        <p>I've always got a number of things I'm dabbling in, but my primary focus is getting <a href="https://maybe.co">Maybe</a> off the ground.</p>
        <h2>Active projects</h2>

        <div>
          <h3><a href="https://maybe.co">Maybe</a></h3>
          <p>In 2021 I founded Maybe to help folks take control of their financial future with modern financial planning and wealth management tools.</p>
          <h3><a href="https://lasertweets.co">Laser Tweets</a></h3>
          <p>I got a <a href="https://glowforge.us/JTTLXZSA">Glowforge</a> and started brainstorming fun things to do with it. You send in your favorite tweets, and I laser etch them on wood...because of course you need it.</p>
        </div>
      </div>
    </Layout>
  )
}