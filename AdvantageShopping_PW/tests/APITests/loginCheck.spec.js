import test from "@playwright/test";
import { CommonAPICalls } from "../../pages/CommonAPICalls";

let commonAPICalls;
var url = process.env.restUrl;

test.beforeEach(async () => {
    commonAPICalls = new CommonAPICalls();
})

let token;

test.describe('Run login test from api', { annotation: {
        type: 'api',
        description: 'post call to login' },}, () => {

    test('post call to login and fetch token', async () => {
        token = await commonAPICalls.loginAPI(url, "Aks54aa", "Password123", "aksha@yopmail.com");

        console.log(token)
    });

});