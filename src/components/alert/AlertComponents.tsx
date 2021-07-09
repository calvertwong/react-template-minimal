import {ACCESSIBILITY_ROLE} from '../../constants/AppConstants';
import {BasicButton} from '../button/ButtonComponents';
import {BasicText} from '../text/TextComponents';
import {BasicAlertProps, ToastProps} from './CoreAlertProps';

export const BasicAlertModal: React.FC<BasicAlertProps> = ({bodyMsg, primaryBtn, secondaryBtn, show, titleMsg}: BasicAlertProps) => {
  return (
    <div className={"animate__animated animate__faster position-absolute top-0 start-0 end-0" + (show === true ? ' animate__fadeInDown' : ' animate__fadeOutUp')} tabIndex={-1} role={ACCESSIBILITY_ROLE.DIALOG} aria-labelledby="" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <BasicText className="h5 modal-title" text={titleMsg} />
            <BasicButton className="close" ariaLabel="Close" btnText='&times;' />
          </div>
          <div className="modal-body">
            <BasicText text={bodyMsg} />
          </div>
          <div className={"modal-footer" + (primaryBtn?.length === 0 && secondaryBtn?.length === 0 ? " d-none" : "")}>
            {
              secondaryBtn
                ?
                <BasicButton className="btn btn-secondary" btnText={secondaryBtn} />
                :
                null
            }
            {
              primaryBtn
                ?
                <BasicButton className="btn btn-primary" btnText={primaryBtn} />
                :
                null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const location = (position: string) => {
  switch(position) {
    case 'bl': {
      return " bottom-0 start-0"
    }
    case 'bc': {
      return " bottom-0 start-50 translate-middle-x"
    }
    case 'br': {
      return " bottom-0 end-0"
    }
    case 'tl': {
      return " top-0 start-0"
    }
    case 'tc': {
      return " top-0 start-50 translate-middle-x"
    }
    case 'tr': {
      return " top-0 end-0"
    }
    default: {
      return " top-50 start-50 translate-middle"
    }
  }
}

export const BasicToast: React.FC<ToastProps> = ({bodyMsg, onClose, position, show}: ToastProps) => {
  const closeToast = () => {
    onClose(!show)
  }
  return (
    <div className={"d-inline-block position-absolute bg-danger animate__animated animate__faster p-2" + (show ? " animate__fadeIn" : " animate__fadeOut") + (location(position))} role={ACCESSIBILITY_ROLE.ALERT} aria-live="assertive" aria-atomic="true">
      <div className="" role={ACCESSIBILITY_ROLE.ALERT} aria-live="assertive" aria-atomic="true">
        <div className="d-flex">
          <div className="toast-body">
            {bodyMsg}
          </div>
          <BasicButton className="btn-close me-2 m-auto" ariaLabel="Close" btnText="" onClick={closeToast} />
        </div>
      </div>
    </div>
  )
}