import type { SkillCategory } from '../types/profile';
import SkillCard from './SkillCard';

interface Props {
  skills: SkillCategory[];
}

export default function Skills({ skills }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {skills.map((skill) => (
        <SkillCard key={skill.category} skill={skill} />
      ))}
    </div>
  );
}
