import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const onChange = e => {
    const {
      target: { value }
    } = e;

    setValue(value);
  }

  return { value, onChange };
}

const Signup = () => {
  const userId = useInput('');
  const nick = useInput('');
  const password = useInput('');
  const passwordCheck = useInput('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onChangeTerm = (e) => setTerm(e.target.checked);
  const onSubmit = (e) => {
    e.preventDefault();
    setPasswordError(password.value !== passwordCheck.value);
    setTermError(!term);

    console.log(userId.value, nick.value, password.value, passwordCheck.value, term.value);
  };

  return (
    <>
      <Head>
        <title>Next SNS</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js"/>
      </Head>
      <AppLayout>
        <Form onSubmit={onSubmit} style={{ padding: 10 }}>
          <div>
            <label htmlFor="user-id">ID</label>
            <br/>
            <Input name="user-id" required {...userId} />
          </div>
          <div>
            <label htmlFor="user-nick">Nick Name</label>
            <br/>
            <Input name="user-nick" required {...nick} />
          </div>
          <div>
            <label htmlFor="user-password">Password</label>
            <br/>
            <Input name="user-password" type="password" {...password} />
          </div>
          <div>
            <label htmlFor="user-password-check">Password Check</label>
            <br/>
            <Input name="user-password-check" type="password" {...passwordCheck} />
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

      </AppLayout>
    </>
  );
};

export default Signup;