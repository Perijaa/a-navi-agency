export function SectionWave({ fill = "#ffffff" }: { fill?: string }) {
  return (
    <div className="pointer-events-none relative -mt-px w-full leading-[0]">
      <svg
        viewBox="0 0 1440 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 48V24C240 8 480 0 720 0C960 0 1200 8 1440 24V48H0Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
