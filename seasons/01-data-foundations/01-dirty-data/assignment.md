# Lesson 1.1: homework

Three levels. Stop at any of them.

## Core

Take the [after-lesson quiz](quiz-post.md).

## Stretch (no code): clean the messy file

1. Open [penguins-messy.csv](../../../data/penguins/penguins-messy.csv) in any spreadsheet. Don't change the original; save a copy first.
2. Find the problems that were added on purpose:
   - 4 duplicate rows
   - 3 species labels written the wrong way
   - 2 zeros used for "not measured"
   - 2 impossible values
3. For each one, decide what to do: fix it, remove it, or keep it. Write down why.
4. Count the rows before and after.

Tip: sort each number column and look at both ends, and use a filter on the `species` column to see every label.

Post what you found in the [homework thread](https://github.com/datalyceum/course/discussions/6).

## Challenge: your own data

Take a dataset you care about, from your work, your city or a public data portal. Run the cleaning routine from the lesson:

1. Keep the original and clean a copy.
2. Count the rows before and after.
3. Look for gaps, then duplicates.
4. Sort each number column and check both ends.
5. Count the labels in each text column.
6. Write down every change and why.

How many gaps, copies and outliers did you find, and what did you do with them? Post your answers in the [homework thread](https://github.com/datalyceum/course/discussions/6).

Want to do it in code? [clean-penguins.ipynb](clean-penguins.ipynb) runs every step on the messy penguin file with pandas.

## Think about it

The average penguin weighs 4,202 g. Is there really a typical penguin, when the file holds three species? We come back to this in lesson 1.2.

---

Done, or stuck? Compare with the [solutions](solutions.md).
