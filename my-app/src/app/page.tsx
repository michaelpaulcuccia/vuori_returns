import React from "react";
import Nav from "../../components/Nav";
import PageLayout from "../../components/PageLayout";
import PageContentContainer from "../../components/PageContentContainer";
import ReturnBar from "../../components/ReturnBar";

export default function page() {
  return (
    <>
      <Nav />
      <PageLayout>
        <PageContentContainer>
          <ReturnBar />
          <div>right</div>
        </PageContentContainer>
      </PageLayout>
    </>
  );
}
