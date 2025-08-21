import { expect } from "@playwright/test";

export class RestAPI {

    async loginAPI(request, url, userName, email, password) {

        expect(url, 'Url value must be set').toBeTruthy();
        const response = await request.post(url, {
            data: {
                "email": email,
                "loginPassword": password,
                "loginUser": userName
            },
            headers : {
                "Content-Type" : "application/json",
                "accept" : "*/*"
            }, 
            ignoreHTTPSerrors: true,
        });
        expect(response.status()).toBe(200);
        let result = await response.body().then(b => { let result = JSON.parse(b.toString()); return result; });
        result = JSON.parse(JSON.stringify(result));

        console.log(result)

        expect(result.statusMessage.reason).toBe("Login Successful");
        return result.statusMessage.token;
    }


}