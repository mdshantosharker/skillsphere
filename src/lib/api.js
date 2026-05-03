export const getCourses = async () => {
  const res = await fetch("https://skillsphere-blond.vercel.app/course.json");
  const data = await res.json();
  return data;
};
