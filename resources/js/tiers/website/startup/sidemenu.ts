/**
 * sidemenu.vue Startup File
 *
 * @project palacegroup1
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Sunday, September 17, 2023 at 12:53 PM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/sidemenu.vue"
import bootstrap from "../bootstrap/sidemenu"

const app = createApp("sidemenu", AppComponent)
bootstrap(app)
app.mount()
