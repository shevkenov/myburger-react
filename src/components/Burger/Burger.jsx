import React from 'react';

import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

import classes from './Burger.module.css';

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(ingKey => {
        return [...Array(props.ingredients[ingKey])].map((_, i) => {
            return <BurgerIngredients key={ingKey + i} type={ingKey} />
        })
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    )
}

export default Burger;