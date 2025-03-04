"use client";

// components/ErrorDisplay.tsx
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { CommonTranslations } from "@/types/translations";
import LocaleLink from "./LocaleLink";

interface ErrorDisplayProps {
  error: Error & { digest?: string };
  reset?: () => void;
  showHomeLink?: boolean;
}

/**
 * Display component for errors
 * @param error The error object
 * @param reset Optional function to reset/retry
 * @param showHomeLink Whether to show a link to the homepage
 */
export default function ErrorDisplay({
  error,
  reset,
  showHomeLink = true,
}: ErrorDisplayProps) {
  const { t } = useTranslation<CommonTranslations>("common");

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center max-w-md mx-auto">
      <div className="text-red-600 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.error}</h2>

      <p className="text-gray-600 mb-6">
        {error.message || t.somethingWentWrong}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        {reset && (
          <button
            onClick={reset}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          >
            {t.tryAgain}
          </button>
        )}

        {showHomeLink && (
          <LocaleLink
            href="/"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
          >
            {t.backToHome}
          </LocaleLink>
        )}
      </div>

      {error.digest && (
        <p className="text-xs text-gray-500 mt-8">Error ID: {error.digest}</p>
      )}
    </div>
  );
}
