import React from "react";
import Nav from "../../components/Nav";
import PageLayout from "../../components/PageLayout";
import PageContentContainer from "../../components/PageContentContainer";
import ReturnBar from "../../components/ReturnBar";
import ReturnHero from "../../components/ReturnHero";

export default function page() {
  return (
    <>
      <Nav />
      <PageLayout>
        <PageContentContainer>
          <ReturnBar />
          <ReturnHero />
        </PageContentContainer>
      </PageLayout>
    </>
  );
}
