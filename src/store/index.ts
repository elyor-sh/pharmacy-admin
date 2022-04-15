import React from "react";
import {CurrentUserStore} from "./allStores/currentUserStore";
import {ThemeStore} from "./allStores/themeStore";

export const StoresContext = React.createContext({
    currentUserStore: new CurrentUserStore(),
    themeStore: new ThemeStore()
});

export const useStore = () => React.useContext(StoresContext);