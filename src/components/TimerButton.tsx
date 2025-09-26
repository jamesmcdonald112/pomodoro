type StartButtonProps = {
  toggleStart: () => void;
  label: "Start" | "Pause" | "Resume";

}

export default function StartButton({toggleStart, label} : StartButtonProps) {

  return (
    <button 
      type="button"
      aria-pressed={label !== "Start"}
      aria-label={`${label} the timer`}
      onClick={toggleStart}
      className="
        w-full md:min-w-[120px] md:w-auto
        px-6 py-3
        text-white
        border border-white rounded-lg 
        bg-gray-400  hover:bg-gray-500 
        hover:scale-105 focus:scale-105
        focus:outline-none focus:ring-2 focus:ring-blue-400 
        transition-transform duration-200"
    >
      {label}
    </button>
  )
  
}