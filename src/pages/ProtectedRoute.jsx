import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();
  if ((requireAdmin && !user.isAdmin) || !user) {
    return <Navigate to="/" replace />;
  }
  return children;
}
