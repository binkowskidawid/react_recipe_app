import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.header}>{title}</h1>
      <ol className={style.list}>
        {ingredients.map((ingredient) => (
          <li key={Math.random()}>{ingredient.text}</li>
        ))}
      </ol>
      <img className={style.image} src={image} alt="" />
      <p className={style.kcal}>{calories} kcal</p>
    </div>
  );
};

export default Recipe;
