import { env } from '../env/parseEnv'

export const payloadExists = (jsonPayload: any): any => {
    if (jsonPayload === undefined) {
        throw Error(`🧨 JSON Payload not defined in ${env('JSON_PAYLOAD_PATH')} 🧨`)
    }
    return jsonPayload
}