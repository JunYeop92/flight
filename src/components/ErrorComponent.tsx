interface Props {
  error: Error
}

export default function ErrorComponent({ error }: Props) {
  return (
    <div role='alert'>
      <div>Error : {error.message}</div>
    </div>
  )
}
