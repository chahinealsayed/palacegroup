/**
 * pagination.vue Startup File
 *
 * @project palacegroup1
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Monday, September 25, 2023 at 09:58 AM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/pagination.vue"
import bootstrap from "../bootstrap/pagination"

const app = createApp("pagination", AppComponent)
bootstrap(app)
app.mount()
