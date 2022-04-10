import { connectToDatabase } from "../../lib/mongodb";


export default async function handler(req, res) {
    const { db } = await connectToDatabase();

    switch (req.method) {
        case "GET":
            const movies = await db
                .collection("movies")
                .find({})
                .sort({ metacritic: -1 })
                .limit(20)
                .toArray();
            res.json(movies);
            break;
        case "POST":
            const post = await db
                .collection("movies")
                .find({})
                .sort({ metacritic: -1 })
                .limit(1)
                .toArray();
            res.json(post);
            break;
        case "PUT":
            const put = await db
                .collection("movies")
                .find({})
                .sort({ metacritic: -1 })
                .limit(2)
                .toArray();
            res.json(put);
            break;

        default:
            res.status(400).json({ error: "Hata" });
            break;
    }
}

