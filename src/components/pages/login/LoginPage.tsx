import styled from "@emotion/styled";
import { AccountCircle } from "@mui/icons-material";
import { Button, Checkbox, FormControlLabel, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

// Estilos personalizados con Emotion
const LoginContainer = styled(Paper)`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  text-align: center;
  margin-top: 50px;
`;

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: "", password: "", remember: false });
    const [error, setError] = useState("");

    // Manejo del cambio en inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Simulación de autenticación
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.email === "admin@example.com" && formData.password === "123456") {
            alert("Inicio de sesión exitoso!");
        } else {
            setError("Credenciales incorrectas. Inténtalo de nuevo.");
        }
    };

    return (
        <LoginContainer elevation={3}>
            <AccountCircle fontSize="large" />
            <Typography variant="h5" gutterBottom>
                Iniciar Sesión
            </Typography>
            <Typography variant="caption" color="textDisabled">
                Bienvenido, por favor inicia sesion
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Correo Electrónico"
                    variant="outlined"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    required
                />

                <TextField
                    fullWidth
                    label="Contraseña"
                    variant="outlined"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    margin="normal"
                    required
                />

                {error && (
                    <Typography color="error" variant="body2">
                        {error}
                    </Typography>
                )}
                <FormControlLabel control={<Checkbox defaultChecked />} label="Recordarme" />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
                    Ingresar
                </Button>
            </form>
        </LoginContainer>
    );
};

export default LoginPage;
