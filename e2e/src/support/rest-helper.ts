import { APIRequestContext, APIResponse } from 'playwright'
import { GlobalConfig, GlobalAPIResponseVariables } from '../env/global'
import {retireveHostURL} from './host-helper'
import {payloadExists} from './payload-helper'

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

export const deleteResponse = async (
    request: APIRequestContext,
    route: string,
    globalConfig: GlobalConfig,
    globalAPIResponseVariables: GlobalAPIResponseVariables
): Promise<APIResponse> => {

    const url = retireveHostURL(globalConfig)

    const response = await request.delete(`${url}${route}`)

    globalAPIResponseVariables.response = response

    return response

}

export const postResponse = async (
    request: APIRequestContext,
    route: string,
    jsonPayloadName: string,
    globalConfig: GlobalConfig,
    globalAPIResponseVariables: GlobalAPIResponseVariables
): Promise<APIResponse> => {

    const url = retireveHostURL(globalConfig)

    const payload = payloadExists(globalConfig.jsonPayloadMappings[jsonPayloadName])

    const response = await request.post(`${url}${route}`, {data: payload})

    globalAPIResponseVariables.response = response

    return response

}

export const patchResponse = async (
    request: APIRequestContext,
    route: string,
    jsonPayloadName: string,
    globalConfig: GlobalConfig,
    globalAPIResponseVariables: GlobalAPIResponseVariables
): Promise<APIResponse> => {

    const url = retireveHostURL(globalConfig)

    const payload = payloadExists(globalConfig.jsonPayloadMappings[jsonPayloadName])

    const response = await request.patch(`${url}${route}`, {data: payload})

    globalAPIResponseVariables.response = response

    return response

}

export const putResponse = async (
    request: APIRequestContext,
    route: string,
    jsonPayloadName: string,
    globalConfig: GlobalConfig,
    globalAPIResponseVariables: GlobalAPIResponseVariables
): Promise<APIResponse> => {

    const url = retireveHostURL(globalConfig)

    const payload = payloadExists(globalConfig.jsonPayloadMappings[jsonPayloadName])

    const response = await request.put(`${url}${route}`, {data: payload})

    globalAPIResponseVariables.response = response

    return response

}