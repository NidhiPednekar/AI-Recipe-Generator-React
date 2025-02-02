import ReactMarkdown from "react-markdown"

export default function Recipe(props){
    const recipeContent = typeof props.recipe === "string" ? props.recipe : "No recipe available.";
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>The 1 Minute Recipe </h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
            <h4 style={{ backgroundColor: 'rgb(251, 202, 202)', color:'black',textAlign: 'center', padding: '10px' }}>
                Enjoy the process of creating something delicious. Give it a try and make it your own!
            </h4>
        </section>
    )
}
