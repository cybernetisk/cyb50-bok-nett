import React from 'react'

interface Props {
  license: string
}

const licenses: {[license: string]: string} = {
  'CC BY-NC 4.0': 'https://creativecommons.org/licenses/by-nc/4.0/'
}

export default function License ({ license }: Props) {
  return <>
    Denne teksten er lisensert med {LicenseTag(license)} lisens.
  </>
}

function LicenseTag (license: string) {
  const licenseUrl = licenses[license]
  return licenseUrl
    ? <a href={licenseUrl}>{license}</a>
    : <span>{license}</span>
}
