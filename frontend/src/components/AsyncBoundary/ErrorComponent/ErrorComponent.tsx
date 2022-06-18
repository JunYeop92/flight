import styles from './errorComponent.module.scss'

interface IProps {
  error: Error
}

export default function ErrorComponent({ error }: IProps) {
  return (
    <article role='alert' className={styles.wrapper}>
      <h2>Error : {error.message}</h2>
    </article>
  )
}
