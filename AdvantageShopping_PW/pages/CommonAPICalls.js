import { request } from "@playwright/test";
import { RestAPI } from "../utils/RestAPI";

export class CommonAPICalls{
    constructor(){
        this.restAPICall = new RestAPI();
    }

    async loginAPI(url, userName, password, email){
        const apiContext = await request.newContext();
        return await this.restAPICall.loginAPI(apiContext, url, userName, email, password);
    }
}