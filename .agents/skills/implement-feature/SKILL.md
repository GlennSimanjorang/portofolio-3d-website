---
name: implement-feature
description: Safely implement a feature in this project.
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

## Step 6 - Report

Report:

- files changed
- behavior implemented
- validation performed
- remaining risks or follow-up work
