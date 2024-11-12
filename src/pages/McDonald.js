import McDonaldBanner from "../components/McDonaldBanner";
import { Toast, Modal } from 'bootstrap'
import { useRef } from 'react';
import UnavailableToast from "../components/UnavailableToast";
import BurgerModal from "../components/BurgerModal";

export default function McDonald() {

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
            <BurgerModal ref={modalRef} />
        </div>
    );
}