import { GlobalConfig} from '../env/global'

export const retireveHostURL = (
  { hostsConfig }: GlobalConfig
): URL => {
  const {
    API_AUTOMATION_HOST: hostname = 'production'
  } = process.env
  const hostPath = hostsConfig[hostname]
  if (!hostPath) {
    throw new Error(`?? Host path for ${hostname} not found ??`)
  }
  return new URL(hostPath)
}