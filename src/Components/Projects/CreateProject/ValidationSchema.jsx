import * as Yup from "yup";

export const createProjectSchema = Yup.object({
  name: Yup.string().min(3).max(25).required("Please Enter Project Name"),
  description: Yup.string()
    .min(100)
    .max(300)
    .required("Please Enter Project Description"),
  plant_types: Yup.string().required("Please Enter Plant Types"),
  area: Yup.string().required("Please Enter Plantation Area"),
  plant_planned: Yup.string().required("Please Enter No of Plants Planned"),
  donation: Yup.string().required("Please Enter Donation per Plant"),
  address: Yup.string().required("Please Enter Address"),
  city: Yup.string().required("Please Enter City"),
  country: Yup.string().required("Please Enter Country"),
  document: Yup.string().required("Please Upload Documents"),
  image: Yup.string().required("Please Upload Image"),
});
