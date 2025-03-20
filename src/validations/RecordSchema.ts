import * as yup from 'yup'
import type { TFunction } from '@/types/TfunctionType.ts'

export const recordSchema = (t: TFunction) => {
  return yup.object({
    name: yup.string().required(t('validations.record_schema.required')),

    last_name: yup.string(),

    password: yup
      .string()
      .max(20, t('validations.record_schema.max', { max: 20 }))
      .required(t('validations.record_schema.required')),

    comfirm_password: yup
      .string()
      .oneOf([yup.ref('password')], t('validations.record_schema.one_of'))
      .required(t('validations.record_schema.required')),

    birth_date: yup
      .date()
      .typeError(t('validations.record_schema.date_invalid'))
      .required(t('validations.record_schema.required')),

    interests: yup
      .array()
      .of(yup.string().oneOf(['Leer', 'Escribir', 'Programar']))
      .min(1, t('validations.record_schema.min_select', { min: 1 })),

    receive_info: yup.boolean().default(true),

    email: yup
      .string()
      .email(t('validations.record_schema.email'))
      .when('receive_info', {
        is: true,
        then: (schema) => schema.required(t('validations.record_schema.required')),
        otherwise: (schema) => schema.notRequired(),
      }),
  })
}
