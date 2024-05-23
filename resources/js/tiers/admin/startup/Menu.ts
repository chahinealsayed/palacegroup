/**
 * Menu.vue Startup File
 *
 * @project palacegroup1
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Saturday, September 16, 2023 at 06:08 PM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/Menu.vue"
import bootstrap from "../bootstrap/Menu"

const app = createApp("menu", AppComponent)
bootstrap(app)
app.mount()
