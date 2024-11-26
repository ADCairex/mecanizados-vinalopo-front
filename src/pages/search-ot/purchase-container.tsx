import { useEffect, useState } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useSearchOT } from '@/hooks/search-ot/useSearchOT'
import { OTPurchase } from '@/interfaces/search-ot/ot-purchase'
import { useOTStore } from '@/store/searchOTStore'

export default function PurchaseContainer() {
  const otId = useOTStore((state) => state.otId)
  const { getPurchases } = useSearchOT()
  const [purchases, setPurchases] = useState<OTPurchase[] | null>(null)

  const fetchPurchases = async (id: number) => {
    console.log('entra')
    const data = await getPurchases(id)
    console.log(data)
    setPurchases(data)
  }

  useEffect(() => {
    if (otId !== null) {
      fetchPurchases(otId)
    }
  }, [otId])
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Tipo</TableHead>
          <TableHead>Descripción</TableHead>
          <TableHead>Cantidad</TableHead>
          <TableHead>Precio</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {purchases?.map((purchase, index) => (
          <TableRow key={index}>
            <TableCell>{purchase.type}</TableCell>
            <TableCell>{purchase.description}</TableCell>
            <TableCell>{purchase.quantity}</TableCell>
            <TableCell>{purchase.cost}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
