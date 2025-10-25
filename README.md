# Agriculture Graduate Portfolio

A modern, responsive portfolio website built with React.js for agriculture graduates and professionals. This portfolio showcases expertise in sustainable farming, agricultural technology, and modern farming practices.

## 🌱 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with agriculture-themed styling
- **Interactive Components**: Smooth animations and interactive elements
- **Project Showcase**: Filterable project gallery with detailed descriptions
- **Skills Visualization**: Animated skill bars and categorized expertise
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility

## 🚀 Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal introduction, education, and key highlights
3. **Skills**: Categorized skills with progress bars and visual indicators
4. **Experience**: Professional experience timeline and education details
5. **Projects**: Filterable project gallery with technology tags
6. **Contact**: Contact information and functional contact form
7. **Footer**: Additional links and social media connections

## 🛠️ Technologies Used

- **React.js 18**: Modern React with hooks and functional components
- **CSS3**: Custom styling with CSS Grid and Flexbox
- **React Icons**: Beautiful icons from various icon libraries
- **Responsive Design**: Mobile-first approach with media queries
- **Modern JavaScript**: ES6+ features and modern syntax

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd agro-resume-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio

## 🏗️ Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

- `src/components/Hero.js` - Name, title, and description
- `src/components/About.js` - Personal story, education, and achievements
- `src/components/Experience.js` - Work experience and education details
- `src/components/Contact.js` - Contact information and social links

### Projects
Add your projects in `src/components/Projects.js`:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    category: "technology", // or "sustainable", "analytics"
    image: "project-image-url",
    description: "Project description",
    technologies: ["Tech1", "Tech2", "Tech3"],
    features: ["Feature 1", "Feature 2", "Feature 3"],
    github: "github-link",
    demo: "demo-link",
    icon: <FaYourIcon />
  }
];
```

### Skills
Update skills in `src/components/Skills.js`:

```javascript
const skillCategories = [
  {
    title: "Your Category",
    icon: <FaYourIcon />,
    skills: [
      { name: "Skill Name", level: 90 },
      // Add more skills
    ]
  }
];
```

### Styling
- Main colors are defined in `src/index.css`
- Component-specific styles are in individual CSS files
- Color scheme uses agriculture-themed greens (#2d5016, #4a7c59)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help customizing this portfolio, please feel free to reach out!

---

**Built with ❤️ for the agriculture community**
