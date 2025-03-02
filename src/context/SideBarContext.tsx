"use client";
import { createContext, useContext, useReducer, useState } from "react";
interface SideBars {
  rightSidebar: boolean;
  leftSidebar: boolean;
}

interface SideBarContextType extends SideBars {
  toggleLeftSideBar: () => void;
  toggleRightSideBar: () => void;
}

const SideBarContext = createContext<SideBarContextType | undefined>(undefined);
const initialState: SideBars = {
  rightSidebar: true,
  leftSidebar: true,
};

const reducer = (state: SideBars, action: { type: string }) => {
  switch (action.type) {
    case "toggleLeftSideBar":
      return { ...state, leftSidebar: !state.leftSidebar };
    case "toggleRightSideBar":
      return { ...state, rightSidebar: !state.rightSidebar };
    default:
      return state;
  }
};
export default function SideBarContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarState, dispatch] = useReducer(reducer, initialState);

  function toggleLeftSideBar() {
    dispatch({ type: "toggleLeftSideBar" });
  }
  function toggleRightSideBar() {
    dispatch({ type: "toggleRightSideBar" });
  }
  return (
    <SideBarContext.Provider
      value={{
        rightSidebar: sidebarState.rightSidebar,
        leftSidebar: sidebarState.leftSidebar,
        toggleLeftSideBar,
        toggleRightSideBar,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
}
export const useSideBarContext = () => {
  const state = useContext(SideBarContext);
  if (!state) throw new Error("SideBarContext is used outside of provider");
  return state;
};
