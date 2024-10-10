import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Change, TextComparison } from "../models/text";

export default function TextCard({
  originalTextBrief,
  updatedTextBrief,
  changes,
}: TextComparison) {
  const highlightUpdatedChanges = (text: string, changes: Change[]) => {
    let highlightedText = text;

    changes.forEach((change) => {
      const highlightedChange = `<span class="${change.added ? "bg-green-200" : ""}">${change.text}</span>`;
      highlightedText = highlightedText.replace(change.text, highlightedChange);
    });

    return highlightedText;
  };

  const highlightOriginalChanges = (text: string, changes: Change[]) => {
    let highlightedText = text;

    changes.forEach((change) => {
      const highlightedChange = `<span class="${change.removed ? "bg-red-200" : ""}">${change.text}</span>`;
      highlightedText = highlightedText.replace(change.text, highlightedChange);
    });

    return highlightedText;
  };

  // Using dangerouslySetInnerHTML is not recommended but it's the faster way to render plain html in react
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Original Text</CardTitle>
          </CardHeader>
          <CardContent>
            <pre
              className="whitespace-pre-wrap text-sm text-muted-foreground font-mono"
              dangerouslySetInnerHTML={{
                __html: highlightOriginalChanges(originalTextBrief!, changes!),
              }}
            />
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Updated Text</CardTitle>
          </CardHeader>
          <CardContent>
            <pre
              className="whitespace-pre-wrap text-sm text-muted-foreground font-mono"
              dangerouslySetInnerHTML={{
                __html: highlightUpdatedChanges(updatedTextBrief!, changes!),
              }}
            />
          </CardContent>
        </Card>
      </div>
      {/* SUMMARY FOR DEBUGGING */}
      {/* <Card className="mt-4">
        <CardHeader>
          <CardTitle>Changes Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            {changes!.map((change, index) => (
              <li
                key={index}
                className={
                  change.added
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {change.summary}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card> */}
    </div>
  );
}
