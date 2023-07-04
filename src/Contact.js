import React, { useState, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify'

const Contact = () => {

    const form = useRef();
    const [pending, setPending] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setPending(true);
        emailjs.sendForm('service_ymt5u48', 'template_aq995uf', form.current, 'kB4JubCI7FdAW4DmC')
            .then((result) => {
                setPending(false);
                console.log(result.text);
                toast.success("Message sent", {
                    position: "top-right",
                    theme: "dark"
                });
                form.current.reset();
            }, (error) => {
                setPending(false);
                toast.error("something went wrong,please try again", {
                    position: "top-right",
                    theme: "dark"
                });
                console.log(error.text);
                form.current.reset();
            });
    };

    return (
        <div>
            <ToastContainer />
            <Container fluid className='contact-container '>
                <Container className=''>
                    <Row className='justify-content-center pt-5 '>
                        <Col lg='4'>
                            <h4 className='text-center text-light mb-5'>Contact<span className='name ms-1'>me</span></h4>
                            <form onSubmit={handleSubmit} ref={form}>
                                <input
                                    type="text"
                                    name='name'
                                    required
                                    placeholder='your name'
                                    className='bg-dark p-2'
                                />
                                <br></br>

                                <input
                                    type="email"
                                    name='email'
                                    required
                                    placeholder='your email'
                                    className='bg-dark mt-5 p-2'
                                />

                                <br></br>
                                <textarea
                                    name='message'
                                    required
                                    placeholder='your message'
                                    className='bg-dark mt-5 p-2'
                                ></textarea>
                                <br></br>
                                <Container className='text-center mt-5'><Button type="submit" className='act-button' disabled={pending ? true : false}>{pending ? ("loading...") : ("Send Message")}</Button></Container>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </Container>

        </div>
    )
}

export default Contact;