import React, { useCallback, useState } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';

export function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const onChange = useCallback(e => {
    const {
      target: { value }
    } = e;

    setValue(value);
  }, []);
  return [value, onChange] ;
}

const Signup = () => {
  const [id, onChangeId] = useInput('');
  const [nick, onChangeNick] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onChangeTerm = useCallback((e) => setTerm(e.target.checked), []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    setPasswordError(password !== passwordCheck);
    setTermError(!term);

  }, [password, passwordCheck, term]);

  return (
    <>
      <Form onSubmit={onSubmit} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-id">ID</label>
          <br/>
          <Input name="user-id" required value={id} onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nick">Nick Name</label>
          <br/>
          <Input name="user-nick" required value={nick} onChange={onChangeNick} />
        </div>
        <div>
          <label htmlFor="user-password">Password</label>
          <br/>
          <Input name="user-password" type="password" value={password} onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor="user-password-check">Password Check</label>
          <br/>
          <Input name="user-password-check" type="password" value={passwordCheck} onChange={onChangePasswordCheck} />
          {passwordError && <div style={{ color: 'red' }}>It's not same password</div>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>agreed</Checkbox>
          {termError && <div style={{ color: 'red' }}>must be aggreed to term</div>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">Signup</Button>
        </div>
      </Form>
    </>
  );
};

export default Signup;