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
import { OTTime } from '@/interfaces/search-ot/ot-time'
import { useOTStore } from '@/store/searchOTStore'

export default function WorkTimeContainer() {
  const otId = useOTStore((state) => state.otId)
  const { getTimes } = useSearchOT()
  const [times, setTimes] = useState<OTTime[] | null>(null)

  const fetchTimes = async (id: number) => {
    console.log('entra')
    const data = await getTimes(id)
    console.log(data)
    setTimes(data)
  }

  useEffect(() => {
    if (otId !== null) {
      fetchTimes(otId)
    }
  }, [otId])
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Fecha</TableHead>
          <TableHead>Empleado</TableHead>
          <TableHead>Puesto de trabajo</TableHead>
          <TableHead>Inicio</TableHead>
          <TableHead>Final</TableHead>
          <TableHead>Notas</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {times?.map((time, index) => (
          <TableRow key={index}>
            <TableCell>{time.date}</TableCell>
            <TableCell>{time.employee}</TableCell>
            <TableCell>{time.workStation}</TableCell>
            <TableCell>{time.startTime}</TableCell>
            <TableCell>{time.endTime}</TableCell>
            <TableCell>{time.notes}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
