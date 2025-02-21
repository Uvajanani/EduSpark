import React, { createContext, useState, useEffect } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const url = "http://localhost:4000";

    // ✅ Initialize token from localStorage
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    useEffect(() => {
        console.log("🔄 StoreContext Mounted - Token:", token);
    }, [token]);

    const updateToken = (newToken) => {
        localStorage.setItem("token", newToken);  // ✅ Save token on update
        setToken(newToken);
    };

    const contextValue = {
        url,
        token,
        setToken: updateToken, // ✅ Ensure updates persist
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
//console.log("Token after reload:", localStorage.getItem("token"));
