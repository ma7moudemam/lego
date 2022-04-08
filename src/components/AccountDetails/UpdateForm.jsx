import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export default function UpdateForm() {
  const formik = useFormik({
    initialValues: {
      UserName: "",
      EmailAdress: "",
      day: "",
      month: "",
      year: "",
      country: "",
    },
    validationSchema: Yup.object({
      UserName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      EmailAdress: Yup.string()
        .email("Invalid email address")
        .required("required"),
      day: Yup.number("day should be a number")
        .max(31, "day should be two numbers DD")
        .required("required"),
      month: Yup.number("month should be a number")
        .max(12, "month should be two numbers MM")
        .required("required"),
      year: Yup.number("year should be a number")
        .max(2010, "you can't register if your age less than 12")
        .min(1930, "your can't be a 100 years old stop lying")
        .required("required"),
      country: Yup.string().required("required"),
    }),
    onSubmit: (values) => {
      console.log("submited");
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form id="update-form" onSubmit={formik.handleSubmit}>
        <label htmlFor="UpdateUserName"></label>
        <FormControl sx={{ width: "100%", mb: 2 }}>
          <TextField
            helperText={
              formik.touched.UserName && formik.errors.UserName
                ? `${formik.errors.UserName}`
                : null
            }
            error={
              formik.touched.UserName && formik.errors.UserName ? true : false
            }
            label="UserName"
            type="text"
            id="UpdateUserName"
            name="UserName"
            placeholder="InitialUserName"
            {...formik.getFieldProps("UserName")}
          />
        </FormControl>

        <FormControl sx={{ width: "100%", mb: 2 }}>
          <TextField
            helperText={
              formik.touched.EmailAdress && formik.errors.EmailAdress
                ? `${formik.errors.EmailAdress}`
                : null
            }
            error={
              formik.touched.EmailAdress && formik.errors.EmailAdress
                ? true
                : false
            }
            label="Email adress"
            type="email"
            id="UpdateEmailAdress"
            name="EmailAdress"
            {...formik.getFieldProps("EmailAdress")}
          />
        </FormControl>

        <label htmlFor="birthDate" className="birthDateLabel">
          Birthdate
        </label>
        <div className="row">
          <div className="col">
            <FormControl>
              <TextField
                helperText={
                  formik.touched.day && formik.errors.day
                    ? `${formik.errors.day}`
                    : null
                }
                error={formik.touched.day && formik.errors.day ? true : false}
                label="Day"
                type="number"
                placeholder="DD"
                name="day"
                id="birthDay"
                {...formik.getFieldProps("day")}
              />
            </FormControl>
          </div>
          <div className="col">
            <FormControl>
              <TextField
                helperText={
                  formik.touched.month && formik.errors.month
                    ? `${formik.errors.month}`
                    : null
                }
                error={
                  formik.touched.month && formik.errors.month ? true : false
                }
                label="Month"
                type="number"
                placeholder="MM"
                name="month"
                id="birthMonth"
                {...formik.getFieldProps("month")}
              />
            </FormControl>
          </div>
          <div className="col">
            <FormControl>
              <TextField
                helperText={
                  formik.touched.year && formik.errors.year
                    ? `${formik.errors.year}`
                    : null
                }
                error={formik.touched.year && formik.errors.year ? true : false}
                label="Year"
                type="number"
                placeholder="YYYY"
                name="year"
                id="birthYear"
                {...formik.getFieldProps("year")}
              />
            </FormControl>
          </div>
        </div>
        <FormControl sx={{ width: "100%", mt: 2 }}>
          <InputLabel id="countries-label">Country</InputLabel>
          <Select
            error={
              formik.touched.country && formik.errors.country ? true : false
            }
            labelId="countries-label"
            name="country"
            id="countries"
            {...formik.getFieldProps("country")}
            sx={{ backgroundColor: "#fff" }}
          >
            <MenuItem value="">
              <em>...</em>
            </MenuItem>
            <MenuItem value="cairo">Cairo</MenuItem>
            <MenuItem value="alex">Alex</MenuItem>
            <MenuItem value="mansoura">Mansoura</MenuItem>
            <MenuItem value="portsaid">Port Said</MenuItem>
            <MenuItem value="tanta">Tanta</MenuItem>
          </Select>
          <FormHelperText sx={{ color: "red" }}>
            {formik.touched.country && formik.errors.country
              ? `${formik.errors.country}`
              : null}
          </FormHelperText>
        </FormControl>

        <div className="d-grid gap-2 col-6 mx-auto my-4">
          <button
            className="btn py-2 mb-2"
            style={{ backgroundColor: "gray", color: "white" }}
            type="submit"
          >
            <Link
              to={`/my-account`}
              style={{ textDecoration: "none", color: "black" }}
            >
              Save
            </Link>
          </button>
          <button
            className="btn mb-2"
            style={{ backgroundColor: "transparent", color: "black" }}
            type="button"
          >
            <Link
              to={`/details`}
              style={{ textDecoration: "none", color: "black" }}
            >
              Go Back
            </Link>
          </button>
        </div>
      </form>
    </>
  );
}
