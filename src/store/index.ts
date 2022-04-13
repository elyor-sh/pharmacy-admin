import React from "react";

export const StoresContext = React.createContext({

});

export const useStore = () => React.useContext(StoresContext);