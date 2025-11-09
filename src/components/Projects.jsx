
const projects = [
    {
        name: "Community Moderation",
        description: [
            "Analyzed feasibility, complexity, risks to add/integrate new react component to the organisation's community/forum.",
            "Implemented content moderation features in forum's web UI and discord servers"
        ],
    },
    {
        name: "Guardian Security",
        description: [
            "Owned the project from start and built UI for different modules such as Users, Groups, Domains, Privileges, Roles, Row Level Security"
        ],
    },
    {
        name: "Arkine",
        description: [
            "Developed a dashboard for infrastructure(Snowflake) admins where they could perform otherwise manually, which was tedious, error-prone and time taking"
        ],
    },
    {
        name: "FlyPigeon",
        description: [
            "A B2B and B2C booking platform for flights, buses, and hotels.",
            "Collaborated with business & UI/UX teams on different application workflows.",
            "Optimized performance using windowing, lazy loading, code splitting, debouncing.",
            "Integrated with Travel API Providers, GDS, and Payment Gateway, SMS, WhatsApp, and Email APIs."
        ],
    },
    {
        name: "Farm29",
        description: [
            "A grocery web application based on the next-day delivery model",
            "Developed a dashboard for infrastructure(Snowflake) admins where they could perform otherwise manually, which was tedious, error-prone and time taking",
            "Worked on features: cart, monthly pack, subscription, coupons., Admin web panels for Superuser, Warehouse."
        ],
    },
    {
        name: "Sendfast",
        description: [
            "Built intuitive easy-to-use interfaces for critical business functionalities e.g. employee onboarding, and complex pay/salary models using AngularJS directives",
            "Developed an employee payroll management platform."
        ],
    }
]
export default function Projects() {
    return (
        <section>
            <h2 className="text-2xl font-bold">
                Projects
            </h2>
            <div>{
                projects.map( (proj, index) => 
                    <article key={index} className="mb-3"> 
                        <h3 className="text-xl font-bold">
                            {proj.name}
                        </h3>
                                
                        <ul>
                            {proj.description.map((point, p)=> <li key={p} className="list-disc" >{point}</li>)}
                        </ul>
                    </article>
                )}
            </div>
        </section>
    )
    
}