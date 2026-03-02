import type { Project } from '../types/profile';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const Wrapper = project.link ? 'a' : 'div';
  const linkProps = project.link
    ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className="group block rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-card-dark"
    >
      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
        {project.title}
        {project.link ? (
          <span className="ml-2 inline-block text-slate-400 transition-transform group-hover:translate-x-1">
            →
          </span>
        ) : null}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-tag-light px-3 py-1 font-mono text-xs text-blue-700 dark:bg-tag-dark dark:text-blue-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </Wrapper>
  );
}
