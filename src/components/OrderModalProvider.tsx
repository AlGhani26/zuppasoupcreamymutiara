"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import OrderModal from "@/components/OrderModal";

interface OrderModalContextType {
  openOrderModal: () => void;
}

const OrderModalContext = createContext<OrderModalContextType>({
  openOrderModal: () => {},
});

export const useOrderModal = () => useContext(OrderModalContext);

export const OrderModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openOrderModal = useCallback(() => setIsOpen(true), []);
  const closeOrderModal = useCallback(() => setIsOpen(false), []);

  return (
    <OrderModalContext.Provider value={{ openOrderModal }}>
      {children}
      <OrderModal isOpen={isOpen} onClose={closeOrderModal} />
    </OrderModalContext.Provider>
  );
};
