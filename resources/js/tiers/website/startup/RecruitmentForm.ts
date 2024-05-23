/**
 * RecruitmentForm.vue Startup File
 *
 * @project palacegroup1
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Wednesday, September 20, 2023 at 03:48 PM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/RecruitmentForm.vue"
import bootstrap from "../bootstrap/RecruitmentForm"

const app = createApp("recruitmentform", AppComponent)
bootstrap(app)
app.mount()
