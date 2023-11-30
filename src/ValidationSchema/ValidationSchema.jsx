import * as Yup from "yup";

export const createProjectSchema = Yup.object().shape({
  name: Yup.string().min(3).max(25).required("Please Enter Project Name"),
  description: Yup.string()
    .min(200)
    .max(1000)
    .required("Please Enter Project Description"),
  plant_types: Yup.string().required("Please Enter Plant Type"),
  // plant_images: Yup.array()
  //   .of(Yup.string().required("Please Upload Image"))
  //   .min(1, "Please Upload Image"),
  area: Yup.string().required("Please Enter Plantation Area"),
  plant_planned: Yup.string().required("Please Enter No of Plants Planned"),
  donation: Yup.string().required("Please Enter Donation per Plant"),
  address: Yup.string().required("Please Enter Address"),
  city: Yup.string().required("Please Enter City"),
  country: Yup.string().required("Please Enter Country"),
  document: Yup.string().required("Please Upload Documents"),
  image: Yup.string().required("Please Upload Image"),
});

export const contactUsSchema = Yup.object().shape({
  full_name: Yup.string().min(5).max(30).required("Please Enter Full Name"),
  email: Yup.string().email().required("Enter Email"),
  message: Yup.string().min(30).max(500).required("Please Enter Message"),
});
