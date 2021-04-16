const request = require("request-promise");
const API_URL = "https://block-temporary-email.com/check/email/";

const check_validity = async (email) => {
    try {
        let answer = JSON.parse(await request(API_URL + email));
        if(answer.temporary || !answer.dns)
            return "Email non valida";
    } catch (ex) {
        return ex.message ;
    }
}

exports.check_validity=check_validity;