"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
type EditIconContextType = {
  editable: boolean;
  setEditable: Dispatch<SetStateAction<boolean>>;
};
const EditIconContext = createContext<EditIconContextType>({
  editable: false,
  setEditable: () => {},
});
export default function EditIconContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [editable, setEditable] = useState(false);

  return (
    <EditIconContext.Provider value={{ editable, setEditable }}>
      {children}
    </EditIconContext.Provider>
  );
}

export const useEditIconContext = () => {
  const state = useContext(EditIconContext);
  if (!state) throw new Error("EditIconContext is used outside of provider");
  return state;
};
