import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

interface ContainerProps
  extends PropsWithChildren,
    DetailedHTMLProps<HTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {}

export function Container({ children, ...props }: ContainerProps) {
  return (
    <section {...props} className={[props.className, "py-20"].join(" ")}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}
