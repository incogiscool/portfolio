import type { Work } from "@/lib/types";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function WorkCard({
  work,
  className,
}: {
  work: Work;
  className?: string;
}) {
  return (
    <a
      href={work.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("block", className)}
    >
      <Card className={"hover:bg-accent transition-colors"}>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <CardTitle>{work.title}</CardTitle>
              <CardDescription>{work.description}</CardDescription>
            </div>
            <div className="text-sm text-muted-foreground text-right">
              <p>{work.role}</p>
              <p>{work.year}</p>
            </div>
          </div>
        </CardHeader>
      </Card>
    </a>
  );
}
