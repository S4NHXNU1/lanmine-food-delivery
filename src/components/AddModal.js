import { forwardRef, useState, useRef } from "react";
import { 
    IconPhotoFilled,
    IconAbc,
    IconInfoCircle,
    IconCurrencyBaht
 } 
from "@tabler/icons-react";
import { GetCookie, SetCookie } from "../util/Cookie";
import UnavailableToast from "./UnavailableToast";
import InvalidToast from "./InvalidToast";
import { Toast } from "bootstrap";

const AddModal = forwardRef((props, ref) => {
    const { sendBack } = props;

    const [newName, setNewName] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newPrice, setNewPrice] = useState('');

    const toastRef = useRef(null);
    const triggerToast = () => {
        const toastElement = toastRef.current;
        if (toastElement) {
            const toastInstance = Toast.getOrCreateInstance(toastElement);
            toastInstance.show();
        }
    }

    const invalidToast = useRef(null);
    const triggerInvalidToast = () => {
        const toastElement = invalidToast.current;
        if (toastElement) {
            const toastInstance = Toast.getOrCreateInstance(toastElement);
            toastInstance.show();
        }
    };

    const AddMenu = () => {
        if(newName === '' || newDescription === '' || newPrice === '' || isNaN(Number(newPrice))) {
            triggerInvalidToast();
            return;
        }
        SetCookie("NewMenu", "1");
        SetCookie("NewName", newName);
        SetCookie("NewDescription", newDescription);
        SetCookie("NewPrice", newPrice);
        window.location.href = '/editmcdonald';
    }

    return (
        <div ref={ref} class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel"><b>Add Menu</b></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex flex-row gap-2">
                        <div className="d-flex flex-column text-center">
                            <IconPhotoFilled style={{ width: '100px', height: '100px'}} />
                            <u style={{fontSize: '0.8rem', cursor: 'pointer'}} onClick={triggerToast}>Upload Picture</u>
                        </div>
                        <div className="d-flex flex-column flex-grow-1 gap-2">
                            <div class="input-group">
                                <div class="input-group-text">
                                    <IconAbc stroke={1.5} /><span className="text-danger">*</span>
                                </div>
                                <input type="text" class="form-control" placeholder="Name" onChange={(e) => setNewName(e.target.value)}/>
                            </div>
                            <div class="input-group">
                                <div class="input-group-text">
                                    <IconInfoCircle stroke={1.5} /><span className="text-danger">*</span>
                                </div>
                                <input type="text" class="form-control" placeholder="Description" onChange={(e) => setNewDescription(e.target.value)}/>
                            </div>
                            <div class="input-group">
                                <div class="input-group-text">
                                    <IconCurrencyBaht stroke={1.5} /><span className="text-danger">*</span>
                                </div>
                                <input type="text" class="form-control" placeholder="0.00" onChange={(e) => setNewPrice(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer d-flex flex-row">
                        <button type="button" className="col btn btn-success border-0 d-flex flex-row justify-content-center" onClick={AddMenu}>
                            <b className="mb-0">Add Menu</b>
                        </button>
                    </div>
                </div>
            </div>
            <UnavailableToast ref={toastRef} />
            <InvalidToast ref={invalidToast} />
        </div>
    );
});

export default AddModal;