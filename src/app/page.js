import Banner from "@/components/Banner";
import ExtraSection from "@/components/ExtraSection";
import Instructors from "@/components/Instructors";
import Learning from "@/components/Learning";
import PopularCourses from "@/components/PopularCourses";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularCourses />
      <ExtraSection></ExtraSection>
      <Learning />
      <Instructors />
    </div>
  );
}
