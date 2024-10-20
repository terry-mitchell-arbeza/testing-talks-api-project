import {DataTable, Then} from '@cucumber/cucumber'
import { ScenarioWorld } from '../setup/world'
import {expect} from '@playwright/test'

Then(
  /^the response was (successful)?(unsuccessful)?$/,
  async function (this: ScenarioWorld, successful: string, unsuccessful: string) {
    const {
      globalAPIResponseVariables
    } = this

    console.log(`the response was ${successful ? 'successful': 'unsuccessful'}`)

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

    console.log(`the response status code is ${statusCode}`)

    const response = globalAPIResponseVariables.response

    expect(response.status()).toBe(statusCode)
  }
)

Then(
  /^the response contains the attributes:$/,
  async function (this: ScenarioWorld, dataTable: DataTable) {
    const {
      globalAPIResponseVariables
    } = this

    console.log(`the response contains the attributes: ${dataTable.raw()}`)

    const response = await globalAPIResponseVariables.response.json()

    const expectedResponse = dataTable.raw()

    for(let i = 0; i < expectedResponse.length; i++) {
      const key = expectedResponse[i][0]
      const value = expectedResponse[i][1]
      expect(response[key]?.toString()).toBe(value)
    }

  }
)