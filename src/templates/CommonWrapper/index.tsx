"use client"

import { useState, useEffect, useRef, ReactNode } from "react";
import { usePathname } from "next/navigation";

import * as S from './style';
import * as C from '@/constants';

// global state
// import states from "@/core/zustand/states";

// assets
import {  } from "@tabler/icons-react"
import Navbar from "@/components/common/Navbar";

// API
// import dataAPI from "@data/index"

// constants

// types
type CommonWrapperProps = {
  children: ReactNode 
}

// components


const CommonWrapper: React.FC<CommonWrapperProps> = ({ children }) => {

  const pathname = usePathname();

  const [ page_loaded, setPageLoaded ] = useState<boolean>(false);
  const [ hide_common_comps, setHideCommonComps ] = useState<boolean>(false);
  useEffect(() => {
    setHideCommonComps([
      "/login",
      "/join/agreement"
    ].includes(pathname));
  }, [ pathname ]);

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 150);
  }, []);
  
  return <S.CommonWrapper $display={page_loaded}>
    { !hide_common_comps && <>
      <Navbar/>
    </> }
    {children}
  </S.CommonWrapper>
};

export default CommonWrapper