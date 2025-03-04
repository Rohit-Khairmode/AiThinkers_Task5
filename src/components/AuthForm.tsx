"use client";

import { useAuth } from "@/context/AuthContext";
import { AuthContextType, AuthError, AuthInputs, User } from "@/utils/types";
import { authSchema } from "@/utils/zodSchema";
import { Box, Paper } from "@mui/material";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CustomTextField from "./material-ui-wrapper/CustomTextField";
import H5 from "./material-ui-wrapper/Typography/H5";
import PrimaryButton from "./material-ui-wrapper/PrimaryButton";
import SmallText from "./material-ui-wrapper/SmallText";
import ToastMsg from "./material-ui-wrapper/ToastMsg";
import ElevatedDiv from "./material-ui-wrapper/ElevatedDiv";

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
  const handleFormChange = () => {
    setFormData((prev: AuthInputs) => ({
      ...prev,
      type: prev.type === "register" ? "login" : "register",
    }));
    setError(null);
  };
  return (
    <ElevatedDiv>
      <H5>{formData.type === "register" ? "Register" : "Login"}</H5>
      <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: 2 }}>
        <CustomTextField
          label="Username"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          error={Boolean(error?.userName)}
          helperText={error?.userName || ""}
        />

        <CustomTextField
          type="password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={Boolean(error?.credentials || error?.password)}
          helperText={error?.credentials || error?.password || ""}
        />

        <PrimaryButton sx={{ marginTop: 2 }}>
          {formData.type === "register" ? "Register" : "Login"}
        </PrimaryButton>

        <SmallText
          sx={{ marginTop: 2, cursor: "pointer" }}
          onClick={handleFormChange}
        >
          {formData.type === "register"
            ? "Already have an account? Login"
            : "New user? Register"}
        </SmallText>
      </Box>
      <ToastMsg
        open={toast.open}
        onSnackBarClose={() => setToast({ ...toast, open: false })}
        onAlertClose={() => setToast({ ...toast, open: false })}
        AlertSx={{ width: "100%" }}
        severity={toast.severity}
      >
        {toast.message}
      </ToastMsg>
    </ElevatedDiv>
  );
}
