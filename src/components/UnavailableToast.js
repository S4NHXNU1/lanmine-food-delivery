import { IconAlertCircleFilled } from '@tabler/icons-react';
import { forwardRef } from 'react';

const UnavailableToast = forwardRef((props, ref) => {
    return (
        <div ref={ref} id='Error' class="toast position-absolute bottom-0 end-0 me-3 mb-3" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <IconAlertCircleFilled className='text-warning me-2' />
                <strong class="me-auto">Warning</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                This feature is unavailable.
            </div>
        </div>
    )
});

export default UnavailableToast;