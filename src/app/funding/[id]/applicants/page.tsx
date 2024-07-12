import React from "react";
import FundingApplicantsModule from '@/modules/FundingApplicantsModule'

function FundingApplicants({ params }: { params: { id: string } }) {
  return <FundingApplicantsModule id={params.id} />
}

export default FundingApplicants;
