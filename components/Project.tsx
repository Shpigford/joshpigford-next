import Link from 'next/link';

export type ProjectProps = {
  id: string;
  name: string;
  description: string;
  outcome: string;
  notes: string;
  link: string;
  year: number;
};

const Project: React.FC<{ project: ProjectProps }> = ({ project }) => {
  return (
    <tr className="group odd:bg-white even:bg-gray-100 hover:bg-blue-700">
      <td className="px-2 py-3">
        <Link href={`/project/${project.id}`} className="block group-hover:text-white">{project.name}</Link>
      </td>
      <td><Link href={`/project/${project.id}`} className="block group-hover:text-white">{project.year}</Link></td>
      <td><Link href={`/project/${project.id}`} className="block group-hover:text-white">{project.description}</Link></td>
      <td><Link href={`/project/${project.id}`} className="block group-hover:text-white">{project.outcome}</Link></td>
    </tr>
  );
};

export default Project;