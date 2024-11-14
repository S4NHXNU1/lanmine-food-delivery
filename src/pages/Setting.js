import { IconUserSquareRounded,
    IconChevronRight
 } from '@tabler/icons-react';
import { GetCookie } from '../util/Cookie';
import { useRef, useState } from 'react';
import { Modal, Toast } from 'bootstrap';
import LoginModal from '../components/LoginModal';
import UnavailableToast from '../components/UnavailableToast';

export default function Setting() {

    const [reFetch, setReFetch] = useState(false);

    const loginRef = useRef(null);
    const triggerLogin = () => {
        const modalElement = loginRef.current;
        if (modalElement) {
            const modalInstance = Modal.getOrCreateInstance(modalElement);
            modalInstance.show();
        }
    };

    const toastRef = useRef(null);
    const triggerToast = () => {
        const toastElement = toastRef.current;
        if (toastElement) {
            const toastInstance = Toast.getOrCreateInstance(toastElement);
            toastInstance.show();
        }
    };

  return (
    <div className="d-flex flex-column">
        <div className="d-flex flex-row text-start bg-white p-3 pt-0" style={{cursor: 'pointer', borderBottom: '0.5rem solid #ededed'}}
        onClick={triggerToast}>
            <IconUserSquareRounded stroke={2} style={{width: '5rem', height: '5rem'}} className='me-3 text-secondary' />
            <div className='d-flex flex-column my-auto'>
                <h3 className='text-success'><b>{GetCookie("role") === 'admin' ? "Jesus" : GetCookie("role") === 'restaurant' ? "McDonald's" : "Sanhanut"}</b></h3>
                <div className='d-flex flex-row'>
                    <p className='mb-0 text-secondary'>Edit my Profile</p> <IconChevronRight className='my-auto text-secondary' stroke={2}/>
                </div>
            </div>
        </div>
        {GetCookie("role") === 'admin' ? 
        <div className="d-flex flex-row justify-content-between border-bottom bg-white p-4" style={{cursor: 'pointer'}}
        onClick={() => {window.location.href = '/manageusers'}}>
            <p className='mb-0'>Manage Users</p>
            <IconChevronRight className='my-auto text-secondary' stroke={2}/>
        </div>
        : GetCookie("role") === 'restaurant' ?
        <div className="d-flex flex-row justify-content-between border-bottom bg-white p-4" style={{cursor: 'pointer'}}
        onClick={() => {window.location.href = '/editmcdonald'}}>
            <p className='mb-0'>My Restaurant</p>
            <IconChevronRight className='my-auto text-secondary' stroke={2}/>
        </div>
        :
        <div className="d-flex flex-row justify-content-between border-bottom bg-white p-4" style={{cursor: 'pointer'}}
        onClick={triggerToast}>
            <p className='mb-0'>Favorite Restaurant</p>
            <IconChevronRight className='my-auto text-secondary' stroke={2}/>
        </div>}
        <div className="d-flex flex-row justify-content-between border-bottom bg-white p-4" style={{cursor: 'pointer'}}
        onClick={triggerToast}>
            <p className='mb-0'>My Address</p>
            <IconChevronRight className='my-auto text-secondary' stroke={2}/>
        </div>
        <div className="d-flex flex-row justify-content-between border-bottom bg-white p-4" style={{cursor: 'pointer'}}
        onClick={triggerToast}>
            <p className='mb-0'>My Payment Methods</p>
            <IconChevronRight className='my-auto text-secondary' stroke={2}/>
        </div>
        <div className="d-flex flex-row justify-content-center border-bottom bg-white p-4 text-danger" style={{cursor: 'pointer'}}
        onClick={triggerLogin}>
            <b className='mb-0'>Logout</b>
        </div>
        <LoginModal ref={loginRef} sendBack={() => setReFetch(prev => !prev)} />
        <UnavailableToast ref={toastRef} />
    </div>
  );
}