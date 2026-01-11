import { Skill } from "./Skill";
import { skills, icons, colors } from '../data/skills.js';


export const SkillList = ({ active }) => {
    return (
        <div className={`flex flex-wrap gap-x-4 gap-y-2 p-8`}>
            {skills.map((skill, index) => <Skill
                key={index}
                skill={skill}
                icon={icons[index]}
                color={active ? colors[index] : 'gray'}
            />)}
        </div>
    )
}