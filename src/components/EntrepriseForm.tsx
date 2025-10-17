"use client";

import Image from "next/image";
import { useCallback, useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronUp, CloudUpload } from "lucide-react";

type StepType = "text" | "textarea" | "number" | "file" | "done";

type Step = {
  id: number;
  title: string;
  type: StepType;
  name: keyof FormValues | "__done";
  required?: boolean;
  placeholder?: string;
};

type FormValues = {
  companyName: string;
  oneLine: string;
  amount: string; // keep as string for easy input handling
  pitchDeck: File | null;
  firstName: string;
  lastName: string;
};

const PURPLE = "#6C2BD9";

export default function EntrepriseForm() {
  const steps: Step[] = useMemo(
    () => [
      {
        id: 1,
        title: "Le nom de votre entreprise :*",
        type: "text",
        name: "companyName",
        required: true,
        placeholder: "Répondez ici...",
      },
      {
        id: 2,
        title: "En une phrase, comment expliqueriez-vous votre activité ? *",
        type: "text",
        name: "oneLine",
        required: true,
        placeholder: "Répondez ici...",
      },
      {
        id: 3,
        title: "À combien estimez-vous votre besoin de financement ? *",
        type: "number",
        name: "amount",
        required: true,
        placeholder: "Répondez ici...",
      },
      {
        id: 4,
        title: "Votre Pitch Deck *",
        type: "file",
        name: "pitchDeck",
        required: true,
      },
      {
        id: 5,
        title: "Votre Prénom *",
        type: "text",
        name: "firstName",
        required: true,
        placeholder: "Répondez ici...",
      },
      {
        id: 6,
        title: "Votre Nom *",
        type: "text",
        name: "lastName",
        required: true,
        placeholder: "Répondez ici...",
      },
      { id: 7, title: "Merci !", type: "done", name: "__done" },
    ],
    []
  );

  const [stepIndex, setStepIndex] = useState(0);
  const [values, setValues] = useState<FormValues>({
    companyName: "",
    oneLine: "",
    amount: "",
    pitchDeck: null,
    firstName: "",
    lastName: "",
  });
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const step = steps[stepIndex];

  const canProceed = useMemo(() => {
    if (step.type === "done") return true;
    if (!step.required) return true;
    const v = values[step.name as keyof FormValues];
    if (step.type === "file") return !!values.pitchDeck;
    if (typeof v === "string") return v.trim().length > 0;
    return !!v;
  }, [step, values]);

  const next = useCallback(() => {
    if (stepIndex < steps.length - 1) setStepIndex((i) => i + 1);
  }, [stepIndex, steps.length]);
  const prev = useCallback(() => {
    if (stepIndex > 0) setStepIndex((i) => i - 1);
  }, [stepIndex]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (step.type === "file" && !values.pitchDeck) {
        fileInputRef.current?.click();
        return;
      }
      if (canProceed) next();
      else inputRef.current?.focus();
    }
  };

  const update = (name: keyof FormValues, v: string | File | null) => {
    setValues((old) => ({ ...old, [name]: v as any }));
  };

  const onFileDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) update("pitchDeck", file);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    update("pitchDeck", file);
  };

  // Only digits for amount input
  const onNumberKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Preserve Enter behavior
    if (e.key === "Enter") return onKeyDown(e);
    // Allow control/navigation keys
    const controlKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
      "Home",
      "End",
    ];
    if (controlKeys.includes(e.key) || e.ctrlKey || e.metaKey) return;
    // Allow single digit 0-9
    if (/^[0-9]$/.test(e.key)) return;
    // Block everything else (including e, +, -, ., ,)
    e.preventDefault();
  };

  const onNumberPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const text = e.clipboardData.getData("text");
    const digits = text.replace(/\D+/g, "");
    if (digits !== text) e.preventDefault();
    update("amount", digits);
  };

  const renderField = () => {
    switch (step.type) {
      case "text":
        return (
          <div className="mt-10 max-w-3xl">
            <input
              type="text"
              value={values[step.name as keyof FormValues] as string}
              onChange={(e) =>
                update(step.name as keyof FormValues, e.target.value)
              }
              placeholder={step.placeholder}
              className="w-full bg-transparent text-2xl text-black/70 placeholder:text-black/20 focus:outline-none"
              onKeyDown={onKeyDown}
              ref={inputRef as React.MutableRefObject<HTMLInputElement | null>}
            />
            <div className="mt-3 h-px w-full bg-black/20" />
          </div>
        );
      case "textarea":
        return (
          <div className="mt-10 max-w-3xl">
            <textarea
              value={values[step.name as keyof FormValues] as string}
              onChange={(e) =>
                update(step.name as keyof FormValues, e.target.value)
              }
              placeholder={step.placeholder}
              rows={3}
              className="w-full resize-y bg-transparent text-2xl text-black/70 placeholder:text-black/20 focus:outline-none"
              onKeyDown={onKeyDown}
              ref={inputRef as React.MutableRefObject<HTMLTextAreaElement | null>}
            />
            <div className="mt-3 h-px w-full bg-black/20" />
          </div>
        );
      case "number":
        return (
          <div className="mt-10 max-w-3xl">
            <input
              type="text"
              value={values.amount}
              onChange={(e) => update("amount", e.target.value.replace(/\D+/g, ""))}
              placeholder={step.placeholder}
              className="w-full bg-transparent text-2xl text-black/70 placeholder:text-black/20 focus:outline-none"
              onKeyDown={onNumberKeyDown}
              onPaste={onNumberPaste}
              inputMode="numeric"
              pattern="[0-9]*"
              ref={inputRef as React.MutableRefObject<HTMLInputElement | null>}
            />
            <div className="mt-3 h-px w-full bg-black/20" />
          </div>
        );
      case "file":
        return (
          <div className="mt-10 flex w-full max-w-3xl flex-col items-center">
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={onFileChange}
            />
            <label
              onDrop={onFileDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => fileInputRef.current?.click()}
              className="flex w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#C5A5F8] bg-[#7819D4]/10 px-8 py-16 text-center"
            >
              <CloudUpload color={"#D2AEF5"} size={64} />
              <div className="mt-4 font-bold" style={{ color: PURPLE }}>
                Choisissez un fichier <span className="font-normal text-black">ou</span>{" "}
                <span className="font-bold text-black">glissez ici</span>
              </div>
              <div className="mt-1 text-sm text-black">
                Taille maximale : 10Mo
              </div>
              {values.pitchDeck && (
                <div className="mt-4 text-sm text-black/80">
                  Fichier sélectionné : {values.pitchDeck.name}
                </div>
              )}
            </label>
          </div>
        );
      case "done":
        return (
          <div className="mt-10 flex flex-col items-center text-center">
            <h2 className="font-heading text-4xl font-extrabold text-black">
              Merci !
            </h2>
            <p className="mt-3 text-black/70">
              Nous reviendrons vers vous dans les plus bref délais.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="mx-auto my-12 px-4 md:px-6 w-full">
      {/* Outer frame */}
      <div
        className="rounded-2xl border-20 border-[#7819D4]/10"
      >
        {/* Inner panel */}
        <div className="relative bg-[#EAF2FF] px-6 py-10 md:px-10 md:py-14">
          {/* Top-right logo */}
          <div className="absolute right-6 top-6">
            <Image src="/logo-dark.png" alt="crowd" width={72} height={18} />
          </div>

          <div className="flex flex-col max-w-3xl mx-auto my-10">
            {/* Step number and title */}
            <div className="flex items-start gap-3">
              <span className="text-lg font-semibold" style={{ color: PURPLE }}>
                {step.id}
              </span>
              <span className="text-lg" style={{ color: PURPLE }}>
                →
              </span>
              <h3 className="font-heading text-2xl font-semibold text-black md:text-4xl">
                {step.title}
              </h3>
            </div>

            {/* Field */}
            {renderField()}

            {/* OK + hint */}
            {step.type !== "done" && (
              <div className="mt-8 flex items-center gap-3">
                <button
                  className="rounded-lg px-4 py-2 font-semibold text-white shadow-sm"
                  style={{ backgroundColor: PURPLE }}
                  onClick={() => {
                    if (step.type === "file" && !values.pitchDeck) {
                      fileInputRef.current?.click();
                      return;
                    }
                    if (canProceed) next();
                    else inputRef.current?.focus();
                  }}
                  disabled={step.type === "file" ? false : !canProceed}
                >
                  Ok
                </button>
                <div className="text-sm text-black/70">
                  appuyez sur <span className="font-semibold">Entrée ↵</span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom-right nav arrows */}
          <div className="absolute bottom-6 right-6 flex items-center">
            <button
              onClick={prev}
              disabled={stepIndex === 0}
              className="rounded-l-md bg-[#D2AEF5] p-2 text-white shadow hover:opacity-90"
              aria-label="Précédent"
            >
              <ChevronUp size={18} />
            </button>
            <button
              onClick={() => {
                if (step.type === "file" && !values.pitchDeck) {
                  fileInputRef.current?.click();
                  return;
                }
                if (canProceed) next();
                else inputRef.current?.focus();
              }}
              disabled={
                step.type === "done" || stepIndex === steps.length - 1
                  ? true
                  : step.type === "file"
                  ? false
                  : !canProceed
              }
              className="rounded-r-md bg-[#7819D4] p-2 text-white shadow hover:opacity-90"
              aria-label={step.type === "file" && !values.pitchDeck ? "Choisir un fichier" : "Suivant"}
            >
              <ChevronDown size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
