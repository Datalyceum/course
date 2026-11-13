# Lesson 1.1: homework solutions

Try the [homework](assignment.md) first. There is more than one sensible way to clean a file, so compare your reasoning, not only your numbers.

## Core

The answers to the [after-lesson quiz](quiz-post.md) are at the bottom of the quiz, under **Show answers**:

1. **C, the median for female Adelie penguins (3,400 g).** Typical weights differ a lot between groups. The overall median of 4,050 g would be too heavy for her.
2. **A, it looks better than it really is.** The model has already seen that penguin's answer, so the test is no longer a test on new data.
3. **C, keep it.** An outlier is a question, not an automatic delete. A real value stays.

## Stretch: clean the messy file

[penguins-messy.csv](../../../data/penguins/penguins-messy.csv) has 348 rows. Row numbers are spreadsheet rows, with the header as row 1.

| What | Where | What to do | Why |
|---|---|---|---|
| 4 duplicate rows | rows 346 to 349, copies of rows 17, 97, 182 and 282 | remove the copies | each penguin should count once |
| `adelie` | row 32 | change to `Adelie` | one spelling per species |
| `Adelie ` with a space at the end | row 122 | remove the space | the space makes it a different label |
| `Gentoo penguin` | row 252 | change to `Gentoo` | one spelling per species |
| body mass 0 | rows 62 (female Adelie) and 202 (male Chinstrap) | make the cell empty, then fill it or leave it empty | nobody weighed them; 0 g is impossible |
| body mass 42,500 | row 77 | change to 4,250, or remove the value | an extra zero; ten times a normal penguin |
| flipper 1,980 mm | row 159 | change to 198, or remove the value | an extra zero; almost two metres |

**How to find them in a spreadsheet:**

- **Duplicates:** sort by every column (or use your spreadsheet's "remove duplicates" tool on a copy) and look for identical rows next to each other.
- **Labels:** a filter on `species` shows six values instead of three.
- **Zeros and typos:** sort `body_mass_g` and `flipper_length_mm` and look at both ends.

**Fix or remove the typos?** In the lesson we could confirm the right values against the real file, so fixing them is fine. At work, if you can't confirm a value, removing it (leaving the cell empty) is the safer choice. Both answers are good if you wrote down why.

**Filling the zeros.** If you fill them, use the median for the same species and sex: 3,400 g for a female Adelie and 3,950 g for a male Chinstrap. The overall median, 4,050 g, would be wrong for both.

**Rows before and after:** 348 before, 344 after removing the four copies. If you also dropped the two penguins with no measurements, you have 342.

**After cleaning:** three species (152 Adelie, 124 Gentoo, 68 Chinstrap), and the heaviest penguin is a male Gentoo at 6,300 g.

[clean-penguins.ipynb](clean-penguins.ipynb) does every step in pandas, if you want to check your work in code.

## Challenge: your own data

There's no single answer, because it's your dataset. A good answer:

- counts the rows before and after,
- names each problem found (gaps, copies, outliers, labels, units),
- says what was done with each one and why,
- keeps the original file untouched.

If you found nothing at all, look again at the zeros and at the text columns. They hide problems more often than numbers do.

## Think about it

The average penguin weighs 4,202 g, but no group of penguins really sits there: female Adelies are around 3,400 g and male Gentoos around 5,500 g. With three species in one file, a single "typical penguin" can describe none of them well. Lesson 1.2 looks at averages, spread and distributions, and at why the median didn't move when the errors were added.
