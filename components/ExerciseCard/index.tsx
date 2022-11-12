// import Link from 'next/link'
import styles from './ExerciseCard.module.css'
import { IExercise } from '../../lib/exercises'

const ExerciseCard = ({ exercise }: { exercise: IExercise}) => {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <h2 className={styles.title}>
          {exercise.name}
        </h2>
        <div className={styles.repsAndSets}>
          <span className={styles.sets}>{exercise.sets}</span>
          <span className={styles.divisor}>X</span>
          <span className={styles.reps}>{exercise.reps}</span>
        </div>
      </div>

      <div className={styles.body}>
        <div>
          <span className={styles.weight}>{exercise.weight}</span>
          <span className={styles.weight}>{exercise.unit}</span>
        </div>
        <p className={styles.statusText}>
          Effort: <span className={styles.status}>{exercise.status}</span>
        </p>
      </div>
      {/* <Link href={{ pathname: '/exercises/[id]', query: { id: exercise.id } }} as="/exercises/[id]">------------Edit-----------</Link> */}
    </div>
  )
}

export default ExerciseCard
