import axios from "axios";
import { useEffect, useState } from "react";
import './MealList.css';
import { MEALS_API } from "../../constants";
import { Link } from "react-router-dom";

const MealList = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);
    const [copyMeals, setCopyMeals] = useState([]);
    useEffect(() => {
        fetchMeals();
    }, [])
    const fetchMeals = async () => {
        const data = await axios.get(MEALS_API);
        console.log(data?.data?.meals);
        setMeals(data?.data?.meals);
        setCopyMeals(data?.data?.meals);
    }

    const handleSearch = () => {
        const searchFilter = copyMeals?.filter((meal) => meal?.strMeal.toLowerCase().includes(searchText.toLowerCase()));
        setMeals(searchFilter);
    }
    return meals.length === 0 ? <h1 style={{color:'white'}}>Loading...</h1> : (
        <div className="meal-container">
            <input className="search-box" type="text" name="" id="" placeholder="search for a meal..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <button className="search-btn" onClick={handleSearch}>Search</button>
            <div className="meal-items">
            
            {
                meals?.map((meal) => {
                    return (
                        <Link className="menu" to={'meal/' + meal?.idMeal}>
                            <div className="meal-card" key={meal?.idMeal}>
                            <img className="meal-card-img" src={meal?.strMealThumb} alt="" />
                            <p className="meal-name">{meal?.strMeal}</p>
                            </div> 
                        </Link>    
                    )
                })
            }
            </div>
        </div>    
    )
}

export default MealList;