// Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  body?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>


      <div className="relative w-auto max-w-md p-6 my-8 mx-auto bg-bgr rounded-md shadow-lg">
        <div className="relative flex flex-col w-full break-words bg-bgr border-0 rounded-lg">
          <div className="flex items-center justify-center p-5 rounded-t">
            <h3 className="text-3xl font-semibold text-primary">{title}</h3>
          </div>
          <div className="w-full p-5 flex flex-col items-center justify-center">
            <h1 className='text-txt font-bold'>
              KEY HERE
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
