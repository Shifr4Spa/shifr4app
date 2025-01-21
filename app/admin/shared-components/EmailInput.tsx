import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import { ChangeEvent } from "react";

interface InputEmailProps {
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  label?: string;
}

function InputEmail({
  id,
  value,
  onChange,
  placeholder = "Enter text",
  required = false,
  label = "Input",
}: InputEmailProps) {
  return (
    <div className="space-y-2 w-full">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
        <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <Mail size={16} strokeWidth={2} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export { InputEmail };
