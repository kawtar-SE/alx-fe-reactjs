// Simulated authentication
export const isAuthenticated = () => {
  // Replace with real auth logic
  return localStorage.getItem("loggedIn") === "true";
};

// Simulated login/logout functions
export const login = () => localStorage.setItem("loggedIn", "true");
export const logout = () => localStorage.setItem("loggedIn", "false");
