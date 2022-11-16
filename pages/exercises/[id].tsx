import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next';
import { useState } from 'react'
import classNames from 'classnames/bind';
import axios from 'axios'

import { IExercise, getExerciseById } from '../../lib/exercises'

import styles from '../../styles/EditPage.module.css'

const Exercise = ({ exercise }: { exercise: IExercise }) => {
  const router = useRouter()
  const { id } = router.query

  const [name, setName] = useState(exercise.name);
  const [sets, setSets] = useState(exercise.sets);
  const [reps, setReps] = useState(exercise.reps);
  const [weight, setWeight] = useState(exercise.weight);
  const [unit, setUnit] = useState(exercise.unit);
  const [status, setStatus] = useState(exercise.status);
  const [type, setType] = useState(exercise.type);

  let cx = classNames.bind(styles);
  const cancelButtonCSS = cx({ button: true, cancelButton: true });

  const exerciseTypes = ['triceps', 'chest', 'shoulders', 'biceps', 'back', 'legs'];
  const exerciseStatus = ['soft', 'moderate', 'hard'];

  const handleUpdate = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    await axios.put('/api/exercise', {
      id: Number(id),
      name,
      sets,
      reps,
      weight,
      unit,
      status,
      type,
    });
    router.push('/exercises');
  }

  const handleDelete = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    await axios.delete('/api/exercise', { data: {id: Number(id) }});
    router.push('/exercises');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Editing - Montanha&apos;s Workout</title>
      </Head>
      <h2>Editing - {exercise.name}</h2>
      <form>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Name</label>
          <input type="text" className={styles.input} name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Sets</label>
          <input type="number" className={styles.input} name="sets" value={sets} onChange={(e) => setSets(parseFloat(e.target.value))} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Reps</label>
          <input type="number" className={styles.input} name="reps" value={reps} onChange={(e) => setReps(parseFloat(e.target.value))} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Weight</label>
          <input type="number" className={styles.input} name="weight" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value))} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Unit</label>
          <input type="text" className={styles.input} name="unit" value={unit} onChange={(e) => setUnit(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Status</label>
          <select className={styles.select} value={status} onChange={(e) => setStatus(e.target.value)}>
            {exerciseStatus.map(estatus => <option className={styles.option} key={estatus}>{estatus}</option>)}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Type</label>
          <select className={styles.select} value={type} onChange={(e) => setType(e.target.value)}>
            {exerciseTypes.map(etype => <option className={styles.option} key={etype}>{etype}</option>)}
          </select>
        </div>
        <div className={styles.wrapButtons}>
          <button className={styles.button} onClick={handleUpdate}>Update</button>
          <Link href="/exercises">
            <button className={cancelButtonCSS}>Cancel</button>
          </Link>
          <button className={styles.button} onClick={handleDelete}>Delete</button>
        </div>
      </form>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.params?.id;
  const exercise = await getExerciseById(id as string);

  return {
    props: {
      exercise,
    },
  }
}

export default Exercise
