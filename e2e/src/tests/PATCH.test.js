import {expect, test} from '@playwright/test'

test('update user post', async ({request}) => {
  const response = await request.patch('/posts/1', {
    data: {
      title: 'Updated Post',
      body: 'This is an updated post',
    },
  })
  expect(response.ok()).toBeTruthy()
  expect(response.status()).toBe(200)
  expect(await response.json()).toEqual((expect.objectContaining({
    'title': 'Updated Post',
    'body': 'This is an updated post',
    'userId': 1,
    'id': 1
  }
  )
  ))
})