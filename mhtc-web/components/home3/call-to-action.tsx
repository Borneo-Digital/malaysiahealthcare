"use client"

import { Button } from "@/components/home3/ui/button"
import Link from "next/link"

interface CallToActionProps {
  title: string
  description: string
  primaryButtonText: string
  primaryButtonHref: string
  secondaryButtonText: string
  secondaryButtonHref: string
}

export function CallToAction({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
}: CallToActionProps) {
  return (
    <div className="rounded-lg border bg-card p-8 shadow-sm md:p-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">{title}</h2>
        <p className="mb-8 text-muted-foreground">{description}</p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="bg-[#C8102E] hover:bg-[#A00F26]">
            <Link href={primaryButtonHref}>{primaryButtonText}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

