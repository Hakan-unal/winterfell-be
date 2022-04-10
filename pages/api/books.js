export default function handler(req, res) {
    switch (req.method) {
        case "POST": res.status(200).json({ name: 'post method' }); break;
        case "GET": res.status(200).json({ name: 'get method' }); break;
        case "PUT": res.status(200).json({ name: 'put method' }); break;
        case "DELETE": res.status(200).json({ name: 'delete method' }); break;
        default: res.status(400).json({ name: 'error' }); break;
    }
}