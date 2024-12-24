# Malaysia Healthcare Website

A modern, multilingual website for the Malaysia Healthcare Travel Council built with Next.js 14 and TypeScript. The website helps international patients discover healthcare services in Malaysia and facilitates medical tourism.

## Features

- 🌐 Multilingual support with language switcher
- 📱 Responsive design with mobile menu
- 🔍 Search functionality
- 🎨 Modern UI with Framer Motion animations
- ♿ Accessibility features including skip links
- 🏥 Medical directory
- 📰 News and articles section
- 📅 Event calendar
- 🎥 Video gallery
- 🌍 Healthcare journey planner
- 🏨 Hospital and clinic directory
- 📊 WordPress CMS integration

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide Icons](https://lucide.dev/) - Icon set
- [Radix UI](https://www.radix-ui.com/) - UI components
- [WordPress](https://wordpress.org/) - Headless CMS
- [shadcn/ui](https://ui.shadcn.com/) - UI component library

## Project Structure

malaysiahealthcare/
├── app/ # Next.js app directory
│ ├── about/ # About page
│ ├── arrival/ # Arrival information
│ ├── calendar/ # Events calendar
│ ├── contact/ # Contact page
│ ├── news/ # News and articles
│ ├── pre-arrival/ # Pre-arrival information
│ ├── treatment/ # Treatment information
│ └── videos/ # Video gallery
├── components/ # Reusable components
├── lib/ # Utilities and helpers
│ ├── wordpress/ # WordPress API integration
│ └── i18n/ # Internationalization
├── public/ # Static assets
└── styles/ # Global style



## Getting Started

1. Clone the repository:

bash
git clone https://github.com/yourusername/malaysiahealthcare.git
cd malaysiahealthcare


2. Install dependencies:

bash
npm install


3. Set up environment variables:

bash
cp .env.example .env.local


Update the following variables in `.env.local`:

WORDPRESS_API_URL=your_wordpress_url/wp-json/wp/v2
WORDPRESS_AUTH_REFRESH_TOKEN=your_token
WORDPRESS_PREVIEW_SECRET=your_preview_secret


4. Run the development server:

bash
npm run dev


5. Open [http://localhost:3000](http://localhost:3000) to view the website

## WordPress Setup

1. Install WordPress on your server
2. Install and activate required plugins:
   - Advanced Custom Fields PRO
   - WP REST API Menus
   - JWT Authentication
   - Custom Post Type UI
   - WP GraphQL (optional)

3. Configure CORS in your WordPress installation
4. Set up custom post types for:
   - Treatments
   - Events
   - News
   - Hospitals
   - Patient Stories

## Deployment

The website can be deployed to any platform that supports Next.js:

1. Build the project:

bash
npm run build


2. Start the production server:

bash
npm start


## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Malaysia Healthcare Travel Council for their support
- Medical facilities and healthcare providers in Malaysia
- Contributors and maintainers of the open-source packages used in this project
