import { Then } from '@cucumber/cucumber';
import { ScenarioWorld } from '../setup/world';
import {expect} from '@playwright/test';

Then(/^the response was (successful)?(unsuccessful)?$/,
  async function (this: ScenarioWorld, successful: string, unsuccessful: string) {
    const {
      globalAPIResponseVariables
    } = this;

    console.log(`The response was ${successful ? 'successful': 'unsuccessful'}`);

    const response = globalAPIResponseVariables.response;

    if(unsuccessful) {
      expect(response.ok()).toBeFalsy();
    } else {
      expect(response.ok()).toBeTruthy();
    }
  }
)