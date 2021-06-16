db.createCollection("cars", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["model", "year"],
            properties: {
                model: {
                    bsonType: "string",
                    description: "O modelo é necessário e deve ser uma string",
                },
                madeBy: {
                    bsonType: "string",
                    minLength: 2,
                },
                year: {
                    bsonType: "int",
                    minimum: 1980,
                    maximum: 2025,
                },
            },
        },
    },
});
