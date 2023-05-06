import React, { useState } from 'react'
import { Col, Row, Card, Form, InputGroup, Button } from 'react-bootstrap'

const MyPage = () => {
    const [form, setForm] = useState({
        name: '강민정',
        phone: '010-0000-0000',
        address: '인천 서구 청라동',
        image: 'https://via.placeholder.com/200x200'
    });
    const { name, address, phone, image } = form;
    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const onChangeFile = (e) => {
        setForm({
            ...form,
            image: URL.createObjectURL(e.target.files[0])
        });
    }
    return (
        <Row className='my-5'>
            <Col>
                <h1 className='text-center mb-5'>회원정보</h1>
                <Card className='p-5'>
                    <Form>
                        <InputGroup className='my-2'>
                            <InputGroup.Text className='px-5'>메일</InputGroup.Text>
                            <Form.Control readOnly
                                value={sessionStorage.getItem('email')} />
                        </InputGroup>
                        <InputGroup className='my-2'>
                            <InputGroup.Text className='px-5'>이름</InputGroup.Text>
                            <Form.Control 
                                onChange={onChange} name="name"
                                value={name} />
                        </InputGroup>
                        <InputGroup className='my-2'>
                            <InputGroup.Text className='px-5'>전화</InputGroup.Text>
                            <Form.Control 
                                onChange={onChange} name="phone"
                                value={phone} />
                        </InputGroup>
                        <InputGroup className='my-2'>
                            <InputGroup.Text className='px-5'>주소</InputGroup.Text>
                            <Form.Control 
                                onChange={onChange} name="address"
                                value={address} />
                        </InputGroup>
                        <div>
                            <img src={image} width="25%" />
                            <Form.Control onChange={onChangeFile} type="file" />
                        </div>
                        <div>
                            <Button className='px-5'>정보수정</Button>
                        </div>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

export default MyPage