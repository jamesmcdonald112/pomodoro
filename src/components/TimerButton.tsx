import BaseButton from "./BaseButton";

type StartButtonProps = {
  toggleStart: () => void;
  label: "Start" | "Pause" | "Resume";
};

export default function StartButton({ toggleStart, label }: StartButtonProps) {
  return (
    <BaseButton
      aria-pressed={label !== "Pause"}
      aria-label={`${label} the timer`}
      variant="primary"
      onClick={toggleStart}
    >
      {label}
    </BaseButton>
  );
}
