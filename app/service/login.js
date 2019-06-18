const mydb = require("../helper/mydb");
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
        token: "xxxx"
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
