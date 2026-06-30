# Wissem Sghaier Portfolio

Portfolio website inspired by the reference style and customized with your CV, GitHub, and LinkedIn data.

## Highlights

- Premium one-page visual design inspired by the reference portfolio
- Profile photo and GitHub stats loaded from GitHub API
- Dynamic projects section loaded automatically from public repositories
- Detailed sections: About, Expertise, Experience, Achievements, Certifications, Contact
- CV download available directly from the site

## Run with Docker Compose

```bash
docker compose up --build -d
```

Then open:

- http://localhost:8080

## Stop

```bash
docker compose down
```

## Project files

- `index.html`: structure and content
- `styles.css`: premium visual system and responsive layout
- `script.js`: reveal animations, GitHub profile/repositories API integration
- `Dockerfile`: container image using Nginx
- `docker-compose.yml`: local deployment stack
- `nginx.conf`: static hosting and cache rules

## Update your content

Edit `index.html` sections:

- Hero and about
- Skills chips
- Experience timeline
- Certifications and achievements cards
- Contact links

To change GitHub account used for dynamic projects/profile:

- Update `data-github-user` in the `<body>` tag in `index.html`

To add all projects from LinkedIn:

- Open `script.js`
- Edit the `linkedinProjects` array
- Add one object per project with `title`, `period`, `company`, `description`, `tags`, and optional `link`
