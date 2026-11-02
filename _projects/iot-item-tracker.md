---
title: IoT Patron-Item Tracker
summary: An Arduino IoT tracking system that reports item status to library staff through Slack, plus automated syncing between Google Workspace and Ex Libris.
org: Geisel Library
role: CDM Operations Specialist
period: 2023 – 2025
tags: [Embedded, Software]
featured: false
status: complete           # complete | prototype | design | concept
order: 8
tools: [Arduino, C++, Wi-Fi IoT, Slack API, Google Apps Script, Ex Libris (Alma)]
# image: /assets/images/projects/iot-tracker.jpg
---

## The problem

UCSD's Geisel Library handles a steady flow of patron items: holds, returns, and materials moving between service points. Tracking where each item was and when its status changed was mostly **manual**. Staff checked shelves, updated spreadsheets by hand, and messaged each other to coordinate. Things got missed, and time went to bookkeeping instead of helping patrons.

<!-- VERIFY: exactly what items/workflow this tracked -->

## The system

I built two connected pieces of automation:

```
 Item station (Arduino + sensors) ──Wi-Fi──► Slack API ──► team channel alerts
                                                   │
 Google Workspace (Sheets) ◄──── sync script ────► Ex Libris (library system)
```

### Arduino IoT tracker + Slack library

- A **Wi-Fi-connected Arduino** detects item status changes at the station automatically.
- I wrote a reusable **Arduino IoT library** that formats status and user data and posts it to the team through the **Slack API**, so staff get a real-time notification instead of having to check.
- Packaging it as a library meant other stations or workflows could reuse it with just a few lines of code.

<!-- VERIFY: board, sensing method, and what data the messages contained -->

### Automated database handling

The library's records live in **Ex Libris**, while staff work day to day in **Google Workspace**. I programmed an automated system that moves data between the two, so updates in one show up in the other without manual re-entry or copy-paste errors.

<!-- VERIFY: direction of sync, frequency, and tooling (Apps Script? Python?) -->

## Results

- Staff are notified **automatically** when item status changes.
- Far less manual data entry between Google Workspace and Ex Libris.
- Reusable code the team can extend to new workflows.

<!-- ADD: any numbers, e.g. hours saved per week, items tracked -->

## What I took away

The most useful engineering isn't always the most complex. A small microcontroller and a few API calls removed a recurring headache for a whole team. Writing it as a **reusable library** rather than a one-off script is what made it last.
