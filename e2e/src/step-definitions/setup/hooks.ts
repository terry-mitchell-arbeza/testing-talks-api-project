import {Before} from '@cucumber/cucumber';
import {ScenarioWorld} from './world';

Before(async function (this: ScenarioWorld, scenario) {
  console.log(`Running cucumber scenario: ${scenario.pickle.name}`);
  return await this.init();
});