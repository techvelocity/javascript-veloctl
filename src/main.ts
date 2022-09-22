import {downloadVersion, resolveVersion} from './download'
export {createOrUpdate} from './veloctl'

type DownloadResult = {
  path: string
  version: string
}

export async function download(
  requestedVersion?: string
): Promise<DownloadResult> {
  const version = await resolveVersion(requestedVersion)
  const path = await downloadVersion(version)

  return {
    path,
    version
  }
}
