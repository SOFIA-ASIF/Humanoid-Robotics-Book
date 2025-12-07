<!-- Sync Impact Report -->
<!--
Version change: 0.0.0 -> 1.0.0
Modified principles:
- [PRINCIPLE_1_NAME] -> Technical Accuracy
- [PRINCIPLE_2_NAME] -> Clear and Structured Writing
- [PRINCIPLE_3_NAME] -> Consistent Voice and Format
- [PRINCIPLE_4_NAME] -> AI-Native and Spec-Driven Workflow
Added sections:
- Standards
- Constraints
Removed sections:
- None
Templates requiring updates:
- .specify/templates/plan-template.md: ⚠ pending
- .specify/templates/spec-template.md: ⚠ pending
- .specify/templates/tasks-template.md: ⚠ pending
- .specify/templates/commands/*.md: ⚠ pending
Follow-up TODOs:
- None
-->
# AI-Generated Technical Book Constitution

## Core Principles

### I. Technical Accuracy
All content must be technically accurate, free from hallucinations. Unverifiable claims MUST be explicitly marked with TODOs for future validation.

### II. Clear and Structured Writing
Content MUST be written in a clear, concise, and structured manner, targeting a Computer Science/engineering audience.

### III. Consistent Voice and Format
A consistent voice, terminology, and chapter format MUST be maintained throughout the book to ensure a cohesive reading experience.

### IV. AI-Native and Spec-Driven Workflow
The entire book development MUST adhere to an AI-native, spec-driven workflow, where each file and content section is regenerable from its corresponding specification.

## Standards

- Docusaurus-compliant MD/MDX with frontmatter.
- Chapter template: Overview → Objectives → Core Content → Examples → Figures → Summary.
- IEEE-style citations for factual claims.
- Code examples MUST be validated or marked for review.
- One figure per chapter (placeholder allowed).

## Constraints

- 8–12 chapters; 20k–30k words total.
- Includes preface, glossary, index.
- Build must pass `npm run build` with zero warnings.
- GitHub Pages deployment via GitHub Actions.

## Governance

This Constitution supersedes all other practices and documentation within the project. Amendments to this Constitution require:
1.  Documentation of proposed changes and rationale.
2.  Approval by project maintainers.
3.  A plan for migrating existing content or processes to align with the new principles.

All Pull Requests and code reviews MUST verify compliance with the principles and standards outlined herein. Complexity in any aspect of the project MUST be justified by clear necessity and adherence to the core principles.

**Version**: 1.0.0 | **Ratified**: 2025-12-07 | **Last Amended**: 2025-12-07
