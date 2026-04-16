import Chip from "./Chip";

const skills = ["React.js", "Next.js", "Javascript", "Typescript", "Jest", "React Testing Library", "HTML", "CSS", "MaterialUI", "Tailwind", "GraphQL", "REST API", "Node.js", "Express.js", "Python", "Django", "PostgreSQL", "MongoDB", "AWS"]
export default function Header() {
  return (
    <header className="max-w-3xl">
        <h1 className="text-5xl font-bold text-black-600">
            Ajay Solanke
        </h1>
        <br/>
        <h2 className="text-xl font-bold">
            Full Stack Engineer
        </h2>
        <br/>
        <ul>
            {skills.map((skill,i) => 
            <li key={i} className="inline-block">
                <Chip label={skill} />
                </li>
            )}
                
        </ul>
    </header>)
    
}