export interface IMusclePart {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface IMusclePartExercises {
  id: number;
  exercise_id: number;
  muscle_part_id: number;
  created_at: string;
  updated_at: string;
  muscle_part: IMusclePart;
}

export interface IExercise {
  id: number;
  name: string;
  calo_per_hour: string;
  img: string;
  video: string;
  description: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  muscle_part_id: number;
  muscle_part: string;
  muscle_parts: string[];
  muscle_part_exercises: IMusclePartExercises[];
}

export interface IResExercise {
  success: boolean;
  message: string;
  exercises: IExercise[];
}
