const { log } = require("console");
const fs = require("fs")
const user_controller = {
    // controller to read the data
    get_all_cars: async (req, res) => { 
        try {
            console.log("Program works until this point");  
            fs.readFile("./data/users_db.json", "utf8", (error, database) => {
                if (error) {
                    console.error(error);   
                    return res.status(500).send("Error reading JSON file");
                }

                try {
                    const cars_data = JSON.parse(database);
                    console.log(cars_data);
                    res.render("user/all_cars.pug", { cars_data });
                } catch (parseError) {
                    console.error(parseError);
                    res.status(500).send("Error parsing JSON data");
                }
            });
        } catch (error) {
            res.status(500).render('error', { error: error.message });
        }
    },
    // controller to create data
    register: async (req, res) => {
        try {
            res.render("user/main_page.pug"); // opening main_page.pug in the views directory
        } catch (error) {
            res.status(500).render("user/error.pug", { error: error.message }); // opening error.pug
        }
    },
};

// exporting user controllers
module.exports = user_controller;

