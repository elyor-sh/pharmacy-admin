import React from "react";
import {CurrentUserStore} from "./allStores/currentUserStore";
import {ThemeStore} from "./allStores/themeStore";
import {CategoriesStore} from "./allStores/categoriesStore";

export const StoresContext = React.createContext({
    currentUserStore: new CurrentUserStore(),
    themeStore: new ThemeStore(),
    categoriesStore: new CategoriesStore()
});

export const useStore = () => React.useContext(StoresContext);