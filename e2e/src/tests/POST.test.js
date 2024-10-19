import {expect, test} from '@playwright/test';

test("create user post", async ({request}) => {
    const response = await request.post("/posts", {
        data: {
            userId: 1,
            title: 'New Post',
            body: 'This is a new post',
        },
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(201);
    expect(await response.json()).toEqual((expect.objectContaining({
                "title": "New Post",
                "body": "This is a new post",
                "userId": 1,
                "id": 101
            }
        )
    ));
});
