// Expose here our fake config for publicRuntimeConfig and others.
let publicRuntimeConfig = {
  BASE_PATH: '',
};

// Keep a copy so we can go back to it when needed
const originalPublicRuntimeConfig = JSON.stringify(publicRuntimeConfig);

export default function mockGetConfig() {
  return {
    publicRuntimeConfig,
  };
}

// Non-spec! used for testing purposes, allows us to change things on runtime
mockGetConfig.update = (obj: Partial<typeof publicRuntimeConfig>) => {
  Object.assign(publicRuntimeConfig, obj);
};

// Non-spec, resets to the original configuration
mockGetConfig.reset = () => {
  publicRuntimeConfig = JSON.parse(originalPublicRuntimeConfig);
};
