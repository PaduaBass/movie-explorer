import React, { createContext, useContext, useRef, useState } from 'react';
import { View } from 'react-native';
import Drawer from '../../components/Drawer';

// import { Container } from './styles';
interface DrawerContextProps {
    open: boolean,
    containerRef: React.MutableRefObject<{ open: boolean }>;
    controlRef: React.MutableRefObject<{ open: boolean }>;

    openCloseDrawer(): void;
}
const DrawerContext = createContext<DrawerContextProps>({} as DrawerContextProps);
const DrawerProvider: React.FC = ({ children }) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef({ open: false });
    const controlRef = useRef({ open: false })
    
    const openCloseDrawer = () => {
        setOpen(!open);
    }

    return <DrawerContext.Provider value={{ open, openCloseDrawer, containerRef, controlRef }}>
        { children }
        { open && <Drawer /> }

    </DrawerContext.Provider>;
}

function useDraweContext () {
    const context = useContext(DrawerContext);
    if(!context) throw new Error('Not Found drawer context');
    return context;
}   

export { DrawerProvider, useDraweContext };