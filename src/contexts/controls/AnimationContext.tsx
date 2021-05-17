import React, { createContext, useCallback, useContext, useState, useEffect } from 'react';
import { Animated, View } from 'react-native';
import { HandlerStateChangeEvent, PanGestureHandlerEventPayload, State } from 'react-native-gesture-handler';

// import { Container } from './styles';
interface AnimationContextProps {
  translateY: Animated.Value;
  offset: number;
  animatedEvent(): void;
  onHandlerStateChange(event: HandlerStateChangeEvent<PanGestureHandlerEventPayload>): void;
}
const AnimationContext = createContext<AnimationContextProps>({} as AnimationContextProps);
const AnimationProvider: React.FC = ({ children }) => {
  const translateY = new Animated.Value(0);
  let offset: number = 0;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 420,
      duration: 1000,
      useNativeDriver: true
    }).start(() => {
      translateY.setOffset(420);
      translateY.setValue(0);
    })
  },[])

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        },
      },
    ],
    { useNativeDriver: true, },
  );
  function onHandlerStateChange(event: HandlerStateChangeEvent<PanGestureHandlerEventPayload>) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let oppened = false;
      const { translationY } = event.nativeEvent;
      offset += translationY;
      if (translationY >= 100) {
        oppened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }
      Animated.timing(translateY, {
        toValue: oppened ? 420 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = oppened ? 420 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });

    }
  }
  return <AnimationContext.Provider value={{ animatedEvent, onHandlerStateChange, offset, translateY }}>
    {children}
  </AnimationContext.Provider>;
}

function useAnimationContext() {
  const context = useContext(AnimationContext);
  if (!context) throw new Error('Not found animation context!');
  return context;
}

export { AnimationProvider, useAnimationContext };