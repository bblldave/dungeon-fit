"use client";
import {React} from "react";
import ContentContainer from "../components/shared/ContentContainer";
import XPProgressBar from "../components/XPProgressBar/XPProgressBar";


// Overview Page
const Overview = () => {
  return (

    <ContentContainer>
      <h1 className="text-4xl font-bold text-center">Overview Page</h1>
      <XPProgressBar />
    </ContentContainer>

  );
}

export default Overview;