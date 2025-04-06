interface BadgeProps {
  skill: string;
}
export function Badge({ skill }: BadgeProps) {
  return (
    <div className="p-4 bg-muted h-fit flex justify-center rounded-lg">
      <span className="font-medium">{skill}</span>
    </div>
  );
}
