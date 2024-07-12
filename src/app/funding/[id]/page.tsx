import React from "react";
import FundingDetailPageModule from '@/modules/FundingDetailPageModule'

function FundingDetailPage({ params }: { params: { id: string } }) {
  return <FundingDetailPageModule id={params.id} />
}

export default FundingDetailPage;
