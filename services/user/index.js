const fs = require("fs");

// getting the access for global database
const users = require(global.users_db);

// providing the services for method implementations
const user_service = {
    get(req, res) {
        return users;
    },
    insert(req, res) {
        let new_id = genRandId(4);

        const body = req.body;

        const user = {
            ownerName: body.ownerName,
            ownerPhone: body.ownerPhone,
            ownerLocation: body.ownerLocation,
            carModel: body.carModel,
            carYear: body.carYear,
            transmission: body.transmission,
            carPrice: body.carPrice,
        };

        users.push({
            id: new_id,
            user: user,
        });

        writeToFile(users);

        return {
            id: new_id,
            user: user,
        };
    },
};

// devising the special function for overwriting the database file for updating the contents of database
let writeToFile = async (users) => {
    await fs.writeFileSync(
        global.users_db,
        JSON.stringify(users, null, 4),
        "utf8"
    );
};
// generating the random values for IDs of elements in database
let genRandId = (count) => {
    let result = "";
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < count; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return result;
};

// exporting services
module.exports = user_service;