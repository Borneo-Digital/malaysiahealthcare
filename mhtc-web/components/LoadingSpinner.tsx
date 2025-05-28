// components/LoadingSpinner.tsx

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

/**
 * Loading spinner component
 * @param size Size of the spinner (small, medium, large)
 * @param className Additional CSS classes
 */
export default function LoadingSpinner({
  size = "medium",
  className = "",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    small: "w-4 h-4 border-2",
    medium: "w-8 h-8 border-3",
    large: "w-12 h-12 border-4",
  };

  const sizeClass = sizeClasses[size] || sizeClasses.medium;

  return (
    <div className={`flex justify-center items-center py-4 ${className}`}>
      <div
        className={`${sizeClass} animate-spin rounded-full border-gray-200 border-t-primary`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
