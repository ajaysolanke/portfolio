const demos = [
    {
        "title": "Connect Four",
        "description": "Connect Four is a two-player game where each player uses colored tokens (red or yellow) and takes turns dropping them into a 7×6 grid. The first player to align four tokens horizontally, vertically, or diagonally wins.",
        "skills": "React.js, Typescript, CSS",
        "demo_url": "https://ajaysolanke.github.io/connect-four--react/"
    }
]

export default function Demos() {
    return (
        <section>
            <h2 className="text-2xl font-bold">
                Demos
            </h2>
            <div>{
                demos.map( (demo, index) => 
                    <article key={index} className="mb-3 p-4 rounded-sm border border-solid border-gray-300"> 
                        <h3 className="text-xl font-bold">
                            {demo.title} <a className="text-sm" target="_blank" href={demo.demo_url}>View Demo</a>
                        </h3>
                        <p>{demo.description}</p>
                        <p><strong>Skills:</strong> {demo.skills}</p>
                        
                    </article>
                )}
            </div>
        </section>
    )
    
}