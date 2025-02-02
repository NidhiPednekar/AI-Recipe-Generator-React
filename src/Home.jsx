import recipe from "../public/recipe.avif"
export default function Home() {
    return (
      <section id="home" className="intro-section">
       
  <div className="intro-content">
    <img src={recipe} alt="" />
    <h2>Cook Smart, Live Deliciously!</h2>
    <p>Welcome to <strong>1 Minute Recipe</strong>, your one-stop solution to discover recipes based on the ingredients you already have. No more wasting time—just enter your ingredients, and let us do the magic!</p>
    <p>Start exploring your kitchen in a whole new way and unlock amazing dishes tailored just for you!</p>
   
  </div>
      </section>
    );
  }