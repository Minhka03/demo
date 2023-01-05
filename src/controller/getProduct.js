import conn from "../configs/connectDB"


const getProduct = async (req, res, next) => {
    const [rows, field] = await conn.execute("SELECT * FROM categories")
    return res.render('home', { data: rows })
}

export default getProduct