import { aui } from './jest.setup';

describe('annotate your screen with askui', () => {
  it('should annotate the screen', async () => {
    await aui.annotate({ fileNamePrefix: 'annotate-with-command-line-' });
  });
});
