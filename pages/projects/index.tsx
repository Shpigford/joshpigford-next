/* eslint-disable react/no-unescaped-entities */
import Layout from '../../components/layout'

export default function Now() {
  return (
    <Layout title="Projects" desc="I've worked on (and continue to work on) an absurd number of things.">
      <div className="prose max-w-none">
        <h1>Projects</h1>
        <p>I've worked on (and continue to work on) an absurd number of things. Current tally? <b>X projects</b>.</p>

        <table className="project_list">
          <thead>
            <tr>
              <th>Project</th>
              <th>Started</th>
              <th>Description</th>
              <th>What Happened</th>
            </tr>
          </thead>
          <tbody className="text-sm">

            <tr className="group odd:bg-white even:bg-gray-100 hover:bg-blue-700">
              <td className="px-2 py-3"><a href="#" className="block group-hover:text-white">project name</a></td>
              <td><a href="#" className="block group-hover:text-white">project year</a></td>
              <td><a href="#" className="block group-hover:text-white">project description</a></td>
              <td><a href="#" className="block group-hover:text-white">project outcome</a></td>
            </tr>

          </tbody>
        </table>

      </div>
    </Layout>
  )
}