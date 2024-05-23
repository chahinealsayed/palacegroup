/**
 * instagram.vue Startup File
 *
 * @project palacegroup1
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Sunday, September 17, 2023 at 11:50 AM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/instagram.vue"
import bootstrap from "../bootstrap/instagram"

const app = createApp("instagram", AppComponent)
bootstrap(app)
app.mount()
