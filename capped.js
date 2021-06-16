db.createCollection("logs", {
    capped: true,
    size: 2048,
    max: 5
})