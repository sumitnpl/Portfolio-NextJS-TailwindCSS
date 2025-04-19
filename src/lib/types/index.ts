export type NavLinkType = {
  name: string;
  url: string;
};

export type SocialLinkType = {
  icon: string;
  url: string;
};

export type CTAType = {
  title: string;
  url: string;
  sameTab?: boolean;
};

// env
export type TaskType = {
  position: string;
  duration: string;
  points: string[];
};

export type ExperienceType = {
  company: string;
  companyUrl: string;
  role: string;
  started: string;
  upto: string;
  tasks: string[] | TaskType[];
};

export type ProjectType = {
  id: string;
  name: string;
  url: string;
  year: number;
  img: string;
  tags: string[];
  repo: string;
};

export interface FeaturedProjectType
  extends Omit<ProjectType, 'year' | 'repo'> {
  description: string;
  repo?: string;
  tasks?: string;
}

export type StringKeyValueType = {
  [link: string]: string;
};

export type Direction = 'up' | 'right' | 'down' | 'left';

export type SoftwareSkillType = { name: string; icon: string };

export type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
