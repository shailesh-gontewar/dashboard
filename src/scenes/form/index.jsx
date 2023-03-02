import { Box, Button, TextField,Stack } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import Avatar from '@mui/material/Avatar';

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="Change Password " subtitle="." />
      <Stack direction="row" spacing={2} >
      <Avatar
        variant="rounded"
        alt="password"
        src="../../assets/pass.avif"
        sx={{ width: 86, height: 86 ,m:2}}
      />
    </Stack>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(3, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Current Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="New Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.npassword}
                name="npassword"
                error={!!touched.npassword && !!errors.npassword}
                helperText={touched.npassword && errors.npassword}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Confirm Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cpassword}
                name="cpassword"
                error={!!touched.cpassword && !!errors.cpassword}
                helperText={touched.cpassword && errors.cpassword}
                sx={{ gridColumn: "span 2" }}
              />
              
            </Box>
            <Box display="flex" justifyContent="start" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                UPDATE PASSWORD
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};


const checkoutSchema = yup.object().shape({
  password: yup.string().required("required"),
  npassword: yup.string().required("required"),
  cpassword: yup.string().required("required"),
  
});
const initialValues = {
  password: "",
  npassword: "",
  cpassword: "",
};

export default Form;
