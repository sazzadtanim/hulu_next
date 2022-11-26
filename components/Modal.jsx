import Image from "next/image";
import React from "react";
import { Dialog } from "@headlessui/react";

export default function Modal({ url, alt, closeModal, isModal }) {
  return (
    <Dialog open={isModal} onClose={() => closeModal} className="max-h-screen">
      <Image
        src={url}
        alt={alt}
        layout="responsive"
        width={1000}
        height={1500}
      />
      <button
        onClick={closeModal}
        className="relative top-0 left-0 bg-red-400 w-10"
      >
        Close
      </button>
    </Dialog>
  );
}
