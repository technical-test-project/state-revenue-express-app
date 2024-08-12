import express from 'express'
import 'dotenv/config';

const app = express()

app.get("/", (req: express.Request, res: express.Response) => {
    return res.status(200).send("Hello World 123")
})

export default app