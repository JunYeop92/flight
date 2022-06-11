import { useMutation, useQueryClient } from 'react-query'
import { queryKeys } from 'utils'
import { IAirportItem, IIncLikeParam } from 'types/airport'
import { incLikeCntApi } from 'services/airport'
import useAirportParams from './useAirportParams'

export default function useIncLikeMutation() {
  const queryClient = useQueryClient()
  const { condition, search } = useAirportParams()

  return useMutation(incLikeCntApi, {
    onMutate: async ({ _id, likeCount }: IIncLikeParam) => {
      await queryClient.cancelQueries(queryKeys.airpostList(condition, search))
      const prevState = queryClient.getQueryData<IAirportItem[]>(queryKeys.airpostList(condition, search))

      queryClient.setQueryData<IAirportItem[]>(queryKeys.airpostList(condition, search), (prev) => {
        return prev?.map((item) => (item._id === _id ? { ...item, likeCount } : item)) as IAirportItem[]
      })

      return { prevState }
    },
    onError: (err, variables, context) => {
      queryClient.setQueryData(queryKeys.airpostList(condition, search), context?.prevState)
    },
    onSettled: () => {
      queryClient.invalidateQueries(queryKeys.airpostList(condition, search))
    },
  })
}
