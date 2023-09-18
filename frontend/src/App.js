import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./Components/Searchbar";
import RecipeCard from "./Components/RecipeCard";


const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state for authentication

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, [query]);
  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  };

  const handleLogin = () => {
    // In a real application, you'd implement actual login logic here (e.g., Firebase Authentication).
    // For this example, we'll simulate a login after 2 seconds.
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 2000);
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        // If the user is logged in, show the home page
        <>
          <h2>Welcome to Our Food Recipes</h2>
          <SearchBar
            isLoading={isLoading}
            query={query}
            setQuery={setQuery}
            handleSubmit={handleSubmit}
          />
          <div className="card-container">
            {recipes ? (
              recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.idMeal}
                  recipe={recipe}
                  />
                  ))
                ) : (
                  <p>No Results.</p>
                )}
              </div>
            </>
          ) : (
            // If the user is not logged in, show the login page
            <div className="login-container">
              <h2>Login</h2>
              <form>
        <label for="email">email</label>
        <input type="email" placeholder="enter your email" id="email" name="email"/>
        <label for="password">password</label>
        <input type="password" placeholder="*********" id="password" name="password"/>
          </form>

              <button onClick={handleLogin}>Login</button>
            </div>
          )}
        </div>
      );
    }
    
    export default App;