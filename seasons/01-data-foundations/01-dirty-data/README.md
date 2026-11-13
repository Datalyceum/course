# Lesson 1.1: Dirty data

**Missing values, duplicates and outliers, on a messy copy of the penguin data**

| Video | Lesson post | Quizzes | Homework | Notebook |
|---|---|---|---|---|
| [Watch on YouTube](https://www.youtube.com/watch?v=vayeh_jzbcM) | [Read on Substack](https://datalyceum.substack.com/p/lesson-11-dirty-data) | [Before](quiz-pre.md) · [After](quiz-post.md) | [assignment.md](assignment.md) · [Solutions](solutions.md) | [clean-penguins.ipynb](clean-penguins.ipynb) (optional) |

## What you will be able to do

- Spot the three problems found in almost every dataset: missing values, duplicates and outliers.
- Choose what to do with each one, and explain why.
- Run a simple cleaning routine on any file, and keep a record of what you changed.

**Before you start:** [lesson 0.2](../../00-orientation/02-what-is-data) and [lesson 0.3](../../00-orientation/03-how-machines-learn).

## Key ideas

- **Garbage in, garbage out.** A model learns whatever is in the data, mistakes included.
- **Missing values** don't always look empty. They can be a blank cell, `NA`, a dash, the word "unknown", or a zero. A zero is the worst, because it looks like a real measurement.
- **Three choices for a gap:** drop the row, fill it with a typical value such as the median, or, usually better, fill it with the typical value for that group.
- **Duplicates** make counts and averages wrong. In machine learning, a penguin that lands in both the training set and the test set makes the test score look better than it really is.
- **Outliers** are values far from the others. A quick rule flags values more than 1.5 times the middle half's range beyond it. An outlier is a question, not an automatic delete: fix a typo you can confirm, remove an impossible value, keep a real one.
- **Inconsistent labels and units.** To a computer, "Adelie" and "adelie" are different categories, and grams can't be compared with kilograms.

## On real data

The real [penguins.csv](../../../data/penguins/penguins.csv) is tidy: no duplicates, no strange values, 2 penguins with no measurements and 11 with no value for sex. So we made a practice copy, [penguins-messy.csv](../../../data/penguins/penguins-messy.csv), with problems added on purpose. The [data README](../../../data/penguins/README.md#penguins-messycsv) lists every change.

| | Messy copy | After cleaning |
|---|---|---|
| Rows | 348 | 344 |
| Species labels | 6 | 3 |
| Heaviest penguin | 42,500 g (a typo for 4,250) | 6,300 g (a real male Gentoo) |
| Average body mass | 4,291 g | 4,202 g |
| Median body mass | 4,050 g | 4,050 g |

- **Missing values.** Two penguins weigh exactly 0 g in the messy copy. Nobody weighed them; someone typed 0. Typical values differ a lot by group: a female Adelie weighs around 3,400 g and a male Gentoo around 5,500 g, so the overall median of 4,050 g would be wrong for both.
- **Duplicates.** Four rows appear twice.
- **Outliers.** On the messy body mass, the middle half runs from 3,550 to 4,750 g. The rule flags anything below 1,750 g or above 6,550 g, which catches 42,500 and both zeros. One flipper is 1,980 mm long, a typo for 198.
- **Labels.** "adelie", "Adelie " (with a space at the end) and "Gentoo penguin" sit next to the three real species.

Notice that the errors moved the average but not the median. We look at why in lesson 1.2.

You can check every number yourself in [clean-penguins.ipynb](clean-penguins.ipynb).

## A cleaning routine

1. Keep the original untouched and clean a copy.
2. Count the rows before and after.
3. Look for gaps, then for duplicates.
4. Sort each number column and check both ends.
5. Count the labels in each text column.
6. Write down every change you make, and why.

## Where this lives on Azure

| Task | Azure service |
|---|---|
| See missing values and statistics per column, click cleaning steps, get the Python code | Data Wrangler in Microsoft Fabric notebooks |
| Clean data without code, with the Power Query editor | Dataflow Gen2 in Microsoft Fabric |

**Exam link:** "handle duplicate, missing, and late-arriving data" is one of the skills measured in the Fabric Data Engineer exam (DP-700). See [exam-maps](../../../exam-maps).

## The story at the start

In October 2020, 15,841 positive COVID test results were left out of England's daily count for about a week, because an old Excel file format holds only 65,536 rows. Source: [The Register](https://www.theregister.com/2020/10/05/excel_england_coronavirus_contact_error/).

## Homework

[assignment.md](assignment.md). Then check yourself with the [after-lesson quiz](quiz-post.md).

**Next:** lesson 1.2: Statistics 1: averages, spread and distributions.
