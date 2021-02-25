import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default function withBasePath(str: string) {
  return publicRuntimeConfig.BASE_PATH + str;
}
