import { useState } from 'react'
import { Avatar } from './Avatar'
import { Intro } from './Intro'
import { SkillList } from './SkillList'
import { Status } from './Status'
export const Card = () => {
const [active, setActive] = useState(true);
    return (
        <div>
            <Avatar active={active}/>
            <Intro />
            <SkillList active={active} />
            <Status active={active} setActive={setActive} />
        </div>
    )
}