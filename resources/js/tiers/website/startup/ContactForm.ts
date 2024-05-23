/**
 * ContactForm.vue Startup File
 *
 * @project palacegroup1
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Wednesday, September 20, 2023 at 09:40 AM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/ContactForm.vue"
import bootstrap from "../bootstrap/ContactForm"

const app = createApp("contactform", AppComponent)
bootstrap(app)
app.mount()
