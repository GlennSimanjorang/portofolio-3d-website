---
name: implement-feature
description: Implement a requested project feature with focused changes, validation, and documentation updates.
---

# Implement Feature

Use this skill when implementing a new feature.

## Step 1 - Read Context

Read:

- `AGENTS.md`
- `docs/PROJECT.md`
- `docs/ARCHITECTURE.md`
- `docs/DESIGN.md`
- `docs/TASKS.md`

Read `docs/DESIGN_SYSTEM.md` and `docs/EXPERIENCE.md` when the feature changes the visual or visitor experience. Select other relevant skills for scene, exhibit, responsive, or review work.

Then inspect files related to the requested feature.

## Step 2 - Plan

Before coding, provide a short plan containing:

- what will change
- files likely to change
- possible risks
- how the result will be verified

Do not start unrelated work.

## Step 3 - Implement

While implementing:

- keep the change focused
- avoid unnecessary refactors
- avoid unnecessary dependencies
- preserve existing behavior
- follow current architecture

## Step 4 - Validate

Run available checks:

- typecheck
- lint
- tests
- build

If a check cannot run, explain why.

## Step 5 - Review

Inspect the final diff.

Check for:

- unrelated changes
- duplicated logic
- accidental debug code
- unnecessary files
- architectural violations

Update `docs/ARCHITECTURE.md` for architecture changes, `docs/DESIGN.md` for design behavior changes, and `docs/TASKS.md` when a task is completed. Visually verify UI or 3D changes when possible; report when that verification is still needed.

## Step 6 - Report

Report:

- files changed
- behavior implemented
- validation performed
- remaining risks or follow-up work
