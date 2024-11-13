import { IconAlertCircleFilled } from '@tabler/icons-react';
import { forwardRef } from 'react';

const InvalidToast = forwardRef((props, ref) => {
    return (
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div ref={ref} id='Error' class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <IconAlertCircleFilled className='text-danger me-2' />
                    <strong class="me-auto">Invalid Input</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    An invalid data has been entered, please try again.
                </div>
            </div>
        </div>
    )
});

export default InvalidToast;