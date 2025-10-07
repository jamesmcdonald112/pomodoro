import BaseButton from "./BaseButton";

type StartButtonProps = {
  toggleStart: () => void;
  label: "Start" | "Pause" | "Resume";
  disabled?: boolean;
};

export default function StartButton({
  toggleStart,
  label,
  disabled,
}: StartButtonProps) {
  return (
    <BaseButton
      aria-pressed={label !== "Pause"}
      aria-label={`${label} the timer`}
      variant="primary"
      onClick={toggleStart}
      disabled={disabled}
    >
      {label}
    </BaseButton>
  );
}
