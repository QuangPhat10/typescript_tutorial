"use client";

import React, { createContext, useContext, useState } from "react";
import { ContextProviderProps, StateContext } from "@/app/types/contextType";

const StateContext = createContext<StateContext | null>(null);

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [modal, setModal] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const collapseMenu = () => {
    setCollapsed(!collapsed);
  };
  return (
    <StateContext.Provider
      value={{
        modal,
        setModal,
        openModal,
        closeModal,
        collapsed,
        setCollapsed,
        collapseMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("There is no context");
  }
  return context;
};
