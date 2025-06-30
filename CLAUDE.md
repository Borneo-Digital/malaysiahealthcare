# Malaysia Healthcare Travel Council Project Guide

## Development Commands
```
cd mhtc-web
npm run dev             # Start development server
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint
npm run validate:translations # Validate translation files
```

## Code Style Guidelines
- **Framework**: Next.js with TypeScript and Tailwind CSS
- **Imports**: Use absolute imports with `@/` prefix (e.g., `@/components/Header`)
- **Components**: Client components use `"use client"` directive at top
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Internationalization**: Use `useTranslation` hook with proper typing
- **Types**: Prefer interfaces for objects, strict type checking enabled
- **Error Handling**: Use try/catch with fallbacks for translations
- **Formatting**: Use consistent spacing and indentation
- **UI Components**: Use Radix UI components when appropriate

## Translation Pattern
Add new translations to all locale files (en, ms, id, zh, ar) and run validation.

Here is your to-do list to finalize the transition to the new `home4` design:

### To-Do List: Finalize `home4` Design Implementation

A significant amount of work has already been completed to align the website with the `home4` design. The homepage, contact page, and corporate profile are already using the new components. However, a few important steps remain to ensure consistency across the entire site.

---

####  Phase 1: Immediate Tasks (Consistency and Stability)

1.  **Audit and Update Page Layouts:**
    *   **The Issue:** My analysis revealed that some pages, like the "Member Hospitals" page, are currently displayed without any site header or footer. This is because neither the page file (`page.tsx`) nor its corresponding layout file (`layout.tsx`) includes them.
    *   **Action:** Systematically review every page directory under `mhtc-web/app/[locale]/`. For each page, ensure there is a `layout.tsx` file that imports and renders the `Header` and `Footer` components from `mhtc-web/components/home4/`.

    *   **Example Fix (for a page missing the layout):**
        If a directory like `mhtc-web/app/[locale]/some-page/` is missing a `layout.tsx`, create one with the following content:
        ```tsx
        import { Header } from "@/components/home4/header";
        import { Footer } from "@/components/home4/footer";

        export default function PageLayout({
          children,
        }: {
          children: React.ReactNode;
        }) {
          return (
            <>
              <Header />
              <main>{children}</main>
              <Footer />
            </>
          );
        }
        ```
    *   **Pages to Check:** Based on the file structure, please audit these directories:
        - `arrival/`
        - `calendar/`
        - `corporate-governance/`
        - `healthcare-travel-guide/`
        - `journey1/`, `journey2/`, `journey3/`
        - `member-hospital/` (Confirmed to be missing the layout)
        - `mhtc-chronicles/`
        - `post-treatment/`
        - `pre-arrival/`
        - `privacy-policy/`
        - `treatment/`
        - `videos/`

2.  **Review and Consolidate Page-Specific Components:**
    *   **The Issue:** Some pages might be using components from older designs (e.g., `button.tsx` from `components/ui/` instead of `components/home4/ui/`).
    *   **Action:** As you audit each page, check its component imports. Ensure that pages are using UI components from the `components/home4/` directory where applicable to maintain visual consistency.

---

#### Phase 2: Future Cleanup (To be done after Phase 1 is complete)

Once the site is stable and consistently using the `home4` look and feel, you can proceed with cleaning up the old, unused assets.

3.  **Decommission Old Homepage Routes:**
    *   **The Issue:** The routes `/home1`, `/home2`, `/home3`, and their associated sub-pages (`home2-arrival`, etc.) are still active. This can cause confusion and bloat the project.
    *   **Action:** Plan to remove the directories for these old homepages from `mhtc-web/app/[locale]/`. Consider setting up redirects from the old URLs to the main homepage (`/`) in your `next.config.mjs` file to avoid breaking any existing links.

4.  **Remove Old Component Libraries:**
    *   **The Issue:** The `mhtc-web/components/` directory contains folders for `home1`, `home2`, and `home3`, which are no longer needed.
    *   **Action:** Once you are certain no pages are using them, delete the component directories for the old designs.

5.  **Review Global Styles:**
    *   **The Issue:** While `globals.css` appears to be well-structured, a final review is recommended after all old components are removed.
    *   **Action:** After cleanup, quickly review `globals.css` and `tailwind.config.ts` to ensure there are no legacy styles or theme settings that can be removed.

By following this plan, you can systematically and safely transition your entire website to the new `home4` design.