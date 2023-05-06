import React, { useState } from 'react'
import { Row, Col, Form, InputGroup, Card, Button } from 'react-bootstrap'
import { app } from '../firebaseInit'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'

const LoginPage = ({ history }) => {
    const [loading, setLoding] = useState(false);
    const auth = getAuth(app);
    const [form, setForm] = useState({
        email: 'pink@inha.com',
        password: '12345678'
    });
    const { email, password } = form;
    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const onLogin = () => {
        setLoding(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(success => {
                sessionStorage.setItem('email', email);
                alert('성공!')
                history.push('/');
                setLoding(false);
            })
            .catch(error => {
                alert('에러:' + error.message);
                setLoding(false);
            });
    }

    if (loading) return <h1 className='my-5 text-center'>로딩중......</h1>
    return (
        <Row className='justify-content-center my-5'>
            <Col md={5}>
                <h1 className='text-center'>로그인</h1>
                <Card className='p-3'>
                    <Form>
                        <InputGroup className='my-2'>
                            <InputGroup.Text>이 메 일</InputGroup.Text>
                            <Form.Control value={email}
                                onChange={onChange} name="email" />
                        </InputGroup>
                        <InputGroup className='my-2'>
                            <InputGroup.Text>비밀번호</InputGroup.Text>
                            <Form.Control value={password}
                                onChange={onChange} name="password"
                                type="password" />
                        </InputGroup>
                        <Button
                            onClick={onLogin}
                            className='w-100'>로그인</Button>
                        <div className='text-end my-2'>
                            <Link to='/join'>회원가입</Link>
                        </div>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

export default LoginPage