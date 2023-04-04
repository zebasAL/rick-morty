import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import rickMortyImg from "public/rickMorty.svg";
import ThemeModal from "@modals/ThemeModal";
import { useClickOutside } from "@/hooks/useClickOutside";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalTogglerRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useClickOutside(modalRef, modalTogglerRef, () => {
    if (isModalOpen) {
      toggleModal();
    }
  });

  return (
    <div className="navbar">
      <div className="item-list">
        <text className="options">navItem1</text>
        <text className="options">navItem2</text>
        <text className="options">navItem3</text>
      </div>
      <div className="theme-btn" ref={modalTogglerRef}>
        <Image src={rickMortyImg} alt="" onClick={() => toggleModal()} />
      </div>
      <ThemeModal
        isModalOpen={isModalOpen}
        ref={modalRef}
        toggleModal={toggleModal}
      />
    </div>
  );
}
