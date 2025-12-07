---
description: "Task list for Physical AI & Humanoid Robotics Book implementation"
---

# Tasks: Physical AI & Humanoid Robotics Book

**Input**: Design documents from `/specs/001-physical-ai-book/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The feature specification does not explicitly request automated unit/integration tests for the book content itself, but rather validation of technical accuracy, build success, and deployment. Therefore, test tasks will focus on content and build validation.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description with file path`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `docs/`, `src/`, `static/`, `blog/` at repository root (Docusaurus standard)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic Docusaurus structure

- [x] T001 Initialize Docusaurus project (completed in root)
- [x] T002 Configure `docusaurus.config.js` with project metadata, URL, and base URL
- [x] T003 Create `sidebars.js` for initial book navigation structure
- [ ] T004 Create `src/css/custom.css` for custom styling if needed
- [ ] T005 Create `docs` directory and initial `docs/index.mdx` for homepage content

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story content can be written. All foundational tasks should align with the 'AI-Generated Technical Book Constitution' principles, especially regarding technical accuracy and test-first development.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T006 Define chapter template `_template.md` in a suitable location (e.g., `docs/_templates/chapter.mdx`)
- [ ] T007 Create placeholder files for Preface (`docs/preface.mdx`), Glossary (`docs/glossary.mdx`), and Index (`docs/index-book.mdx`)
- [ ] T008 Setup GitHub Actions workflow `.github/workflows/deploy.yml` for Docusaurus build and GitHub Pages deployment
- [ ] T009 [P] Research best practices for Docusaurus theming for a technical book in `specs/001-physical-ai-book/research.md` (Decision: Use default classic theme with minor customizations)

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Robotics Student Learning Embodied AI (Priority: P1) 🎯 MVP

**Goal**: Provide foundational understanding of Physical AI, embodied intelligence, and humanoid robotics concepts.

**Independent Test**: Readers can accurately define core concepts and describe the conceptual simulate → train → deploy → humanoid control workflow.

### Research & Outline for User Story 1

- [ ] T010 [US1] Research core concepts of Physical AI for `specs/001-physical-ai-book/research.md`
- [ ] T011 [US1] Outline Chapter 1: Introduction to Physical AI in `docs/chapter1-intro-physical-ai.mdx`
- [ ] T012 [US1] Outline Chapter 2: Embodied Intelligence Fundamentals in `docs/chapter2-embodied-intelligence.mdx`
- [ ] T013 [US1] Outline Chapter 3: Humanoid Robotics Basics in `docs/chapter3-humanoid-basics.mdx`

### Implementation for User Story 1

- [ ] T014 [US1] Write Core Content for Chapter 1: Introduction to Physical AI in `docs/chapter1-intro-physical-ai.mdx`
- [ ] T015 [US1] Write Core Content for Chapter 2: Embodied Intelligence Fundamentals in `docs/chapter2-embodied-intelligence.mdx`
- [ ] T016 [US1] Write Core Content for Chapter 3: Humanoid Robotics Basics in `docs/chapter3-humanoid-basics.mdx`
- [ ] T017 [US1] Add Docusaurus frontmatter, objectives, examples, figures (placeholders), and summaries for Chapters 1-3

**Checkpoint**: At this point, User Story 1 content should be drafted and conceptually verifiable.

---

## Phase 4: User Story 2 - Instructor Building Curriculum (Priority: P2)

**Goal**: Ensure the book is structured as a clear textbook-style guide aligned with a 13-week course.

**Independent Test**: Table of contents, chapter structures, and weekly breakdowns confirm alignment with a 13-week course curriculum.

### Implementation for User Story 2

- [ ] T018 [US2] Review and refine overall book structure (8-12 chapters) to fit 13-week course
- [ ] T019 [US2] Add weekly breakdowns or module summaries to relevant sections/chapters
- [ ] T020 [US2] Ensure all chapters adhere to the standardized chapter template

**Checkpoint**: Book structure is defined and aligns with curriculum needs.

---

## Phase 5: User Story 3 - Practitioner Implementing Humanoid Control (Priority: P3)

**Goal**: Cover practical application of core technologies like ROS 2, Gazebo, Unity, NVIDIA Isaac, and VLA.

**Independent Test**: Outlining the steps to simulate, train, and deploy a basic humanoid control system using specified technologies.

### Research & Outline for User Story 3

- [ ] T021 [US3] Research ROS 2 for Physical AI applications in `specs/001-physical-ai-book/research.md`
- [ ] T022 [US3] Research Gazebo and Unity for simulation in `specs/001-physical-ai-book/research.md`
- [ ] T023 [US3] Research NVIDIA Isaac platform and VLA models in `specs/001-physical-ai-book/research.md`
- [ ] T024 [US3] Outline Chapter 4: ROS 2 for Robotics Control in `docs/chapter4-ros2-control.mdx`
- [ ] T025 [US3] Outline Chapter 5: Simulation with Gazebo & Unity in `docs/chapter5-simulation.mdx`
- [ ] T026 [US3] Outline Chapter 6: NVIDIA Isaac & Digital Twins in `docs/chapter6-isaac-digital-twins.mdx`
- [ ] T027 [US3] Outline Chapter 7: Vision-Language-Action Models in `docs/chapter7-vla-models.mdx`
- [ ] T028 [US3] Outline Chapter 8: Deploying to Humanoid Systems in `docs/chapter8-deploy-humanoids.mdx`
- [ ] T029 [US3] Outline additional chapters if needed (up to 12 total)

