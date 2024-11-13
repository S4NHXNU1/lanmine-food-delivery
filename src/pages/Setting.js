import { IconUserSquareRounded,
    IconChevronRight
 } from '@tabler/icons-react';
import { GetCookie } from '../util/Cookie';
import { useRef } from 'react';
import { Modal } from 'bootstrap';
import LoginModal from '../components/LoginModal';

export default function Setting() {

    const loginRef = useRef(null);
    const triggerLogin = () => {
        const modalElement = loginRef.current;
        if (modalElement) {
            const modalInstance = Modal.getOrCreateInstance(modalElement);
            modalInstance.show();
        }
    };

  return (
    <div className="d-flex flex-column">
        <div className="d-flex flex-row text-start bg-white p-3 pt-0" style={{cursor: 'pointer', borderBottom: '0.5rem solid #ededed'}}>
            <IconUserSquareRounded stroke={2} style={{width: '5rem', height: '5rem'}} className='me-3 text-secondary' />
            <div className='d-flex flex-column my-auto'>
                <h3 className='text-success'><b>Sanhanut</b></h3>
                <div className='d-flex flex-row'>
                    <p className='mb-0 text-secondary'>Edit my Profile</p> <IconChevronRight className='my-auto text-secondary' stroke={2}/>
                </div>
            </div>
        </div>
        {GetCookie("role") === 'admin' ? 
        <div className="d-flex flex-row justify-content-between border-bottom bg-white p-4" style={{cursor: 'pointer'}}>
            <p className='mb-0'>Manage Users</p>
            <IconChevronRight className='my-auto text-secondary' stroke={2}/>
        </div>
        : GetCookie("role") === 'restaurant' ?
        <div className="d-flex flex-row justify-content-between border-bottom bg-white p-4" style={{cursor: 'pointer'}}>
            <p className='mb-0'>My Restaurant</p>
            <IconChevronRight className='my-auto text-secondary' stroke={2}/>
        </div>
        :
        <div className="d-flex flex-row justify-content-between border-bottom bg-white p-4" style={{cursor: 'pointer'}}>
            <p className='mb-0'>Favorite Restaurant</p>
            <IconChevronRight className='my-auto text-secondary' stroke={2}/>
        </div>}
        <div className="d-flex flex-row justify-content-between border-bottom bg-white p-4" style={{cursor: 'pointer'}}>
            <p className='mb-0'>My Address</p>
            <IconChevronRight className='my-auto text-secondary' stroke={2}/>
        </div>
        <div className="d-flex flex-row justify-content-between border-bottom bg-white p-4" style={{cursor: 'pointer'}}>
            <p className='mb-0'>My Payment Methods</p>
            <IconChevronRight className='my-auto text-secondary' stroke={2}/>
        </div>
        <div className="d-flex flex-row justify-content-center border-bottom bg-white p-4 text-danger" style={{cursor: 'pointer'}}
        onClick={triggerLogin}>
            <b className='mb-0'>Logout</b>
        </div>
        <LoginModal ref={loginRef} />
    </div>
  );
}