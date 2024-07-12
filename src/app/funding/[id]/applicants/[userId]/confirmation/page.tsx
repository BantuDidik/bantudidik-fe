import React from "react";
import ConfirmationModule from '@/modules/ConfirmationModule'

function ConfirmationDetail({ params }: { params: { id: string, userId: string } }) {
  return <ConfirmationModule id={params.id} userId={params.userId}/>
}

export default ConfirmationDetail;
