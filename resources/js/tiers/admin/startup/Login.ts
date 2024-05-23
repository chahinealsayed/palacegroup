/**
 * Login.vue Startup File
 *
 * @project palacegroup1
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Saturday, September 16, 2023 at 06:08 PM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/Login.vue"
import bootstrap from "../bootstrap/Login"

const app = createApp("login", AppComponent)
bootstrap(app)
app.mount()
