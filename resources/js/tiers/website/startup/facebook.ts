/**
 * facebook.vue Startup File
 *
 * @project palacegroup1
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Sunday, September 17, 2023 at 11:49 AM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/facebook.vue"
import bootstrap from "../bootstrap/facebook"

const app = createApp("facebook", AppComponent)
bootstrap(app)
app.mount()
