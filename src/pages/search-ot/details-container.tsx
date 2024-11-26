import { useEffect, useState } from 'react'

import { Input } from '@/components/ui/input'
import { useSearchOT } from '@/hooks/search-ot/useSearchOT'
import { useOTStore } from '@/store/searchOTStore'
import { OTDetail } from '@/interfaces/search-ot/ot-detail'

export default function DetailsContainer() {
  const otId = useOTStore((state) => state.otId)
  const { getDetails } = useSearchOT()
  const [details, setDetails] = useState<OTDetail | null>(null)

  const fetchDetails = async (id: number) => {
    console.log('entra')
    const data = await getDetails(id)
    setDetails(data)
  }

  useEffect(() => {
    if (otId !== null) {
      fetchDetails(otId)
    }
  }, [otId])
  return (
    <>
      <button onClick={() => fetchDetails(1)}>Refrescar</button>
      <div className="flex items-center gap-2 mb-1 w-3/5 justify-between">
        <label htmlFor="ot" className="font-medium">
          Cantidad:
        </label>
        <Input
          id="ot"
          className="w-48"
          placeholder=""
          value={details?.quantity}
        />
      </div>
      <div className="flex items-center gap-2 mb-1 w-3/5 justify-between">
        <label htmlFor="ot" className="font-medium">
          Cliente:
        </label>
        <Input
          id="ot"
          className="w-96"
          placeholder=""
          value={details?.client}
        />
      </div>
      <div className="flex items-center gap-2 mb-1 w-3/5 justify-between">
        <label htmlFor="ot" className="font-medium">
          Contacto:
        </label>
        <Input
          id="ot"
          className="w-96"
          placeholder=""
          value={details?.contact}
        />
      </div>
      <div className="flex items-center gap-2 mb-1 w-3/5 justify-between">
        <label htmlFor="ot" className="font-medium">
          Proyecto:
        </label>
        <Input
          id="ot"
          className="w-96"
          placeholder=""
          value={details?.proyect}
        />
      </div>
      <div className="flex items-center gap-2 mb-1 w-3/5 justify-between">
        <label htmlFor="ot" className="font-medium">
          Nombre trabajo:
        </label>
        <Input
          id="ot"
          className="w-96"
          placeholder=""
          value={details?.businessName}
        />
      </div>
      <div className="flex items-center gap-2 mb-1 w-3/5 justify-between">
        <label htmlFor="ot" className="font-medium">
          Línea de negocio:
        </label>
        <Input
          id="ot"
          className="w-96"
          placeholder=""
          value={details?.buisinesUnit}
        />
      </div>
      <div className="flex items-center gap-2 mb-1 w-3/5 justify-between">
        <label htmlFor="ot" className="font-medium">
          Pedido:
        </label>
        <Input id="ot" className="w-96" placeholder="" value={details?.order} />
      </div>
      <div className="flex items-center gap-2 mb-1 w-3/5 justify-between">
        <label htmlFor="ot" className="font-medium">
          Reclamación:
        </label>
        <Input id="ot" className="w-96" placeholder="" value={details?.claim} />
      </div>
      <div className="flex items-center gap-2 mb-1 w-3/5 justify-between">
        <label htmlFor="ot" className="font-medium">
          Finalización:
        </label>
        <Input id="ot" className="w-96" placeholder="" />
      </div>
      <div className="flex items-center gap-2 mb-1 w-3/5 justify-between">
        <label htmlFor="ot" className="font-medium">
          Material:
        </label>
        <Input
          id="ot"
          className="w-96"
          placeholder=""
          value={details?.material}
        />
      </div>
      <div className="flex items-center gap-2 mb-1 justify-between">
        <label htmlFor="ot" className="font-medium">
          Ubicación:
        </label>
        <Input
          id="ot"
          className="w-[735px]"
          placeholder=""
          value={details?.location}
        />
      </div>
    </>
  )
}
