import { 
    IconAlertTriangleFilled,
    IconDotsVertical
 } from '@tabler/icons-react';
import { useRef } from 'react';
import { Toast } from 'bootstrap';
import UnavailableToast from './UnavailableToast';

export default function SampleData(props){

    const { triggerToast } = props;

    return(
        <tbody className='align-middle'>
            <tr>
                <td>2</td>
                <td>janedoe</td>
                <td>janedoe@example.com</td>
                <td>3<IconAlertTriangleFilled className='text-warning ms-2'/></td>
                <td><button className='btn' onClick={triggerToast}><IconDotsVertical /></button></td>
            </tr>
            <tr>
                <td>3</td>
                <td>alexsmith</td>
                <td>alexsmith@example.com</td>
                <td>7<IconAlertTriangleFilled className='text-danger ms-2'/></td>
                <td><button className='btn' onClick={triggerToast}><IconDotsVertical /></button></td>
            </tr>
            <tr>
                <td>4</td>
                <td>sarahj</td>
                <td>sarahj@example.com</td>
                <td>2<IconAlertTriangleFilled className='text-warning ms-2'/></td>
                <td><button className='btn' onClick={triggerToast}><IconDotsVertical /></button></td>
            </tr>
            <tr>
                <td>5</td>
                <td>mike89</td>
                <td>mike89@example.com</td>
                <td>9<IconAlertTriangleFilled className='text-danger ms-2'/></td>
                <td><button className='btn' onClick={triggerToast}><IconDotsVertical /></button></td>
            </tr>
            <tr>
                <td>6</td>
                <td>emily_r</td>
                <td>emily_r@example.com</td>
                <td>1<IconAlertTriangleFilled className='text-warning ms-2'/></td>
                <td><button className='btn' onClick={triggerToast}><IconDotsVertical /></button></td>
            </tr>
            <tr>
                <td>7</td>
                <td>danielking</td>
                <td>danielking@example.com</td>
                <td>4<IconAlertTriangleFilled className='text-warning ms-2'/></td>
                <td><button className='btn' onClick={triggerToast}><IconDotsVertical /></button></td>
            </tr>
            <tr>
                <td>8</td>
                <td>laura_queen</td>
                <td>laura_queen@example.com</td>
                <td>6<IconAlertTriangleFilled className='text-danger ms-2'/></td>
                <td><button className='btn' onClick={triggerToast}><IconDotsVertical /></button></td>
            </tr>
            <tr>
                <td>9</td>
                <td>robert_green</td>
                <td>robert_green@example.com</td>
                <td>8<IconAlertTriangleFilled className='text-danger ms-2'/></td>
                <td><button className='btn' onClick={triggerToast}><IconDotsVertical /></button></td>
            </tr>
            <tr>
                <td>10</td>
                <td>angelawhite</td>
                <td>angelawhite@example.com</td>
                <td>0<IconAlertTriangleFilled className='text-success ms-2'/></td>
                <td><button className='btn' onClick={triggerToast}><IconDotsVertical /></button></td>
            </tr>
        </tbody>
    );
}