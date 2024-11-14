import { useRef, useState, useEffect } from 'react';
import { Toast, Dropdown } from 'bootstrap';
import UnavailableToast from '../components/UnavailableToast';
import SampleData from '../components/SampleData';
import { 
    IconAlertTriangleFilled,
    IconDotsVertical
 } from '@tabler/icons-react';
import { GetCookie, SetCookie } from '../util/Cookie';

export default function ManageUser(){

    const [reFetch, setReFetch] = useState(false);

    const toastRef = useRef(null);
    const triggerToast = () => {
        const toastElement = toastRef.current;
        if (toastElement) {
            const toastInstance = Toast.getOrCreateInstance(toastElement);
            toastInstance.show();
        }
    };

    const dropdownRef = useRef(null);
    let dropdownInstance;

    useEffect(() => {
        console.log("reFetch: ", reFetch);
        const dropdownElement = dropdownRef.current;
        if (dropdownElement) {
            dropdownInstance = Dropdown.getOrCreateInstance(dropdownElement);
            dropdownInstance.show();
        }
    }, [reFetch]);

    const triggerDropdown = () => {
        if (dropdownInstance) {
            dropdownInstance.show();
        }
    };

    const toggleUserActivation = () => {
        if (GetCookie("SuspendUser") === '1') {
            SetCookie("SuspendUser", "0");
        } else {
            SetCookie("SuspendUser", "1");
        }
    }

    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-between rounded-3" style={{width: '17.5rem', padding: '0.3rem', background: '#cafad8'}}>
                <button className="btn border-0 bg-white text-success"><b>Users</b></button>
                <button className="btn border-0 bg-success text-white" onClick={triggerToast}><b>Restaurants</b></button>
                <button className="btn border-0 bg-success text-white" onClick={triggerToast}><b>Riders</b></button>
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
                            <button type='button' data-bs-toggle="dropdown" className='btn' aria-expanded="false" onMouseEnter={() => setReFetch(!reFetch)} onClick={triggerDropdown}><IconDotsVertical className='text-black' /></button>
                            <ul class="dropdown-menu" ref={dropdownRef}>
                                <li><p class="dropdown-item mb-0" style={{cursor: 'pointer'}} onClick={triggerToast}>Show Info</p></li>
                                <li><p class="dropdown-item mb-0" style={{cursor: 'pointer'}} onClick={toggleUserActivation}>{GetCookie("SuspendUser") === '1' ? "Activate" : "Suspend"}</p></li>
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
                    <li class="page-item"><p class="page-link text-success mb-0" style={{cursor: 'pointer'}} onClick={triggerToast}>1</p></li>
                    <li class="page-item"><p class="page-link text-success mb-0" style={{cursor: 'pointer'}} onClick={triggerToast}>2</p></li>
                    <li class="page-item"><p class="page-link text-success mb-0" style={{cursor: 'pointer'}} onClick={triggerToast}>3</p></li>
                    <li class="page-item">
                        <a class="page-link text-success" style={{cursor: 'pointer'}} onClick={triggerToast}>Next</a>
                    </li>
                </ul>
            </nav>
            <UnavailableToast ref={toastRef} />
        </div>
    );
}