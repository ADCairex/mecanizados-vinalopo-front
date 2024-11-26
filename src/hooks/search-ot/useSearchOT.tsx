import { OTPurchase } from '@/interfaces/search-ot/ot-purchase'
import { OTDetail } from '@/interfaces/search-ot/ot-detail'
import { OTTime } from '@/interfaces/search-ot/ot-time'
import { useSearchOTClient } from './useSearchOTClient'

export const useSearchOT = () => {
  const { loading, getDetailsById, getTimesById, getPurchasesById } =
    useSearchOTClient()

  const getDetails = async (id: number): Promise<OTDetail> => {
    const data = await getDetailsById(id)
    return data
  }

  const getTimes = async (id: number): Promise<OTTime[]> => {
    const data = await getTimesById(id)
    return data
  }

  const getPurchases = async (id: number): Promise<OTPurchase[]> => {
    const data = await getPurchasesById(id)
    return data
  }

  return { loading, getDetails, getTimes, getPurchases }
}
