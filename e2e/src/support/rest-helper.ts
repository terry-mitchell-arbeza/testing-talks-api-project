import { APIRequestContext, APIResponse } from 'playwright'
import { GlobalConfig, GlobalAPIResponseVariables } from '../env/global'
import {retireveHostURL} from './host-helper'

export const getResponse = async (
  request: APIRequestContext,
  route: string,
  globalConfig: GlobalConfig,
  globalAPIResponseVariables: GlobalAPIResponseVariables
): Promise<APIResponse> => {

  const url = retireveHostURL(globalConfig)

  const response = await request.get(`${url}${route}`)

  globalAPIResponseVariables.response = response

  return response

}