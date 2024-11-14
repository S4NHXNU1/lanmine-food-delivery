import { useRef, useState } from 'react';
import { Toast, Dropdown } from 'bootstrap';
import UnavailableToast from '../components/UnavailableToast';
import SampleData from '../components/SampleData';
import { 
    IconAlertTriangleFilled,
    IconDotsVertical
 } from '@tabler/icons-react';
import { GetCookie } from '../util/Cookie';

export default function ManageUser(){

    const toastRef = useRef(null);
    const triggerToast = () => {
        const toastElement = toastRef.current;
        if (toastElement) {
            const toastInstance = Toast.getOrCreateInstance(toastElement);
            toastInstance.show();
        }
    };

    const dropdownRef = useRef(null);
    const triggerDropdown = () => {
        const dropdownElement = dropdownRef.current;
        if (dropdownElement) {
            const dropdownInstance = Dropdown.getOrCreateInstance(dropdownElement);
            dropdownInstance.show();
        }
    };

    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-between rounded-3 bg-success" style={{width: '17.5rem', padding: '0.3rem'}}>
                <button className="btn border-0 bg-white text-success"><b>Users</b></button>
                <button className="btn border-0 text-success" style={{background: '#e3fcea'}} onClick={triggerToast}><b>Restaurants</b></button>
                <button className="btn border-0 text-success" style={{background: '#e3fcea'}} onClick={triggerToast}><b>Riders</b></button>
            </div>
            <table class="table table-hover mt-3">
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">#Reports</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='align-middle'>
                        <td>1</td>
                        <td>Sanhanut</td>
                        <td>sanhanut.kun@student.mahidol.ac.th</td>
                        <td>10<IconAlertTriangleFilled className='text-danger ms-2'/></td>
                        <td>
                            <button type='button' data-bs-toggle="dropdown" className='btn' aria-expanded="false" onClick={triggerDropdown}><IconDotsVertical /></button>
                            <ul class="dropdown-menu" ref={dropdownRef}>
                                <li><a class="dropdown-item">{GetCookie("SuspendUser") === '1' ? "Activate" : "Suspend"}</a></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
                <SampleData triggerToast={triggerToast} />
            </table>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                    <li class="page-item disabled">
                        <a class="page-link">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link text-success" style={{cursor: 'pointer'}} onClick={triggerToast}>1</a></li>
                    <li class="page-item"><a class="page-link text-success" style={{cursor: 'pointer'}} onClick={triggerToast}>2</a></li>
                    <li class="page-item"><a class="page-link text-success" style={{cursor: 'pointer'}} onClick={triggerToast}>3</a></li>
                    <li class="page-item">
                        <a class="page-link text-success" style={{cursor: 'pointer'}} onClick={triggerToast}>Next</a>
                    </li>
                </ul>
            </nav>
            <UnavailableToast ref={toastRef} />
        </div>
    );
}