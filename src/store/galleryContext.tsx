import * as React from "react";

export interface WindowSpecs {
  height: number;
  width: number;
}

export interface GalleryContextProps {
  windowSize: WindowSpecs;
  onHomePage:boolean;
  updateWindowSize: (windowSize: WindowSpecs) => void;
  getImageSource:(image:string) => string;
  updateCurrentPage:() => void;
}

interface GalleryContextProviderProps {
  children?: React.ReactNode;
}

export const GalleryContext = React.createContext<GalleryContextProps>({
  windowSize: { height: 0, width: 0 },
  onHomePage:true,
  updateWindowSize: (windowSize: WindowSpecs) => {},
  getImageSource:(image:string) => "",
  updateCurrentPage:() => {}
});

export const GalleryContextProvider: React.FC<GalleryContextProviderProps> = (
  props: GalleryContextProviderProps
) => {
  const [viewPort, setViewPort] = React.useState<WindowSpecs>({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [isHomePage,setIsHomePage] = React.useState<boolean>(true);

  const setIsHomePageHandler = () => {
    setIsHomePage(isHomePage => !isHomePage)
  }

  const setViewPortHandler = (windowSize: WindowSpecs) => {
    setViewPort((viewPort) => (viewPort = windowSize));
  };

  const getImageSourceHandler = (image: string) => {
    console.log("Changing Size");
    const width = viewPort.width;
    if (width <= 750) {
      return `${process.env.PUBLIC_URL}/assets/mobile/${image}.jpg`;
    }
    if (width > 750 && width <= 960) {
      return `${process.env.PUBLIC_URL}/assets/tablet/${image}.jpg`;
    }
    return `${process.env.PUBLIC_URL}/assets/desktop/${image}.jpg`;
  };

  const context = {
    windowSize: viewPort,
    onHomePage:isHomePage,
    updateWindowSize: setViewPortHandler,
    getImageSource:getImageSourceHandler,
    updateCurrentPage:setIsHomePageHandler
  };

  return (
    <GalleryContext.Provider value={context}>
      {props.children}
    </GalleryContext.Provider>
  );
};
