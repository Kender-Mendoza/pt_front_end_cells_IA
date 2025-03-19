import * as yup from 'yup'

export const recordSchema = yup.object({
  name: yup.string().required("El nombre es obligatorio"),
  last_name: yup.string().required("El nombre es obligatorio"),
  password: yup.string().required("Campo requerido"),
  comfirm_password: yup.string().required("Campo requerido"),
  birth_date: yup.string().required("Campo requerido")
})
