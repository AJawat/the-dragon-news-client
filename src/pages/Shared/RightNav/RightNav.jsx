import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div >
            <h4>Login With</h4>
            <Button className='border border-success mb-2 w-100 bg-success bg-opacity-25' variant="light"><FaGoogle /> Login with Google</Button>
            <Button className='border border-success w-100 bg-secondary bg-opacity-25' variant="light"><FaGithub /> Login with Github</Button>
            <div>
                <h4 className='mt-3'>Find Us On</h4>
                <ListGroup as="ul">
                    <ListGroup.Item as="li"><FaFacebook></FaFacebook> FaceBook</ListGroup.Item>
                    <ListGroup.Item as="li"><FaTwitter></FaTwitter> twitter</ListGroup.Item>
                    <ListGroup.Item as="li"><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-3'>
                <QZone></QZone>
            </div>
            <div className=' mt-3'>
                <img className='w-100' src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;