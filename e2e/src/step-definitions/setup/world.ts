import playwright, {APIRequestContext} from 'playwright'
import {IWorldOptions, setWorldConstructor, World} from '@cucumber/cucumber'
import {GlobalAPIResponseVariables, GlobalConfig} from '../../env/global'

export type Api = {
    request: APIRequestContext
}

export class ScenarioWorld extends World {

  constructor(options: IWorldOptions) {
    super(options)

    this.globalAPIResponseVariables = {}
    this.globalConfig = options.parameters as GlobalConfig
  }

  globalConfig: GlobalConfig

  globalAPIResponseVariables: GlobalAPIResponseVariables

  api!: Api;

  [key: string]: any;

  async init(): Promise<Api> {
    const request = await this.newRequest()

    this.api = {
      request
    }

    return this.api
  }

  private newRequest = async (): Promise<APIRequestContext> => {
    return await playwright.request.newContext({
      extraHTTPHeaders: {
        'Content-Type': 'application/json'
      }
    })
  }
}

setWorldConstructor(ScenarioWorld)