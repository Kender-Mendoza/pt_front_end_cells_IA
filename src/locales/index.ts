import { createI18n } from "vue-i18n";
import validationsEs from "./es/validations.json";
import viewsEs from "./es/views.json"
import componentsEs from "./es/components.json"

const messages = {
  es: {
    components: componentsEs,
    validations: validationsEs,
    views: viewsEs,
  }
}

export default createI18n({
  locale: "es",
  messages
});
