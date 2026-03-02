import type { SkillCategory } from '../types/profile';

interface Props {
  skill: SkillCategory;
}

export default function SkillCard({ skill }: Props) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-card-dark">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-2xl" aria-hidden="true">
          {skill.icon}
        </span>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{skill.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-tag-light px-3 py-1 font-mono text-sm text-blue-700 dark:bg-tag-dark dark:text-blue-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