### Implementation for User Story 3

- [ ] T030 [US3] Write Core Content for Chapters 4-8 (ROS 2, Simulation, Isaac, VLA, Deployment)
- [ ] T031 [US3] Add Docusaurus frontmatter, objectives, examples, figures (placeholders), and summaries for Chapters 4-8
- [ ] T032 [US3] Integrate hardware architecture details within relevant chapters (e.g., humanoids, deployment)

**Checkpoint**: Core content for all practical applications is drafted.

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Final review, quality assurance, and deployment readiness.

- [ ] T033 Review all chapters for technical accuracy, consistency, and alignment with Constitution
- [ ] T034 Ensure all factual claims have IEEE-style citations (or "TODO: citation" if pending)
- [ ] T035 Validate all code examples (or mark "TODO: validate")
- [ ] T036 Confirm all diagrams/figures are present (even placeholders)
- [ ] T037 Perform `npm run build` locally and ensure zero warnings
- [ ] T038 Verify GitHub Actions deployment workflow passes checks and deploys to GitHub Pages
- [ ] T039 Check for broken links and correct rendering on the deployed site
- [ ] T040 Final review of Preface, Glossary, and Index content
- [ ] T041 Ensure the total word count is within 20k-30k words

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user story content creation
- **User Stories (Phases 3-5)**: All depend on Foundational phase completion
  - User Story 1 (P1) should be completed first to lay the foundation.
  - User Story 2 (P2) can proceed after US1 is conceptually stable.
  - User Story 3 (P3) can proceed after Foundational, but benefits from US1/US2.
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Benefits from US1's conceptual framework
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Benefits from US1's conceptual framework and US2's structural clarity

### Within Each User Story

- Research/Outline tasks for a chapter should precede writing core content for that chapter.
- Core content writing should precede adding frontmatter, objectives, etc.
- Integrating hardware architecture should happen after relevant chapter content is drafted.

### Parallel Opportunities

- Many research tasks for different technologies (e.g., T010, T021, T022, T023) can run in parallel.
- Outlining of different chapters within the same user story phase can be done in parallel (e.g., T011, T012, T013).
- Writing core content for different chapters within the same user story phase can be done in parallel (e.g., T014, T015, T016).
- User Stories 2 and 3 can be worked on in parallel after User Story 1 is substantially complete, though cross-referencing will be needed.

---

## Parallel Example: User Story 1

```bash
# Research and outline foundational chapters
Task: "Research core concepts of Physical AI for specs/001-physical-ai-book/research.md"
Task: "Outline Chapter 1: Introduction to Physical AI in docs/chapter1-intro-physical-ai.mdx"
Task: "Outline Chapter 2: Embodied Intelligence Fundamentals in docs/chapter2-embodied-intelligence.mdx"
Task: "Outline Chapter 3: Humanoid Robotics Basics in docs/chapter3-humanoid-basics.mdx"

# Write core content for foundational chapters (can be parallelized per chapter)
Task: "Write Core Content for Chapter 1: Introduction to Physical AI in docs/chapter1-intro-physical-ai.mdx"
Task: "Write Core Content for Chapter 2: Embodied Intelligence Fundamentals in docs/chapter2-embodied-intelligence.mdx"
Task: "Write Core Content for Chapter 3: Humanoid Robotics Basics in docs/chapter3-humanoid-basics.mdx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all content creation)
3. Complete Phase 3: User Story 1 (Foundational concepts drafted)
4. **STOP and VALIDATE**: Review drafted content for US1, ensure conceptual clarity.
5. Deploy a minimal site if ready for initial feedback.

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Draft User Story 1 content → Review independently → Deploy/Demo (MVP!)
3. Implement User Story 2 (structure) → Review independently → Deploy/Demo
4. Draft User Story 3 content → Review independently → Deploy/Demo
5. Each story adds value without breaking previous efforts.

### Parallel Team Strategy

With multiple contributors:

1. Team completes Setup + Foundational together.
2. Once Foundational is done:
   - Contributor A: User Story 1 (content drafting)
   - Contributor B: User Story 2 (structural elements, curriculum alignment)
   - Contributor C: User Story 3 (content drafting for specific technologies)
3. Content integrates and reviews independently.

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify content accuracy and structural adherence throughout.
- Commit after each task or logical group.
- Stop at any checkpoint to validate story independently.
- Avoid: vague tasks, cross-story dependencies that break independence for content.
