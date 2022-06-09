import { useMutation, useQueryClient } from 'react-query'
import { queryKeys } from 'utils'
import { IAirportItem, IIncLikeParam } from 'types/airport'
import { incLikeCntApi } from 'services/airport'

export default function useIncLikeMutation() {
  const queryClient = useQueryClient()

  return useMutation(incLikeCntApi, {
    onMutate: async ({ _id, likeCount }: IIncLikeParam) => {
      await queryClient.cancelQueries(queryKeys.airpostList)
      const prevState = queryClient.getQueryData<IAirportItem[]>(queryKeys.airpostList)

      queryClient.setQueryData<IAirportItem[]>(queryKeys.airpostList, (prev) => {
        return prev?.map((item) => (item._id === _id ? { ...item, likeCount } : item)) as IAirportItem[]
      })

      return { prevState }
    },
    onError: (err, variables, context) => {
      queryClient.setQueryData(queryKeys.airpostList, context?.prevState)
    },
    onSettled: () => {
      queryClient.invalidateQueries(queryKeys.airpostList)
    },
  })
}
