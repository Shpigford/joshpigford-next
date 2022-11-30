/* eslint-disable react/no-unescaped-entities */
import Layout from '../components/layout'

export default function Investments() {
  return (
    <Layout title="Investments" desc="I've been doing tiny investments in startups since 2021, primarily to just get my feet wet and to diversify my high-level personal finance holdings. Here are the investments I've made.">
      <div className="prose max-w-none">
        <h1>Investments</h1>
        <p>I've been doing tiny investments in startups since 2021, primarily to just get my feet wet and to diversify my high-level personal finance holdings. Here are the investments I've made.</p>
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Year</th>
              <th>Amount</th>
              <th>About</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="odd:bg-white even:bg-gray-100">
              <td className="px-2 py-3"><a href="https://reflect.app">Reflect</a></td>
              <td>November 2022</td>
              <td>$1,000</td>
              <td>Thought organization tool</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100">
              <td className="px-2 py-3"><a href="https://anydistance.club">AnyDistance</a></td>
              <td>March 2022</td>
              <td>$10,000</td>
              <td>Interactive health company + community</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100">
              <td className="px-2 py-3"><a href="https://www.xiggit.com">Xiggit</a></td>
              <td>March 2022</td>
              <td>$1,000</td>
              <td>Benefits for hourly workers and freelancers</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100">
              <td className="px-2 py-3"><a href="https://www.ooneepod.com">Oonee</a></td>
              <td>March 2022</td>
              <td>$1,000</td>
              <td>Smart, modular, scalable bike parking</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100">
              <td className="px-2 py-3"><a href="https://thimble.io">Thimble</a></td>
              <td>March 2022</td>
              <td>$1,000</td>
              <td>Live STEM classes + robotics kits for schools</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100">
              <td className="px-2 py-3"><a href="https://bowr.co">Bowr</a></td>
              <td>March 2022</td>
              <td>$1,000</td>
              <td>Sustainable furniture design & production</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100">
              <td className="px-2 py-3"><a href="https://kingscrowd.com">KingsCrowd</a></td>
              <td>March 2022</td>
              <td>$1,000</td>
              <td>Financial data platform for online private markets</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100">
              <td className="px-2 py-3"><a href="https://brikclik.com">Brik + Clik</a></td>
              <td>March 2022</td>
              <td>$1,000</td>
              <td>End-to-end commerce solution for brands and retailers</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100">
              <td className="px-2 py-3"><a href="https://curastory.co">Curastory</a></td>
              <td>February 2022</td>
              <td>$1,000</td>
              <td>Creator platform for making, monetizing and distributing video content</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100">
              <td className="px-2 py-3"><a href="https://nada.co/cityfunds/33100">Miami Cityfund</a></td>
              <td>February 2022</td>
              <td>$1,000</td>
              <td>Real estate index fund of Miami</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100">
              <td className="px-2 py-3"><a href="https://www.evolutiondevices.com">Evolution Devices</a></td>
              <td>January 2022</td>
              <td>$1,000</td>
              <td>Digital physical therapy with smart therapeutic devices</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100">
              <td className="px-2 py-3"><a href="https://customer.io">Customer.io</a></td>
              <td>August 2021</td>
              <td>$2,500</td>
              <td>Business messaging automation platform</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100">
              <td className="px-2 py-3"><a href="https://gumroad.com">Gumroad</a></td>
              <td>April 2021</td>
              <td>$1,000</td>
              <td>Storefront for creators</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  )
}