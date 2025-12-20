export type Work = {
  title: string;
  year: string;
  role: string;
  description: string;
  link?: string;
};

export type Education = {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startYear: string;
  endYear: string;
  description?: string;
};

export type SideQuest = {
  title: string;
  description: string;
  link?: string;
};
