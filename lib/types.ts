export type UserRole = 'angler' | 'judge';

export type Profile = {
  id: string;
  email: string;
  display_name: string;
  role: UserRole;
  created_at: string;
};

export type SubmissionStatus = 'pending' | 'approved' | 'denied';

export type Submission = {
  id: string;
  angler_id: string;
  species: string;
  length_inches: number;
  photo_path: string;
  status: SubmissionStatus;
  judge_id: string | null;
  judge_notes: string | null;
  official_length_inches: number | null;
  judged_at: string | null;
  created_at: string;
};
