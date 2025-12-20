import type { SideQuest } from "@/lib/types";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function SideQuestCard({
  sideQuest,
  className,
}: {
  sideQuest: SideQuest;
  className?: string;
}) {
  const CardContent = (
    <Card className={cn("hover:bg-accent transition-colors", className)}>
      <CardHeader>
        <CardTitle>{sideQuest.title}</CardTitle>
        <CardDescription>{sideQuest.description}</CardDescription>
      </CardHeader>
    </Card>
  );

  if (sideQuest.link) {
    return (
      <a
        href={sideQuest.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
