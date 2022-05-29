interface Props {
  error: Error
}

export default function ErrorFallback({ error }: Props) {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}
