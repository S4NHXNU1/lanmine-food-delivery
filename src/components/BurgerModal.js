import { forwardRef, useState, useEffect } from "react";
import { 
    IconSquareRoundedPlusFilled, 
    IconSquareRoundedMinusFilled } 
from "@tabler/icons-react";
import { GetCookie, SetCookie } from "../util/Cookie";

const BurgerModal = forwardRef((props, ref) => {
    const [qty, setQty] = useState(1);
    SetCookie('BigMacCartQTY', `${qty}`);

    const { sendBack } = props;

    const reduceQTY = () => {
        if (qty > 0) {
            if(GetCookie('Cart') !== '1' && qty === 1) return;
            setQty(qty - 1);
            SetCookie('BigMacCartQTY', `${qty}`);
        }
    }

    const increaseQTY = () => {
        setQty(qty + 1);
        SetCookie('BigMacCartQTY', `${qty}`);
    }

    const addToCart = () => {
        SetCookie('Cart', '1');
        sendBack();
    }

    const removeFromCart = () => {
        SetCookie('Cart', '0');
        SetCookie('BigMacCartQTY', '1');
        setQty(1);
        sendBack();
    }

    return (
        <div ref={ref} class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel"><b>Big Mac</b></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex flex-column align-items-center">
                        <img 
                            src='/pics/BigMac.png'
                            style={{ width: '100px', height: '100px', left: '0' , objectFit: 'cover' }}
                        />
                        <p className='mb-0 text-start text-secondary' style={{fontSize: '0.8rem'}}>A double chease & patty burger</p>
                        <div className="w-100 mt-3">
                            <label for='note' style={{fontSize: '0.8rem'}}><b>Additional Request</b></label>
                            <input id='note' type="text" class="form-control border-start-0" placeholder="E.g., No veggies"></input>
                        </div>
                    </div>
                    <div class="modal-footer d-flex flex-row">
                        <IconSquareRoundedMinusFilled style={{cursor: 'pointer'}} onClick={reduceQTY} />
                        <span className="col-1 mb-0 mt-0 text-center">{GetCookie('BigMacCartQTY')}</span>
                        <IconSquareRoundedPlusFilled style={{cursor: 'pointer'}} onClick={increaseQTY} />
                        {GetCookie('BigMacCartQTY') === '0' ? 
                        <button type="button" data-bs-dismiss="modal" className="col btn btn-danger border-0 px-3" onClick={removeFromCart}>
                            <b className="mb-0">Remove</b>
                        </button> : <button type="button" data-bs-dismiss="modal" className="col btn btn-success border-0 d-flex flex-row justify-content-between px-3" onClick={addToCart}>
                            <b className="mb-0">{GetCookie("Cart") === '0' ? "Add to basket" : "Update"}</b>
                            <b className="mb-0">฿{139 * qty}</b>
                        </button>}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default BurgerModal;