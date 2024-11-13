import { IconAlertCircleFilled } from '@tabler/icons-react';
import { forwardRef } from 'react';

const UnavailableToast = forwardRef((props, ref) => {
    return (
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div ref={ref} id='Error' class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <IconAlertCircleFilled className='text-warning me-2' />
                    <strong class="me-auto">Warning</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    This feature is unavailable in this prototype.
                </div>
            </div>
        </div>
    )
});

export default UnavailableToast;