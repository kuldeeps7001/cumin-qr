import { create } from "zustand";

export type HeroQrType = {
  value: string;
  ecLevel: 'L' | 'M' | 'Q' |'H';
  size: number;
  quietZone: number;
  bgColor: string;
  fgColor: string;
  qrStyle: 'squares' | 'dots';
  eyeRadius: any;
  eyeColor: any;
  logoPaddingStyle: 'square' | 'circle';
  setQr: (a : any) => void;
  setDefault: () => void;
  logoPadding : number;
  logoWidth : number;   
  logoHeight : number;
  logoImage : string;
};

const defaultState = {
  value: "",
  ecLevel: "M",
  size: 350,
  quietZone: 30,
  bgColor: "#FFFFFF",
  fgColor: "#000000",
  qrStyle: "squares",
  eyeRadius: [
    {
      outer: [0, 0, 0, 0],
      inner: [0, 0, 0, 0],
    },
    {
      outer: [0, 0, 0, 0],
      inner: [0, 0, 0, 0],
    },
    {
      outer: [0, 0, 0, 0],
      inner: [0, 0, 0, 0],
    },
  ],
  eyeColor: [
    {
      outer: "#000000",
      inner: "#000000",
    },
    {
      outer: "#000000",
      inner: "#000000",
    },
    {
      outer: "#000000",
      inner: "#000000",
    },
  ],
  logoPaddingStyle: "square",
  logoPadding : 5,
  logoWidth : 30,
  logoHeight : 30,
  logoImage:''
};

export const useHeroQr = create((set) => ({
  ...defaultState,
  setQr: (data : any) => set((state : HeroQrType) => ({ ...state, ...data})),
  setDefault : () => set(defaultState) 
}));


export const useSelectedQrType = create((set) => ({
  selectedQrType: "text",
  setSelectedQrType: (data : string) => set((state : any) => ({ ...state, selectedQrType: data})),  
}));