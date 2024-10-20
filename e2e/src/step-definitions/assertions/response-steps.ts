import { Then } from '@cucumber/cucumber'
import { ScenarioWorld } from '../setup/world'
import {expect} from '@playwright/test'

Then(
  /^the response was (successful)?(unsuccessful)?$/,
  async function (this: ScenarioWorld, successful: string, unsuccessful: string) {
    const {
      globalAPIResponseVariables
    } = this

    console.log(`The response was ${successful ? 'successful': 'unsuccessful'}`)

    const response = globalAPIResponseVariables.response

    if(unsuccessful) {
      expect(response.ok()).toBeFalsy()
    } else {
      expect(response.ok()).toBeTruthy()
    }
  }
)

Then(
  /^the response status code is (\d+)$/,
  async function (this: ScenarioWorld, statusCode: number) {
    const {
      globalAPIResponseVariables
    } = this

    console.log(`The response status code is ${statusCode}`)

    const response = globalAPIResponseVariables.response

    expect(response.status()).toBe(statusCode)
  })
