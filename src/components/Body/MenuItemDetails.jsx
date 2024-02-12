import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SPECIFIC_MEAL } from "../../constants";
import './MenuItemDetails.css';
import ShippingInfo from "./ShippingInfo";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux_Store/itemSlice";
import './ShippingInfo.css';

const MenuItemDetails = () => {
    const { mealId } = useParams();
    console.log(mealId);
    const [mealData, setMealData] = useState(null);
    const [paragraph, setParagraph] = useState('');
    const [checkout, setCheckout] = useState(false);
    useEffect(() => {
        fetchMealData();
    }, []);

    const fetchMealData = async() => {
        const data = await axios.get(SPECIFIC_MEAL + mealId);
        console.log(data?.data?.meals[0]);
        setMealData(data?.data?.meals[0]);
        setParagraph(data?.data?.meals[0]?.strInstructions)
    }
    const sentences = paragraph.split('.');
    const dispatch = useDispatch();
    const handleAddItem = () => {
        setCheckout(true);
        dispatch(addItem(mealData?.strMeal))
    }

    
    return (
        <div className="specific-item-container">
            <div className="meal-details">
                <div className="item-name-img">
                    <img className="item-img" src="https://www.themealdb.com/images/icons/flags/big/32/in.png" alt="" />
                    <span className="item-name">{mealData?.strMeal}</span>
                </div>    
                <div className="specific-card">
                    <img className="specific-card-img" src={mealData?.strMealThumb} alt="" />
                </div>
            </div>
            
            <div className="ingredient">
                <p className="ingredient-heading">Ingredients</p>
                <div className="ingredients-container">
                    <p className="ingredient-name">{mealData?.strIngredient1}</p>
                    <p className="ingredient-name">{mealData?.strIngredient2}</p>
                    <p className="ingredient-name">{mealData?.strIngredient3}</p>
                    <p className="ingredient-name">{mealData?.strIngredient4}</p>
                    <p className="ingredient-name">{mealData?.strIngredient5}</p>
                    <p className="ingredient-name">{mealData?.strIngredient6}</p>
                    <p className="ingredient-name">{mealData?.strIngredient7}</p>
                    <p className="ingredient-name">{mealData?.strIngredient8}</p>
                    <p className="ingredient-name">{mealData?.strIngredient9}</p>
                    <p className="ingredient-name">{mealData?.strIngredient10}</p>
                    <p className="ingredient-name">{mealData?.strIngredient11}</p>
                    <p className="ingredient-name">{mealData?.strIngredient12}</p>
                    <p className="ingredient-name">{mealData?.strIngredient13}</p>
                    <p className="ingredient-name">{mealData?.strIngredient14}</p>
                    <p className="ingredient-name">{mealData?.strIngredient15}</p>
                    <p className="ingredient-name">{mealData?.strIngredient16}</p>
                    <p className="ingredient-name">{mealData?.strIngredient17}</p>
                    <p className="ingredient-name">{mealData?.strIngredient18}</p>
                    <p className="ingredient-name">{mealData?.strIngredient19}</p>
                    <p className="ingredient-name">{mealData?.strIngredient20}</p>
                </div>
                <div>
                    <p className="instruction">Instructions</p>
                    {
                        sentences?.map((sentence, index) => (<p key={index}>{sentence}.</p>))
                    }
                </div>
                {
                    checkout === false ? <button className="checkout" onClick={() => handleAddItem(mealData?.strMeal) }>Checkout</button> : <ShippingInfo className="shipping"/>
                }

            </div>
        </div>
    )
}

export default MenuItemDetails;