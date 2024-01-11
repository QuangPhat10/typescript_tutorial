"use client";

export type ContextProviderProps = {
    children: React.ReactNode
}

export type StateContext = {
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    
    openModal: (modal: boolean) => void,
    closeModal: (modal: boolean) => void,
    collapsed: boolean,
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>,
    collapseMenu: (collapsed: boolean) => void,
}