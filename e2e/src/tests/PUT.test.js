import {expect, test} from '@playwright/test';

test('update user post', async ({request}) => {
  const response = await request.put('/posts/1', {
    data: {
      userId: 1,
      title: 'Updated Post',
      body: 'This is an updated post',
    },
  });
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  expect(await response.json()).toEqual(
    expect.objectContaining({
      'title': 'Updated Post',
      'body': 'This is an updated post',
      'userId': 1,
      'id': 1
    })
  );
});

test('update user post that does not exist', async ({request}) => {
  const response = await request.put('/posts/200', {
    data: {
      userId: 1,
      title: 'Updated Post',
      body: 'This is an updated post',
    },
  });
  expect(response.ok()).toBeFalsy();
  expect(response.status()).toBe(500);
  expect(response.statusText()).toBe('Internal Server Error');
  expect(await response.text()).toContain(`Cannot read properties of undefined (reading 'id')`);
});