import "./ScrollProgressBar.scss";

interface ScrollProgressBarProps {
  progress: number;
}

export const ScrollProgressBar = ({ progress }: ScrollProgressBarProps) => {
  return (
    <div className="scroll-progress">
      <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
};
