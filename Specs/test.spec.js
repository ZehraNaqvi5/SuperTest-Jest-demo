const request = require('supertest');
const expectCookies = require('supertest/lib/cookies');


describe('Verify GET and POST API responses',()=> {
    it('Verify the GET API response correctly',async() =>{
        const result = await request('https://jsonplaceholder.typicode.com')
        .get('/posts/1')
        .send()
        .expect(200);
        expect(result.body.id).toEqual(1);
        expect(result.body.userId).toEqual(1);
        expect(result.body.title).toEqual("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
        expect(result.body.body).toEqual("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto")     
})
});
