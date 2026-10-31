# bendavid.github.io

Personal engineering portfolio for Bendavid Maimon, built with Jekyll and served by GitHub Pages.

## Editing content

| What | Where |
| --- | --- |
| Name, email, links, resume path | `_config.yml` |
| Projects (one file each) | `_projects/*.md` |
| Experience timeline | `_data/experience.yml` |
| Skills | `_data/skills.yml` |
| Home page copy | `index.html` |
| About page | `about.html` |
| Styling | `assets/css/style.scss` |

### Adding a project

Create `_projects/my-project.md`:

```yaml
---
title: My Project
summary: One sentence shown on the card and under the title.
org: Lab / Team
role: Your role
period: 2025 – 2026
tags: [Mechanical Design, Controls]
featured: true          # show on the home page
order: 9                # sort position
image: /assets/images/projects/my-project.jpg   # card + cover image (optional)
stats:                  # optional highlight numbers
  - value: "−40%"
    label: Weight
gallery:                # optional image grid at the bottom
  - src: /assets/images/projects/my-project-2.jpg
    caption: Test rig
---

Write the case study in Markdown here.
```

Projects without an `image` get a blueprint-style placeholder.

### Files to add

- `assets/files/Bendavid_Maimon_Resume.pdf`: linked from the nav and About page
- `assets/images/headshot.jpg`: then uncomment the `<img>` in `about.html`
- `assets/images/projects/*.jpg`: project photos (landscape, ~1600px wide works well)

## Running locally

```sh
bundle install
bundle exec jekyll serve
```
