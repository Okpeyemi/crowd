import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ComponentProps, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  icon?: "arrow-right" | null;
} & ComponentProps<"button">;

export default function Button({
  children,
  href,
  className = "",
  icon = "arrow-right",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center gap-2 rounded-b-lg rounded-tl-lg bg-[#7819D4] px-10 py-3 text-white shadow-sm transition-colors hover:bg-[#A55CEC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C2BD9]/40 cursor-pointer ${className}`;

  const content = (
    <span className="inline-flex items-center gap-2">
      <span className="font-bold">{children}</span>
      {icon === "arrow-right" ? <ArrowRight size={18} /> : null}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
