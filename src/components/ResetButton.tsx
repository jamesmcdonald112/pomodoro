import BaseButton from "./BaseButton";

type ResetButtonProps = {
  toggleReset: () => void;
  disabled?: boolean;
}

export default function ResetButton({toggleReset, disabled} : ResetButtonProps) {

  return (
    <BaseButton    
      aria-label="Reset the timer"
      onClick={toggleReset}
      variant="secondary"
      disabled={disabled}

    >
      Reset
    </BaseButton>
  )
  
}