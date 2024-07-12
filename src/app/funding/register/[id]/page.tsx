import React from "react";
import FundingRegisterPageModule from '@/modules/FundingRegisterPageModule'

function FundingRegisterPage({ params }: { params: { id: string } }) {
  return <FundingRegisterPageModule id={params.id} />
}

export default FundingRegisterPage;
