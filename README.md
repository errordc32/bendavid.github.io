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
status: prototype       # complete | prototype | design | concept (badge on card + project page)
team: Team of 4         # shown next to Role/Timeline (optional)
tools: [SolidWorks, Wire EDM, ROS 2]   # "Tools & methods" chips under the header (optional)
links:                  # buttons under the header (optional)
  - label: Read the paper
    url: https://...
order: 9                # sort position
image: /assets/images/projects/my-project.jpg   # card thumbnail + link-preview image (jpg/png/gif, optional)
card: /assets/images/projects/my-project.mp4    # use a video/other media on the card instead of `image` (optional)
image_position: 50% 30%                         # where the card crop focuses (optional)
cover: /assets/images/projects/my-project.mp4   # large media at the top of the project page (optional; .mp4 autoplays muted on loop)
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

### Images, GIFs, and video inside a write-up

Put this on its own line, with a blank line above and below, anywhere in a project's Markdown:

```liquid
{% include media.html src="/assets/images/projects/my-project/test.mp4" caption="Bench test" %}
```

- `.mp4` / `.webm` play like a GIF (muted, looping). Add `controls=true` for a normal video player with sound.
- `class="wide"` lets a figure extend past the text column, which helps detailed diagrams.
- `class="small"` caps a figure at 420px, which suits portrait photos and low-resolution images.
- Avoid spaces in file and folder names. Use `_` instead.
- Clicking an image opens it full size.
- Prefer MP4 over GIF for anything longer than a couple of seconds, since it's often 10–20× smaller.

### Files to add

- `assets/files/Bendavid_Maimon_Resume.pdf`: linked from the nav and About page
- `assets/images/headshot.jpg`: then uncomment the `<img>` in `about.html`
- `assets/images/projects/*.jpg`: project photos (landscape, ~1600px wide works well)

## Running locally

```sh
bundle install
bundle exec jekyll serve
```
