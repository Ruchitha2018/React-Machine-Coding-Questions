import { useState } from "react";
import recipesData from "../recipesData.js"

const RecipesFilter = () => {
 const [rating, setRating] = useState(4);
 const [cart, setCart] = useState([]);

 const filteredRecipes = recipesData.filter((data) => data.rating >= rating);

 const addToCart = (data) => {
    setCart((prev) => [...prev, data]);
 }

 return (
  <>
   <select onChange={(e) => setRating(+e.target.value)}>
    <option value={4.0}>4.0+</option>
    <option value={4.3}>4.3+</option>
    <option value={4.5}>4.5+</option>
    <option value={4.7}>4.7+</option>
    <option value={4.9}>4.9+</option>
   </select>
   <h1>Recipes Filter - {rating}</h1>
   <p>Add To Cart - {cart.length}</p>
   <div className="recipes-container">
    {filteredRecipes.map((data, index) => (
     <div className="recipe-card" key={data.id}>
      <img src={data.image} />
      <h3>{data.name}</h3>
      <h3>Rating: {data.rating}</h3>
      <button onClick={() => addToCart(data)}>Add to cart</button>
     </div>
    ))}
   </div>

  </>
 )
}

export default RecipesFilter