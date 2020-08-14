export default (req, res) => {
    let uuid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(uuid))
}