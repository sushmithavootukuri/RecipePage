import React, { useState } from "react";
import "./styles.css";

const Title = () => {
  return (
    <div>
      <h1 className="center title">My Recipe</h1>
      <h1>Moist Chocolate Cake</h1>
    </div>
  );
};

const Image = () => {
  return (
    <img
      src={
        "https://i.pinimg.com/originals/70/1d/48/701d48d08d975c76c24486c3340a1ce5.jpg"
      }
      alt={"Moist chocolate cake"}
    ></img>
  );
};

function RecipeInfo() {
  return (
    <div className="info inline-block">
      <p>
        <b>Prep : </b>20 mins 🕑
      </p>
      <p>
        <b>Cook : </b>30 mins 🕑
      </p>
      <p>
        <b>Additional : </b>30 mins 🕑
      </p>
      <p>
        <b>Total : </b>1 hour 🕑
      </p>
      <p>
        <b>Servings : </b>18
      </p>
    </div>
  );
}

function Ingredients() {
  return (
    <div className="inline-block info">
      <h2>Ingredients</h2>
      <ul>
        <li>2 cups white sugar</li>
        <li>1 ¾ cups all-purpose flour</li>
        <li>¾ cup unsweetened cocoa powder</li>
        <li>1 ½ teaspoons baking powder</li>
        <li>1 cup milk</li>
        <li>2 teaspoons vanilla extract</li>
      </ul>
    </div>
  );
}

function Directions() {
  return (
    <div className="right">
      <h2>Directions 👨‍🍳</h2>
      <p>
        <b> Step 1 </b>
      </p>
      <p>
        {" "}
        Preheat oven to 350 degrees F (175 degrees C). Grease and flour two nine
        inch round pans.
      </p>

      <p>
        <b> Step 2 </b>
      </p>
      <p>
        {" "}
        In a large bowl, stir together the sugar, flour, cocoa, baking powder,
        baking soda and salt. Add milk and vanilla, mix for 2 minutes on medium
        speed of mixer. Stir in the boiling water last. Batter will be thin.
        Pour evenly into the prepared pans.
      </p>

      <p>
        <b> Step 3 </b>
      </p>
      <p>
        {" "}
        Bake 30 to 35 minutes in the preheated oven, until the cake tests done
        with a toothpick. Cool in the pans for 10 minutes, then remove to a wire
        rack to cool completely.
      </p>
    </div>
  );
}

function Feedback() {
  const [like, setLike] = useState(127);
  return (
    <div>
      <h2>Tried the Recipe ?</h2>
      <button onClick={() => setLike(like + 1)}>Loved it ❤️ ({like})</button>
    </div>
  );
}
export default function Recipe() {
  return (
    <div className="main">
      <Title />
      <Image />
      <RecipeInfo />
      <Ingredients />
      <Directions />
      <Feedback />
    </div>
  );
}
