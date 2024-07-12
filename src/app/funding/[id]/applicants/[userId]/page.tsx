import React from "react";
import ApplicantsDetailModule from '@/modules/ApplicantsDetailModule'

function ApplicantsDetail({ params }: { params: { id: string, userId: string } }) {
  return <ApplicantsDetailModule id={params.id} userId={params.userId}/>
}

export default ApplicantsDetail;
