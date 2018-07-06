import AppLogger from './Logger';

describe('Logger', () => {
  it('should set context in constructor', () => {
    expect(new AppLogger('ctx').context).toEqual('ctx');
  });
});
