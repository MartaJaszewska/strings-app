import { getClient } from "@/db"
import bcrypt from "bcrypt"

async function loadAdminUser(username: string, password: string) {
    const saltRound = 10
    const hash  = await bcrypt.hash(password, saltRound)
    const client =  getClient()
    await client.connect()
    await client.query("insert into public.users (username, password, is_admin) values ($1, $2, $3)",
        [username, hash, true]
    )
}

loadAdminUser(process.argv[2], process.argv[3])


