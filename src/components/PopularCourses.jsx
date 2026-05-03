import { getCourses } from "@/lib/api";
import React from "react";
import { Button, Card, CloseButton } from "@heroui/react";
import Link from "next/link";
const PopularCourses = async () => {
  const AllCourses = await getCourses();
  console.log(AllCourses);

  const topCourse = AllCourses.filter((f) => f.rating > "4.8");
  console.log(topCourse);

  return (
    <div>
      {topCourse.map((course) => {
        return (
          <Card key={course.id} className="w-full items-stretch md:flex-row">
            <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:w-30">
              <img
                alt="Cherries"
                className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
                loading="lazy"
                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <Card.Header className="gap-1">
                <Card.Title className="pr-8">
                  Become an ACME Creator!
                </Card.Title>
                <Card.Description>
                  Lorem ipsum dolor sit amet consectetur. Sed arcu donec id
                  aliquam dolor sed amet faucibus etiam.
                </Card.Description>
                <CloseButton
                  aria-label="Close banner"
                  className="absolute top-3 right-3"
                />
              </Card.Header>
              <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">
                    Only 10 spots
                  </span>
                  <span className="text-xs text-muted">
                    Submission ends Oct 10.
                  </span>
                </div>

                <Link href={`/courses/${course.id}`}>
                  <Button className="w-full sm:w-auto">
                    View Details button
                  </Button>
                </Link>
              </Card.Footer>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default PopularCourses;
