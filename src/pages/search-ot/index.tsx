'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import DetailsContainer from './details-container'
import WorkTimeContainer from './work-time-container'
import PurchaseContainer from './purchase-container'
import { useOTStore } from '@/store/searchOTStore'

export default function OTView() {
  const [inputOT, setInputOT] = useState('')
  const setOtId = useOTStore((state) => state.setOtId)

  const handleSearch = () => {
    const otId: number = parseInt(inputOT)
    setOtId(otId)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="p-1 bg-[#159C47] text-white">
        <div className="container mx-auto flex justify-between items-center h-8"></div>
      </header>

      <div className="flex flex-1">
        <main className={`flex-1 p-4 space-y-4 transition-all duration-300`}>
          <div className="flex items-center gap-2">
            <Input
              id="ot"
              className="max-w-[200px] text-black"
              placeholder="Número de OT"
              value={inputOT}
              onChange={(e) => setInputOT(e.target.value)} // Actualiza el input
            />
            <Button onClick={handleSearch}>Buscar</Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#159C47]">Detalles</CardTitle>
              </CardHeader>
              <CardContent>
                <DetailsContainer />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#159C47]">
                  Materials & Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <PurchaseContainer />
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-[#159C47]">
                Horas trabajadas{' '}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <WorkTimeContainer />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
