import React from "react";
import {CurrentUserStore} from "./allStores/currentUserStore";

export const StoresContext = React.createContext({
    currentUserStore: new CurrentUserStore()
});

export const useStore = () => React.useContext(StoresContext);