import { useState, createContext, Children } from "react";

export const FavContext = createContext({
    ids: [],
    addFavorite: (id) => {} ,
    removeFavorite: (id) => {},
})

export default function FavContextProvider({children}) {
    const [favMealsIds , setFavMealsIds] = useState([]);

    function addFavorite (id) {
        setFavMealsIds((curredntFavs) => [...curredntFavs, id])
    }

    
    function removeFavorite (id) {
        setFavMealsIds((curredntFavs) => 
        curredntFavs.filter(mealId => mealId !== id)
        )
    }

    const value = {
        ids: favMealsIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }

    return (
        <FavContext.Provider value={value}>{children}</FavContext.Provider>
    )
}