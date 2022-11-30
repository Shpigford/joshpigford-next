/* eslint-disable react/no-unescaped-entities */
import Layout from '../../components/layout'
import { GetStaticProps } from "next"
import Project, { ProjectProps } from "../../components/Project"
import prisma from '../../lib/prisma'

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.project.findMany({
    orderBy: { year: 'desc' },
  })

  return {
    props: {
      feed: JSON.parse(JSON.stringify(feed))
    },
    revalidate: 10
  }
}

type Props = {
  feed: ProjectProps[]
}

const Projects: React.FC<Props> = (props) => {
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

            {props.feed.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </tbody>
        </table>

      </div>
    </Layout>
  )
}

export default Projects