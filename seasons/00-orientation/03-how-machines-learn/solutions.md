# Lesson 0.3: homework solutions

Try the [homework](assignment.md) first. Your exact numbers in the Stretch depend on the rule you picked, so compare your reasoning, not only your count.

## Core

The answers to the [after-lesson quiz](quiz-post.md) are at the bottom of the quiz, under **Show answers**:

1. **B, overfitting.** It's perfect on the penguins it trained on, but does worse on new penguins than a simpler model. It memorised instead of learning the pattern.
2. **C, clustering.** No labels, and the goal is to group similar things, so it's unsupervised learning.
3. **A, Automated ML.** It trains and compares many models for you and shows the best one.

## Stretch: be the model

342 penguins have a flipper length (two were never measured).

**Where Gentoo penguins start.** The shortest Gentoo flipper is **203 mm**. So a first rule is "flipper longer than 202 mm means Gentoo". That rule gets **15 penguins wrong**: it catches every Gentoo, but also 11 Chinstrap and 4 Adelie with long flippers.

**A better rule.** Move the line up a little. "Flipper longer than 206 mm means Gentoo" gets **8 wrong out of 342**, about 98% right:

- 7 penguins are above the line but aren't Gentoo (5 Chinstrap, 2 Adelie).
- 1 Gentoo is below the line, the one with a 203 mm flipper.

That's the same rule the model in the lesson found (206.5 mm). Flippers are measured in whole millimetres, so 206 and 206.5 split the penguins the same way.

| Rule: Gentoo if flipper is longer than | Wrong |
|---|---|
| 202 mm | 15 |
| 205 mm | 9 |
| 206 mm | 8 |
| 207 mm | 8 |
| 210 mm | 25 |

**Why you can't reach zero.** The longest flipper that isn't Gentoo is a Chinstrap at 212 mm, and the shortest Gentoo is 203 mm. The two groups overlap, so no single line on one measurement can separate them perfectly. That's why the model in the lesson also uses bill length.

## Challenge: changing max_depth

Results from [first-model.ipynb](first-model.ipynb), with 256 penguins for training and 86 hidden for the test:

| max_depth | Training score | Test score | Rules (leaves) |
|---|---|---|---|
| 1 | 0.789 | 0.802 | 2 |
| 2 | 0.941 | 0.977 | 4 |
| 3 | 0.941 | 0.977 | 7 |
| 5 | 0.977 | 0.953 | 18 |
| No limit | 1.000 | 0.953 | 26 |

**Which one to choose: `max_depth=2`.**

- **Depth 1 underfits.** One question can split the penguins into only two groups, so the model never predicts Chinstrap. All 17 Chinstraps in the test are wrong.
- **Depths 2 and 3 score the same on the test,** but depth 2 does it with 4 rules instead of 7. When two models do equally well, pick the simpler one.
- **From depth 5, the model starts to overfit.** The training score goes up and the test score goes down. The extra rules fit the training penguins, not penguins in general.

A caveat: we chose depth 2 by looking at the test score. Do that many times and the test stops being a fair surprise. Later in the course we add a third set, the validation set, for exactly this choice.

## Think about it

**99% on the training data and 70% on new data is overfitting.** The model learned the training examples, quirks and all, instead of the pattern.

What to try first:

1. **Make the model simpler,** for example a smaller `max_depth` for a decision tree.
2. **Get more training data,** so the quirks of a few examples matter less.
3. **Check that the new data looks like the training data.** If the new data comes from a different place or time, the model may be fine and the world may have changed.

Lesson 3.4 goes deeper into this.

Questions about these solutions? Ask in the [Lesson 0.3 homework thread](https://github.com/datalyceum/course/discussions/5).
