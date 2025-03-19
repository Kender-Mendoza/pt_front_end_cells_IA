import * as yup from 'yup'

// type i18n = (locale: string, value?: { }) => string

export const recordSchema = (t) => {
  return yup.object({
    name: yup.string()
      .required(t("validations.record_schema.required")),

    last_name: yup.string(),

    password: yup.string()
      .max(20, t("validations.record_schema.max", { max: 20 }))
      .required(t("validations.record_schema.required")),

    comfirm_password: yup.string()
      .oneOf([yup.ref("password")], t("validations.record_schema.oneOf"))
      .required(t("validations.record_schema.required")),

    birth_date: yup.date()
      .typeError(t("validations.record_schema.dateInvalid"))
      .required(t("validations.record_schema.required")),

    interests: yup.array()
      .of(yup.string().oneOf(["Leer", "Escribir", "Programar"]))
      .min(1, t("validations.record_schema.minSelect", { min: 1 })),

    recibe_info: yup.boolean(),

    email: yup.string()
      .email(t("validations.record_schema.email"))
      .when("receiveInfo", {
        is: true,
        then: (schema) => schema.required(t("validations.record_schema.required")),
        otherwise: (schema) => schema.notRequired(),
      }),
  })
}
