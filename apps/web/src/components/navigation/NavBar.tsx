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
      <ul className="item-list">
        <li tabIndex={0} className="options">
          navItem1
        </li>
        <li tabIndex={0} className="options">
          navItem2
        </li>
        <li tabIndex={0} className="options">
          navItem3
        </li>
      </ul>
      <div tabIndex={0} className="theme-btn" ref={modalTogglerRef}>
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
