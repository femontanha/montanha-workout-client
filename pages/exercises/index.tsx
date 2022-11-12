import { useState } from 'react'
import classNames from 'classnames/bind';
import ExerciseCard from '../../components/ExerciseCard'
import { GetStaticProps } from 'next'
import { IExercise, getExercises } from '../../lib/exercises'

import styles from '../../styles/ExercisesPage.module.css'
import { defaultConfig } from 'next/dist/server/config-shared';

type ExercisesPageProps = {
  exercises: []
}

const ExercisesPage: React.FC<ExercisesPageProps> = (props: ExercisesPageProps) => {
  const pushTrainingFiltered = props.exercises.filter((exercise: IExercise) => exercise.type === 'triceps' || exercise.type === 'chest' || exercise.type === 'shoulder');
  const pullTrainingFiltered = props.exercises.filter((exercise: IExercise) => exercise.type === 'biceps' || exercise.type === 'back');
  const legsTrainingFiltered = props.exercises.filter((exercise: IExercise) => exercise.type === 'legs');

  const [filteredExercises, setFilteredExercises] = useState(pushTrainingFiltered);
  const [activeFilter, setActiveFilter] = useState('push');

  let cx = classNames.bind(styles);
  
  const filterButtonPushClass = cx({
    filterButton: true,
    filterButtonActive: activeFilter === 'push',
  });

  const filterButtonPullClass = cx({
    filterButton: true,
    filterButtonActive: activeFilter === 'pull',
  });

  const filterButtonLegsClass = cx({
    filterButton: true,
    filterButtonActive: activeFilter === 'legs',
  });

  const handleFilter = (filter: string) => {
    if (filter === 'push') setFilteredExercises(pushTrainingFiltered);
    if (filter === 'pull') setFilteredExercises(pullTrainingFiltered);
    if (filter === 'legs') setFilteredExercises(legsTrainingFiltered);

    setActiveFilter(filter);
  }

  return (
    <div className={styles.container}>
      <h1>Montanha&apos;s Workout Routine</h1>
      <div className={styles.filterBlock}>
        <p className={styles.filterText}>Filter by Training:</p>
        <div className={styles.filterButtonWrap}>
          <button className={filterButtonPushClass} onClick={() => handleFilter('push')}>Push</button>
          <button className={filterButtonPullClass} onClick={() => handleFilter('pull')}>Pull</button>
          <button className={filterButtonLegsClass} onClick={() => handleFilter('legs')}>Legs</button>
        </div>
      </div>
      <div className={styles.grid}>
        {filteredExercises.map((exercise: IExercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const exercises = await getExercises();
  return {
    props: {
      exercises
    },
    revalidate: 5,
  }
}

export default ExercisesPage
