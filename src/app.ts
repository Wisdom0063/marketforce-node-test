"use strict"

import { createApp } from "./lib"
import { errorHandler } from "./middleware"
import { transferRouter , AppRoutes} from "./routes"
export const app = createApp()
app.use(AppRoutes.transfers, transferRouter)
app.use(errorHandler)