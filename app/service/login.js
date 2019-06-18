const mydb = require("../helper/mydb");
const jwt = require("jwt-simple");
const config = require("config");
const Config = config.get("Config");

class Login {
  async singin(userId, password) {
    const result = await mydb.doQuery(
      `select * 
       from user 
      where userId = '${userId}' 
        and password = '${password}' `
    );
    if (result) {
      return {
        success: true,
        token: jwt.encode(result, Config.auth.jwtSecret)
      };
    } else {
      return {
        success: false,
        error: "Login fail"
      };
    }
  }
}

const login = new Login();
module.exports = login;
