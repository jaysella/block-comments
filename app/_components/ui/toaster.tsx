"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/app/_components/ui/toast";
import { useToast } from "@/app/_components/ui/use-toast";
import { AlertOctagonIcon, CheckSquareIcon } from "lucide-react";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        icon = "success",
        action,
        ...props
      }) {
        return (
          <Toast key={id} className="justify-start" {...props}>
            {icon ? (
              <div className="self-start">
                {icon === "success" && <CheckSquareIcon />}
                {icon === "error" && <AlertOctagonIcon />}
              </div>
            ) : null}
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
