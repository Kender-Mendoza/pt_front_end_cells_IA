import { createI18n } from "vue-i18n";
import validationsEs from "./es/validations.json";

const messages = {
  es: {
    validations: validationsEs
  }
}

export default createI18n({
  locale: "es",
  messages
});
