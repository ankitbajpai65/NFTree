import * as Yup from "yup";

export const generateReportSchema = Yup.object().shape({
  growthRate: Yup.string().required("Please fill this field"),
  co2Absorption: Yup.string().required("Please fill this field"),
  o2Emission: Yup.string().required("Please fill this field"),
  leafHealth: Yup.string().required("Please fill this field"),
  rootHealth: Yup.string().required("Please fill this field"),
});
