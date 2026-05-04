import Banner from "@/components/Banner";
import ExtraSection from "@/components/ExtraSection";
import Instructors from "@/components/Instructors";
import Learning from "@/components/Learning";
import PopularCourses from "@/components/PopularCourses";
import TrandingCourses from "@/components/TrandingCourses";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div className="bg-slate-100">
        <div className="container mx-auto px-6 lg:px-10 pt-16 ">
          <PopularCourses />
          <TrandingCourses/>
          <ExtraSection></ExtraSection>
        </div>
        <Learning />
        <Instructors />
      </div>
    </div>
  );
}
