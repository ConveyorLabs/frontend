import { Button, Link } from "@mui/material";

interface ButtonGroupProps {
  text: string;
  url: string;
  variant: "outlined" | "contained";
  size: "small" | "medium" | "large";
  alignment?: "flex-start" | "center" | "flex-end";
}

export function ButtonGroup({ text, url, variant, size }: ButtonGroupProps) {
  return (
    <Link
      href={url}
      style={{ textDecoration: "none" }}
      target="_blank"
      rel="noreferrer noopener"
    >
      <Button variant={variant} size={size}>
        {text}
      </Button>
    </Link>
  );
}
