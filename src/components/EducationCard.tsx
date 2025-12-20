import type { Education } from "@/lib/types";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function EducationCard({
  education,
  className,
}: {
  education: Education;
  className?: string;
}) {
  return (
    <Card className={cn("hover:bg-accent transition-colors", className)}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle>{education.school}</CardTitle>
            <CardDescription>
              {education.degree} - {education.fieldOfStudy}
            </CardDescription>
            {education.description && (
              <p className="text-sm text-muted-foreground mt-2">
                {education.description}
              </p>
            )}
          </div>
          <div className="text-sm text-muted-foreground text-right">
            <p>
              {education.startYear} - {education.endYear}
            </p>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
