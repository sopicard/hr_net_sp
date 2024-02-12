const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null

  return (
    <div className="modal">
      <div className="modal__content">
        <span className="modal__close" onClick={onClose}>&times;</span>
        <p className="modal__message">{message}</p>
      </div>
    </div>
  )
}

export default Modal
