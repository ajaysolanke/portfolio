
const experience = [
    {
        org: "P99Soft Pvt Ltd",
        role: "SDE III",
        start: "JUL 2024",
        end: "PRESENT",
        description: "Built an enterprise application for security access management. Developed features for content moderation for the organization's forum."
    },
    {
        org: "Tekkr Technologies",
        role: "Full Stack Developer",
        start: "JAN 2021",
        end: "APR 2024",
        description: "Collabororated with business team, UI/UX designers to finalize features and designs. Led development of multiple projects "
    },
    {
        org: "Sendfast",
        role: "Full Stack Developer",
        start: "MAY 2018",
        end: "DEC 2020",
        description: "designed and implemented several applications for the logistics company."
    },
]
export default function Experience() {
    return (
        <section>
            <h2 className="text-2xl font-bold">
                Experience
            </h2>
            <div>{
                experience.map( (exp,index) => 
                    <article key={index} className="mb-3"> 
                        <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold">
                                    {exp.role}
                                </h3>
                                
                            <p>{exp.start} - {exp.end}</p>
                        </div>
                        <p>{exp.org}</p>
                        <p>
                            {exp.description}
                        </p>
                    </article>
                )}
            </div>
        </section>
    )
    
}