import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Stack } from "@mui/system";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import "react-country-state-city/dist/react-country-state-city.css";

import classes from "./ProfileDetail.module.css";
import { isValidPassword } from "../../utils/validator";
import {
  errorNotification,
  successNotification,
} from "../../utils/notifications";
import { getAuth, updatePassword } from "firebase/auth";

const save = {
  background: "#dc3237",
  color: "#fff",
  fontSize: "16px",
  "&:hover": {
    background: "#dc3237",
    color: "#fff",
  },
  "@media only screen and (max-width: 600px)": {
    fontSize: "12px",
  },
};
const Cancel = {
  border: "1px solid #dc3237",
  color: "#dc3237",
  fontSize: "16px",
  fontWeight: "bold",
  "&:hover": {
    border: "1px solid #dc3237",
    color: "#dc3237",
  },
  "@media only screen and (max-width: 600px)": {
    fontSize: "12px",
  },
};

const sechalf = {
  padding: "0 50px",
  "@media (max-width: 768px)": {
    padding: "0",
  },
};

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [disableSettingsEdit, setDisableSettingsEdit] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleUpdatePassword = async () => {
    if (isValidPassword(password) && isValidPassword(confirmPassword)) {
      if (password === confirmPassword) {
        const auth = getAuth();
        await updatePassword(auth.currentUser, password)
          .then(() => {
            successNotification(
              "Password Updated Successfully, Please login again!!!"
            );
            setShowPassword(false);
            setPassword("");
            setConfirmPassword("");
            setDisableSettingsEdit(true);
            window.location.href = "/";
          })
          .catch((e) => {
            console.log("handleUpdatePassword: ", e);
            if (e.code === "auth/requires-recent-login") {
              errorNotification(
                "Password change requires recent login, so login again!!!"
              );
            }
          });

        // // --- it is not working ---
        // const result = await updatePassword(password);
        // if (result.data) {
        //   if (result.data.isDone) {
        //     successNotification(
        //       "Password Updated Successfully, Please login again!!!"
        //     );
        //     // signout();
        //     // window.location.href = "/";
        //   }
        // } else {
        //   errorNotification(
        //     `Update Password Error: `,
        //     result.error.message || ""
        //   );
        // }
      } else {
        errorNotification("Password & Confirm Password is not matching!!!");
      }
    } else {
      errorNotification("Password Invalid!!!");
    }
  };

  return (
    <Box className={`${classes.pro} container`}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: "100%", mb: 2 }}
      >
        <Typography
          id="modal-modal-profile"
          variant="h4"
          component="h2"
          sx={{ color: "#000", fontWeight: "bold" }}
        >
          Settings
        </Typography>
        {disableSettingsEdit && (
          <IconButton
            aria-label="Edit"
            onClick={() => setDisableSettingsEdit(false)}
          >
            <EditIcon sx={{ color: "#dc3237" }} />
          </IconButton>
        )}
      </Stack>
      <Grid container spacing={2} sx={sechalf}>
        <Grid item md={12} xs={12}>
          <FormControl sx={{ mb: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="password">New Password</InputLabel>
            <OutlinedInput
              id="password"
              disabled={disableSettingsEdit}
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    disabled={disableSettingsEdit}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="New Password"
            />
          </FormControl>
        </Grid>
        <Grid item md={12} xs={12}>
          <FormControl sx={{ mb: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
            <OutlinedInput
              id="confirm-password"
              type={showPassword ? "text" : "password"}
              disabled={disableSettingsEdit}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    disabled={disableSettingsEdit}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
            />
          </FormControl>
        </Grid>
      </Grid>
      {!disableSettingsEdit && (
        <Stack
          spacing={2}
          direction="row"
          justifyContent="end"
          alignItems="end"
        >
          <Button variant="contained" sx={save} onClick={handleUpdatePassword}>
            Update Password
          </Button>
          <Button
            variant="outlined"
            sx={Cancel}
            onClick={() => {
              setDisableSettingsEdit(true);
              setPassword("");
              setConfirmPassword("");
            }}
          >
            Cancel
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export default ChangePassword;
