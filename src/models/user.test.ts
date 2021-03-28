import mockingoose = require ("mockingoose");
import { User } from './user';

describe('User', () => {
  it('new', () => {
    const user = new User({email: "user@hoge.com"});
    expect(user).not.toBeNull();
    expect(user.email).toBe('user@hoge.com');
  });
  it('save', async () => {
    const user = new User({email: "user@hoge.com"});
    await user.save();
  });
  it('find', async () => {
    const user = new User({email: "user@hoge.com"});
    mockingoose(User).toReturn(user, 'findOne');
    await user.save();
    const result = await User.findOne();
    expect(result).not.toBeNull();
    expect(result).toBe(user);
  });
});
