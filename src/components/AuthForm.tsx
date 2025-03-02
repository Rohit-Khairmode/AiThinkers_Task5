"use client";

import { useAuth } from "@/context/AuthContext";
import { AuthContextType, AuthError, AuthInputs, User } from "@/utils/types";
import { authSchema } from "@/utils/zodSchema";
import {
  Alert,
  Box,
  Button,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthForm() {
  const [toast, setToast] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error" | "warning" | "info";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const authContextRespone: AuthContextType | null = useAuth();
  if (!authContextRespone) throw new Error("Problem in AuthContext");
  const { setUser }: AuthContextType = authContextRespone;
  const router: AppRouterInstance = useRouter();
  const [formData, setFormData] = useState<AuthInputs>({
    userName: "",
    password: "",
    type: "register",
  });

  const [error, setError] = useState<AuthError | null>(null);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const validationResult = authSchema.safeParse(formData);
    if (!validationResult.success) {
      const errorObj = validationResult.error.format();

      setError({
        userName: errorObj.userName?._errors[0],
        password: errorObj.password?._errors[0],
      });
      return;
    }

    let res = await fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    const data: User = await res.json();

    if (res.status === 400 || res.status === 401 || res.status === 405) {
      setError({ ...data });
      setToast({
        open: true,
        message: "Authentication failed!",
        severity: "error",
      });
      return;
    }

    setError(null);
    setToast({
      open: true,
      message: `${
        formData.type === "register" ? "Registered" : "Logged in"
      } successfully!`,
      severity: "success",
    });
    setUser(data);
    router.replace("/dashboard");
  };
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        maxWidth: 400,
        margin: "auto",
        marginTop: 5,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" fontWeight="bold" textAlign="center">
        {formData.type === "register" ? "Register" : "Login"}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: 2 }}>
        <TextField
          fullWidth
          label="Username"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          error={Boolean(error?.userName)}
          helperText={error?.userName || ""}
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          error={Boolean(error?.credentials || error?.password)}
          helperText={error?.credentials || error?.password || ""}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          {formData.type === "register" ? "Register" : "Login"}
        </Button>

        <Typography
          variant="body2"
          color="primary"
          textAlign="center"
          sx={{ marginTop: 2, cursor: "pointer" }}
          onClick={() => {
            setFormData((prev: AuthInputs) => ({
              ...prev,
              type: prev.type === "register" ? "login" : "register",
            }));
            setError(null);
          }}
        >
          {formData.type === "register"
            ? "Already have an account? Login"
            : "New user? Register"}
        </Typography>
      </Box>
      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={() => setToast({ ...toast, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setToast({ ...toast, open: false })}
          severity={toast.severity}
          sx={{ width: "100%" }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </Paper>
  );
}
