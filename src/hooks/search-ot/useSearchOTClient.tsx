import { OTDetail } from '@/interfaces/search-ot/ot-detail'
import { OTTime } from '@/interfaces/search-ot/ot-time'
import { OTPurchase } from '@/interfaces/search-ot/ot-purchase'
import { useState } from 'react'

export const useSearchOTClient = () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/search-ot`
  const [loading, setLoading] = useState<boolean>(false)

  const getDetailsById = async (id: number): Promise<OTDetail> => {
    setLoading(true)
    const data = await fetch(`${apiUrl}/detail/${id}`)
    setLoading(false)
    return data.json()
  }

  const getTimesById = async (id: number): Promise<OTTime[]> => {
    setLoading(true)
    const data = await fetch(`${apiUrl}/times/${id}`)
    setLoading(false)
    return data.json()
  }

  const getPurchasesById = async (id: number): Promise<OTPurchase[]> => {
    setLoading(true)
    const data = await fetch(`${apiUrl}/purchases/${id}`)
    setLoading(false)
    return data.json()
  }

  return {
    loading,
    getDetailsById,
    getTimesById,
    getPurchasesById,
  }
}
