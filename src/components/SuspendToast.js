import { IconAlertCircleFilled } from '@tabler/icons-react';
import { forwardRef } from 'react';

const SuspendToast = forwardRef((props, ref) => {
    return (
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div ref={ref} id='Error' class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <IconAlertCircleFilled className='text-danger me-2' />
                    <strong class="me-auto">Error</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    Your account has been suspended, please contact administator via <u>support@lanmine.com</u> for more information.
                </div>
            </div>
        </div>
    )
});

export default SuspendToast;