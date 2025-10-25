import React, { use } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router';
import SkillCard from './SkillCard';

const skillsPromise=fetch('/skills.json').then(res=>res.json())
const Skills = () => {
    const {skillId} = useParams()
   console.log(skillId)
    const data = useLoaderData()
    console.log(data)
    const skills = use(skillsPromise)
    return (
        <div>
          <h2 className='font-bold text-4xl text-center mt-10 mb-5'>Popular Skills</h2>
           <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {
                skills.map(skill=><SkillCard skill={skill} key={skill.skillId}></SkillCard>)
            }
           </div>
        </div>
    );
};

export default Skills;