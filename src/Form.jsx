import React from "react";
import Recipe from './Recipe';
import IngredientsList from './IngredientsList'
import { getRecipeFromMistral } from "./ai";

export default function Form() {
    const [ingredients, setIngredients] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [recipe , setRecipe] = React.useState("");
    const recipeSection = React.useRef(null)
    console.log(recipeSection)

    React.useEffect(() => {
        if(recipe !== "" && recipeSection.current !== null){
            recipeSection.current.scrollIntoView({ behavior: "smooth" })
        }
    },[recipe])

    async function getRecipe(){
        setIsLoading(true)
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
        setIsLoading(false)
    }

    function handleSubmit(event) {
        event.preventDefault(); 
        const formData = new FormData(event.target);
        const newIngredient = formData.get("ingredient");
        if (newIngredient) {
            setIngredients((prev) => [...prev, newIngredient]);
            event.target.reset(); 
        }
    }

    function removeIngredient(index){
        setIngredients((prev) => prev.filter((_,i) => i !== index))
    }
  
    return (
        <main>
            <form onSubmit={handleSubmit}>
                <h1>Add your ingredients here to get a delicious recipe within a minute!</h1>
                <input
                    type="text"
                    placeholder="e.g. tomatoes"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 && 
    <div className="ingredients-section">
        <IngredientsList 
            ref={recipeSection}
            ingredients={ingredients} 
            getRecipe={getRecipe}
            removeIngredient={removeIngredient}
        />
    </div>
}

            {
                isLoading && (
                    <div className="loading-container">
                        <img src="../public/loading.gif" alt="loading recipe" />
                        <p>Cooking up something magical... Please wait!</p>
                    </div>
                )
            }

            {recipe && <Recipe recipe={recipe}/>}
        </main>
    );
}
