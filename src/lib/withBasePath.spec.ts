import getConfig from 'next/config';
import withBasePath from './withBasePath';

jest.mock('next/config');

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore, not part of original signature.
getConfig.update({ BASE_PATH: '/some_path' });

describe('withBasePath', () => {
  it('should prefix basePath', () => {
    const result = withBasePath('/test');

    expect(result).toBe('/some_path/test');
  });
});
