import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import React, { useCallback } from 'react';
import { useInput } from '../pages/signup';

const LoginForm = () => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onSubmitForm = useCallback(e => {
    e.preventDefault();
    console.log({
      id, password,
    });
  }, [id, password]);
  return (
    <Form onSubmit={onSubmitForm}>
      <div>
        <label htmlFor="user-id">id</label>
        <br/>
        <Input name="user-id" required value={id} onChange={onChangeId} />
      </div>
      <div>
        <label htmlFor="user-password">password</label>
        <br/>
        <Input name="user-password" type="password" required value={password} onChange={onChangePassword} />
      </div>
      <div>
        <Button type="primary" htmlType="submit" loading={false}>Login</Button>
        <Link href="/signup"><a><Button>Signup</Button></a></Link>
      </div>
    </Form>
  );
};

export default LoginForm;