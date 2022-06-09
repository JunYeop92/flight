export const queryKeys = {
  airpostList: ['airportList'] as const,
  commentList: (airportId: string) => ['commentList', airportId] as const,
}
