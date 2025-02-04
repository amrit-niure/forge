import { Separator } from '@/components/ui/separator'
import React from 'react'
import BasicInformationForm from './components/basic-information-form'

export default function Profile() {
  return (
    <div className="space-y-6">
    <div>
      <h3 className="text-lg font-medium">Basic Information</h3>
      <p className="text-sm text-muted-foreground">
        Fill up your basic information. This is shown to your potential employers.
      </p>
    </div>
    <Separator />
    <BasicInformationForm />
  </div>
  )
}
