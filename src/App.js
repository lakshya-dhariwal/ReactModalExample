import { useState } from "react";
import Modal from "./Modal";
import "./index.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="App flex flex-col items-center justify-center h-full text-gray-700 ">
      <button
        onClick={toggleModal}
        className="p-3 m-20 border rounded  bg-slate-100 border-gray-300 hover:shadow-md duration-150"
      >
        Open Modal
      </button>
      <p className="text-gray-600 absolute bottom-2">
        Made by
        <a
          href="https://github.com/lakshya-dhariwal"
          target="_blank"
          rel="noopener noreferrer"
          className="px-1 text-gray-800"
        >
          Lakshya Dhariwal
        </a>
      </p>
      {showModal ? (
        <Modal toggleModal={toggleModal}>
          <div className="border boder-1 border-gray-400 bg-white w-[400px] border rounded-md w-fit  p-3 px-4 flex flex-col items-center justify-around h-44">
            <h1 className="text-2xl text-gray-700">This is a Modal</h1>
            <p className="text-lg text-center text-slate-500">
              This is made with createPortal {"&"} useRef
            </p>
            <button
              onClick={toggleModal}
              className="px-4 py-1.5  border rounded  bg-slate-100 border-gray-400  hover:shadow duration-150"
            >
              Great
            </button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
