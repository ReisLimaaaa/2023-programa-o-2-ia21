import express from "express"
import routes from "./routes/index.routes"

const PORT = 3000
const app = express()
app.use(routes)

app.listen(PORT, () => console.log(`server is running, on port ${PORT}`))