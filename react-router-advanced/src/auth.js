import { useState } from "react";

export default function useAuth() {
  // Simulate a logged-in user
  const [user] = useState({ name: "Kawtar" }); // set to null to simulate not logged in
  return { user };
}