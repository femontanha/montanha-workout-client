import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import classNames from 'classnames/bind'  
import ExerciseCard from '../../components/ExerciseCard'
import Header from '../../components/Header'
import { GetStaticProps } from 'next'
import { IExercise, getExercises } from '../../lib/exercises'

import styles from '../../styles/ExercisesPage.module.css'

type ExercisesPageProps = {
  exercises: []
}

const ExercisesPage: React.FC<ExercisesPageProps> = (props: ExercisesPageProps) => {
  const tricepsFiltered = props.exercises.filter((exercise: IExercise) => exercise.type === 'triceps');
  const chestFiltered = props.exercises.filter((exercise: IExercise) => exercise.type === 'chest');
  const shoulderFiltered = props.exercises.filter((exercise: IExercise) => exercise.type === 'shoulder');
  const bicepsFiltered = props.exercises.filter((exercise: IExercise) => exercise.type === 'biceps');
  const backFiltered = props.exercises.filter((exercise: IExercise) => exercise.type === 'back');
  const legsTrainingFiltered = props.exercises.filter((exercise: IExercise) => exercise.type === 'legs');

  const [filteredExercises, setFilteredExercises] = useState([]);
  const [activeFilter, setActiveFilter] = useState('push');

  let cx = classNames.bind(styles);

  const filterButtonLegsClass = cx({ filterButton: true, filterButtonActive: activeFilter === 'legs' });
  const filterButtonTricepsClass = cx({ filterButton: true, filterButtonActive: activeFilter === 'triceps' });
  const filterButtonChestClass = cx({ filterButton: true, filterButtonActive: activeFilter === 'chest' });
  const filterButtonShoulderClass = cx({ filterButton: true, filterButtonActive: activeFilter === 'shoulder' });
  const filterButtonBicepsClass = cx({ filterButton: true, filterButtonActive: activeFilter === 'biceps' });
  const filterButtonBackClass = cx({ filterButton: true, filterButtonActive: activeFilter === 'back' });

  const exercisesTypeArr = [
    { name: 'triceps', css: filterButtonTricepsClass, fn: () => handleFilter('triceps')},
    { name: 'chest', css: filterButtonChestClass, fn: () => handleFilter('chest') },
    { name: 'shoulder', css: filterButtonShoulderClass, fn: () => handleFilter('shoulder') },
    { name: 'biceps', css: filterButtonBicepsClass, fn: () => handleFilter('biceps') },
    { name: 'back', css: filterButtonBackClass, fn: () => handleFilter('back') },
    { name: 'legs', css: filterButtonLegsClass, fn: () => handleFilter('legs') },
  ];

  const handleFilter = (filter: string) => {
    if (filter === 'triceps') setFilteredExercises(tricepsFiltered);
    if (filter === 'chest') setFilteredExercises(chestFiltered);
    if (filter === 'shoulder') setFilteredExercises(shoulderFiltered);
    if (filter === 'biceps') setFilteredExercises(bicepsFiltered);
    if (filter === 'back') setFilteredExercises(backFiltered);
    if (filter === 'legs') setFilteredExercises(legsTrainingFiltered);

    setActiveFilter(filter);
  }

  return (
    <>
      <Head>
        <title>Exercises</title>
      </Head>
      <Header title="Exercises" />
      <div className={styles.container}>
        <div className={styles.filterBlock}>
          <p className={styles.filterText}>Filter by Type:</p>
          <div className={styles.filterButtonWrap}>
            {exercisesTypeArr.map((exerciseType) => (
              <button key={exerciseType.name} className={exerciseType.css} onClick={exerciseType.fn}>{exerciseType.name}</button>  
            ))}
            
          </div>
        </div>
        <div className={styles.grid}>
          {filteredExercises.map((exercise: IExercise) => (
            <Link key={exercise.id} href={{ pathname: '/exercises/[id]', query: { id: exercise.id } }} as="/exercises/[id]">
              <ExerciseCard exercise={exercise} />
            </Link>
          ))}
        </div>
      </div>
    </>
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
