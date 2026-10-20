# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A beginner's first website: static HTML pages only. There is no build step, package manager, linter, or test suite. To view a page, open the `.html` file directly in a browser (e.g. `start index.html` on Windows) and refresh with F5 after edits.

The owner is a complete HTML beginner and communicates in Korean. Page content is written in Korean (`<html lang="ko">`, `<meta charset="UTF-8">`).

## Conventions

- **All styling lives in `style.css`**, shared by every page via `<link rel="stylesheet" href="style.css">` (plus the Noto Sans KR Google Font). Don't add inline styles or `<style>` blocks.
- **Dark/light mode:** every page loads `theme.js` in `<head>` and has `<button id="theme-toggle" class="theme-toggle">` right after `<body>` (fixed top-right). `theme.js` sets `<html data-theme="dark|light">` and saves the choice in `localStorage`; with no saved choice the OS setting applies. In `style.css` the dark palette therefore appears twice — under `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) }` and under `:root[data-theme="dark"]` — and both must be edited together. `theme.js` is the only JavaScript; keep it beginner-readable with Korean comments.
- Shared styles target plain elements (`h1`, `table`, `pre`, `blockquote`, `details`…), so sub-pages need no classes. Only `index.html` uses classes (`.hero`, `.chips`, `.cards`/`.card`), defined in the "첫 페이지 전용" block at the end of `style.css`.
- **Responsive rules** are collected in the "반응형 디자인" block at the end of `style.css` (breakpoints 768px tablet, 560px phone, 360px small phone). Add new size-specific rules there rather than scattering media queries.
- The table of contents card is styled with the selector `h2 + ol`, so keep TOCs as an `<ol>` directly after an `<h2>`, and avoid putting other `<ol>`s right after an `<h2>`.
- **`index.html` is the hub.** Every new page gets a link at the bottom of `index.html`, and each sub-page ends with a "맨 위로 돌아가기 | 나의 첫 웹페이지로 가기" footer linking back to `index.html`.
- Longer pages use an `<ol>` table of contents linking to `id` anchors on the `<h2>` sections.
- `html-guide.html` is a teaching page: each concept shows the escaped source inside `<pre>` (using `&lt;` / `&gt;`) followed by the rendered result inside `<blockquote>`. HTML comments in its source explain the markup, because the owner is told to read it with Ctrl+U. Keep both of these patterns when editing it.
