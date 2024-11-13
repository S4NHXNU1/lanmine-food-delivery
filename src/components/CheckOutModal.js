import { forwardRef } from "react";
import { 
    IconMapPin,
    IconChevronRight,
    IconNotes,
    IconCreditCardFilled } 
from "@tabler/icons-react";
import { GetCookie, SetCookie } from "../util/Cookie";
import UnavailableToast from "./UnavailableToast";
import InvalidToast from "./InvalidToast";
import { useRef, useState } from "react";
import { Toast } from "bootstrap";

const CheckOutModal = forwardRef((props, ref) => {

    const [cardNo, setCardNo] = useState('');
    const [cvv, setCvv] = useState('');
    const [exp, setExp] = useState('');

    const { sendBack } = props;

    const removeCart = () => {
        if(cardNo === '' || cvv === '' || exp === '' || isNaN(parseFloat(cardNo)) || isNaN(parseFloat(cvv))) {
            triggerInvalidToast();
            return;
        }
        SetCookie('Cart', '0');
        SetCookie('BigMacCartQTY', '1');
        sendBack();
        window.location.href = '/mcdonald';
    }

    const toastRef = useRef(null);
    const triggerToast = () => {
        const toastElement = toastRef.current;
        if (toastElement) {
            const toastInstance = Toast.getOrCreateInstance(toastElement);
            toastInstance.show();
        }
    };

    const invalidToast = useRef(null);
    const triggerInvalidToast = () => {
        const toastElement = invalidToast.current;
        if (toastElement) {
            const toastInstance = Toast.getOrCreateInstance(toastElement);
            toastInstance.show();
        }
    };

    return (
        <div ref={ref} class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel"><b>Check Out</b></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex flex-column" style={{borderBottom: '0.25rem solid #ededed'}}>
                        <div className="d-flex flex-row justify-content-between">
                            <b style={{fontSize: '0.9rem'}}>Delivery Info</b>
                            <b className="text-success" style={{fontSize: '0.85rem', cursor: 'pointer'}} onClick={() => {
                            window.open('https://www.google.com/maps');
                            }}>Edit</b>
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2" style={{cursor: 'pointer'}} onClick={() => {
                            window.open('https://www.google.com/maps');
                        }}>
                            <div className="d-flex flex-row">
                                <IconMapPin className="my-auto" stroke={2} />
                                <div className="d-flex flex-column ms-2">
                                    <b className="mb-0" style={{fontSize: '0.8rem'}}>1234 Main St. Bangkok</b>
                                    <p className="mb-0 text-secondary" style={{fontSize: '0.8rem'}}>Sanhanut xxx-xxx-xxxx</p>
                                </div>
                            </div>
                            <IconChevronRight className='my-auto' stroke={2} />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2" style={{cursor: 'pointer'}} onClick={triggerToast}>
                            <div className="d-flex flex-row">
                                <IconNotes className="my-auto" stroke={2} />
                                <div className="d-flex flex-column ms-2">
                                    <b className="mb-0" style={{fontSize: '0.8rem'}}>Delivery instructions</b>
                                    <b className="mb-0 text-success" style={{fontSize: '0.8rem'}}>Add your note to rider</b>
                                </div>
                            </div>
                            <IconChevronRight className='my-auto' stroke={2} />
                        </div>
                    </div>
                    <div class="modal-body d-flex flex-column" style={{borderBottom: '0.25rem solid #ededed'}}>
                        <div className="d-flex flex-row justify-content-between">
                            <b style={{fontSize: '0.9rem'}}>My Order</b>
                            <b className="text-success" style={{fontSize: '0.85rem', cursor: 'pointer'}} onClick={() => {
                            window.location.href = '/mcdonald';
                            }}>Add menu</b>
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2 pb-2 border-bottom">
                            <div className="d-flex flex-row">
                                <div className="rounded-3 border-1 me-2" style={{border: 'solid lightgrey', height: 'auto', alignItems: 'center', alignSelf: 'start'}}>
                                    <b className="m-2" style={{fontSize: '0.85rem'}}>{GetCookie('BigMacCartQTY')}</b>
                                </div>
                                <div className="d-flex flex-column">
                                    <b className="mb-0" style={{fontSize: '0.85rem'}}>Big Mac</b>
                                    <p className="mb-0 text-secondary" style={{fontSize: '0.8rem'}}>A double cheese & patty burger</p>
                                    <b className="text-success" style={{fontSize: '0.85rem', cursor: 'pointer'}} onClick={() => {
                                    window.location.href = '/mcdonald';
                                    }}>Edit</b>
                                </div>
                            </div>
                            <p className="mb-0 text-secondary" style={{fontSize: '0.85rem'}}>฿{(Number(GetCookie('BigMacCartQTY')) * 139).toFixed(2)}</p>
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-3">
                            <p className="mb-0" style={{fontSize: '0.85rem'}}>Food</p>
                            <p className="mb-0 text-secondary" style={{fontSize: '0.85rem'}}>฿{(Number(GetCookie('BigMacCartQTY')) * 139).toFixed(2)}</p>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <p className="mb-0" style={{fontSize: '0.85rem'}}>Delivery</p>
                            <p className="mb-0 text-secondary" style={{fontSize: '0.85rem'}}>฿0.00</p>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <b className="mb-0 text-success" style={{fontSize: '0.85rem'}}>Total</b>
                            <b className="mb-0 text-success" style={{fontSize: '0.85rem'}}>฿{(Number(GetCookie('BigMacCartQTY')) * 139).toFixed(2)}</b>
                        </div>
                    </div>
                    <div class="modal-body d-flex flex-column">
                        <div className="d-flex flex-row justify-content-between border-bottom">
                            <b style={{fontSize: '0.9rem'}}>Coupon</b>
                            <p className="text-secondary" style={{fontSize: '0.85rem', cursor: 'pointer'}} onClick={triggerToast}>
                                Apply coupon
                                <IconChevronRight className='my-auto ms-1' stroke={2} />
                            </p>
                        </div>
                        <b className="mt-3" style={{fontSize: '0.9rem'}}>Payment</b>
                        <div className="row mt-2">
                            <div className="col-5">
                                <div class="input-group">
                                    <div class="input-group-text">
                                        <IconCreditCardFilled /><p className="mb-0 text-danger">*</p>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Text input with checkbox" onChange={(e) => setCardNo(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-3">
                                <div class="input-group">
                                    <div class="input-group-text">
                                        <b style={{fontSize: '0.6rem'}}>CVV</b><p className="mb-0 text-danger">*</p>
                                    </div>
                                    <input type="password" class="form-control" aria-label="Text input with checkbox" onChange={(e) => setCvv(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div class="input-group">
                                    <div class="input-group-text">
                                        <b style={{fontSize: '0.6rem'}}>EXP</b><p className="mb-0 text-danger">*</p>
                                    </div>
                                    <input type="date" class="form-control" aria-label="Text input with checkbox" onChange={(e) => setExp(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer d-flex flex-row">
                        <button type="button" className="col btn btn-success border-0 d-flex flex-row justify-content-between px-3"
                        onClick={removeCart}>
                            <div className="d-flex flex-row">
                                <b className="mb-0 bg-white text-success rounded-3 me-2" style={{width: '2rem'}}>{GetCookie('BigMacCartQTY')}</b>
                                <b className="mb-0">Order Now</b>
                            </div>
                            <b className="mb-0">฿{(Number(GetCookie('BigMacCartQTY')) * 139).toFixed(2)}</b>
                        </button>
                    </div>
                </div>
            </div>
            <UnavailableToast ref={toastRef} />
            <InvalidToast ref={invalidToast} />
        </div>
    );
});

export default CheckOutModal;