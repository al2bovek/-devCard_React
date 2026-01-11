const info = [
  {
    category: "Frontend",
    items: [
      { name: "HTML+CSS"},
      { name: "JavaScript"},
      { name: "Web Design"}
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git and GitHub"},
      { name: "React"},
      { name: "Tailwindcss"}
    ]
  }
];
const skills = info.map(skill => skill.items.map(item => item.name)).flat();
const icons = ["👍", "🤞", "🤞", "🤘", "🖐", "🤞" ];
const colors = ['rgba(165, 42, 153, 0.49', 'rgba(42, 44, 165, 0.49', 'rgba(42, 165, 61, 0.49)', 'rgba(124, 165, 42, 0.49', 'rgba(170, 184, 22, 0.49', 'rgba(165, 42, 42, 0.5)'];

const oklch = [ 'oklch(75%_0.20_260)', 'oklch(78%_0.18_145)', 'oklch(82%_0.22_85)', 'oklch(70%_0.20_25)', 'oklch(80%_0.15_240)', 'oklch(92%_0.02_250)' ];
const status = {
  active: true,
}
export {skills, icons, colors, status}
