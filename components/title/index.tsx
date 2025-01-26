import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TitleProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  title: string;
}
export function Title({ title, ...props }: TitleProps) {
  return (
    <h2
      className="text-4xl font-bold mb-8 text-gradient text-center"
      {...props}
    >
      {title}
    </h2>
  );
}
