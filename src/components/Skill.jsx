export const Skill = ({ skill, icon, color }) => {
    return (
        <p
            className="[&>span]:px-2 text-xl border rounded-lg font-extrabold"
            style={{ backgroundColor: color,
            }}
        >
            <span 
            style={{opacity: 1}}
            >{skill}</span>
            {icon && <span>{icon}</span>}
        </p>
    );
};

