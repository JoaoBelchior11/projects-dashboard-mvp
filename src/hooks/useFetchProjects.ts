import { useEffect, useState } from 'react';
import { projectsApi } from '../api';
import { Project } from '../models/models';
export const useFetchProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    projectsApi()
      .getAllProjects()
      .then((resp) => setProjects(resp));
  }, []);

  return {
    projects,
  };
};
