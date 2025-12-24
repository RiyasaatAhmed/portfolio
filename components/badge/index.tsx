interface BadgeProps {
  skill: string;
  icon?: React.ReactNode;
}

export function Badge({ skill, icon }: BadgeProps) {
  return (
    <div className="p-4 bg-muted h-fit flex items-center gap-3 justify-center rounded-lg hover:scale-105 transition-transform duration-300">
      {icon}
      <span className="font-medium">{skill}</span>
    </div>
  );
}
