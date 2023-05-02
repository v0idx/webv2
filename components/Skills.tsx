import { skillData } from './skill-data';

const Skills = () => {
    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <div className="skills-grid">
                {skillData && skillData.map((skill) => (
                    <div className="skill-card" key={skill.id} id={skill.id.toString()}>
                        <i className={skill.icon}></i>
                        <p>{skill.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;