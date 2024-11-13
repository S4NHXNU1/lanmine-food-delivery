import McDonaldBanner from "../components/McDonaldBanner";
import { Toast, Modal } from 'bootstrap'
import { useRef, useState } from 'react';
import UnavailableToast from "../components/UnavailableToast";
import BurgerModal from "../components/BurgerModal";
import { GetCookie } from "../util/Cookie";
import CheckOutModal from "../components/CheckOutModal";

export default function McDonald() {

    const [reFetch, setReFetch] = useState(false);

    const toastRef = useRef(null);
    const triggerToast = () => {
        const toastElement = toastRef.current;
        if (toastElement) {
            const toastInstance = Toast.getOrCreateInstance(toastElement);
            toastInstance.show();
        }
    };

    const modalRef = useRef(null);
    const triggerModal = () => {
        const modalElement = modalRef.current;
        if (modalElement) {
            const modalInstance = Modal.getOrCreateInstance(modalElement);
            modalInstance.show();
        }
    };

    const checkOutRef = useRef(null);
    const triggerCheckOut = () => {
        const checkOutElement = checkOutRef.current;
        if (checkOutElement) {
            const checkOutInstance = Modal.getOrCreateInstance(checkOutElement);
            checkOutInstance.show();
        }
    };

    return (
        <div className="d-flex flex-column">
            <McDonaldBanner />
            <div class="btn btn-light flex-grow-1 card my-3" onClick={triggerModal}>
                <div class="card-body d-flex flex-row justify-content-between">
                    <div className='d-flex flex-row'>
                        <img 
                            src='/pics/BigMac.png'
                            style={{ width: '100px', height: '100px', left: '0' , objectFit: 'cover' }}
                        />
                        <div className='d-flex flex-column ms-4 my-auto'>
                            <h5 className='mb-0 text-start'><b>Big Mac</b></h5>
                            <p className='mb-0 text-start text-secondary' style={{fontSize: '0.8rem'}}>A double chease & patty burger</p>
                            <b className='mb-0 text-start mt-4'>฿139</b>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn btn-light flex-grow-1 card my-3" onClick={triggerToast}>
                <div class="card-body d-flex flex-row justify-content-between">
                    <div className='d-flex flex-row'>
                        <img 
                            src='/pics/McFriedChicken.png'
                            style={{ width: '100px', height: '100px', left: '0' , objectFit: 'cover' }}
                        />
                        <div className='d-flex flex-column ms-4 my-auto'>
                            <h5 className='mb-0 text-start'><b>Mc Fried Chicken</b></h5>
                            <p className='mb-0 text-start text-secondary' style={{fontSize: '0.8rem'}}>A very chrispy & spicy fried chicken</p>
                            <b className='mb-0 text-start mt-4'>฿59</b>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn btn-light flex-grow-1 card my-3" onClick={triggerToast}>
                <div class="card-body d-flex flex-row justify-content-between">
                    <div className='d-flex flex-row'>
                        <img 
                            src='/pics/McFriedChickenSet.png'
                            style={{ width: '100px', height: '100px', left: '0' , objectFit: 'cover' }}
                        />
                        <div className='d-flex flex-column ms-4 my-auto'>
                            <h5 className='mb-0 text-start'><b>Mc Fried Chicken Double Set</b></h5>
                            <p className='mb-0 text-start text-secondary' style={{fontSize: '0.8rem'}}>A very chrispy & spicy fried chicken set for two people</p>
                            <b className='mb-0 text-start mt-4'>฿129</b>
                        </div>
                    </div>
                </div>
            </div>
            <UnavailableToast ref={toastRef} />
            <BurgerModal ref={modalRef} sendBack={() => setReFetch(prev => !prev)} />
            <CheckOutModal ref={checkOutRef} sendBack={() => setReFetch(prev => !prev)} />
            {GetCookie('Cart') === '1' ? <div className="d-flex flex-row p-4 bg-white position-fixed shadow-lg" style={{height: '90px', width: '100vw', bottom: '0', left: '0'}}>
                <button type="button" class="btn btn-success border-0 d-flex flex-row justify-content-between align-items-center position-fixed" style={{height: '3rem', width: '83vw', right: '1.6rem'}}
                    onClick={triggerCheckOut}
                >
                    <div className="d-flex flex-row">
                        <b className="mb-0 bg-white text-success rounded-3 me-2" style={{width: '2rem'}}>{GetCookie('BigMacCartQTY')}</b>
                        <b className="mb-0">My basket</b>
                    </div>
                    <b className="mb-0">฿{Number(GetCookie('BigMacCartQTY')) * 139}</b>
                </button>
            </div> : null}
        </div>
    );
}