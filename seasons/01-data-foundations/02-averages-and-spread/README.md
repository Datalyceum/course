# Lesson 1.2: Statistics 1

**Averages, spread and distributions, on the penguin data**

| Video | Lesson post | Quizzes | Homework | Notebook |
|---|---|---|---|---|
| L12VIDEO | L12POST | [Before](quiz-pre.md) · [After](quiz-post.md) | [assignment.md](assignment.md) · Solutions (Monday 7 December) | [describe-penguins.ipynb](describe-penguins.ipynb) (optional) |

## What you will be able to do

- Find the middle of a column two ways, the mean and the median, and say which one to trust.
- Describe how spread out the values are with the range, the middle half and the standard deviation.
- Read a histogram and spot skew and two humps.
- Describe any number column with a short routine.

**Before you start:** [lesson 1.1](../01-dirty-data).

## Key ideas

- **The mean** adds up every value and divides by how many there are. **The median** sorts the values and takes the one in the middle.
- **The mean listens to every value, mistakes included.** One typo can move it a lot. The median hardly moves.
- **When a few values are huge,** as with income, wealth or house prices, the mean sits above the median. The median shows the typical case better. Good reports give both.
- **Two columns can share an average and still be very different.** The spread tells you how far the values sit from the middle.
- **The range** is the biggest value minus the smallest. **The middle half** (the interquartile range) runs from the 25th to the 75th percentile and ignores the extremes. **The standard deviation** is a typical distance from the mean.
- **A histogram** shows the shape: where most values sit, whether there is a long tail on one side, and whether there are two humps. Two humps usually mean two groups mixed together.
- **An average across very different groups can describe nobody.** Split by group before you trust it.

## On real data

All numbers come from [penguins.csv](../../../data/penguins/penguins.csv): the 342 penguins with a body mass.

| Body mass | Value |
|---|---|
| Mean | 4,202 g |
| Median | 4,050 g |
| Range | 2,700 to 6,300 g |
| Middle half | 3,550 to 4,750 g |
| Standard deviation | 802 g |

- **Mean above median.** The histogram has a longer tail on the heavy side, mostly the big Gentoos, so the mean sits about 150 g above the median.
- **One typo.** Add the 42,500 g typo from lesson 1.1 and the mean jumps to 4,313 g. The median stays at 4,050 g.
- **About two thirds within one standard deviation.** 231 of the 342 penguins (68%) weigh between 3,400 and 5,004 g, the mean plus or minus one standard deviation.
- **Hardly anyone is average.** Only 25 penguins weigh within 100 g of the mean.
- **Two humps.** Flipper length has one hump around 190 mm (Adelie and Chinstrap) and another around 215 mm (Gentoo).

Split by species, the picture gets much clearer:

| Species | Penguins | Mean | Median | Standard deviation |
|---|---|---|---|---|
| Adelie | 151 | 3,701 g | 3,700 g | 459 g |
| Chinstrap | 68 | 3,733 g | 3,700 g | 384 g |
| Gentoo | 123 | 5,076 g | 5,000 g | 504 g |

Inside each species the spread is about 400 to 500 g, much less than the 802 g for all penguins together. Split by sex as well and the groups get tighter still: a female Adelie averages 3,369 g and a male Gentoo 5,485 g.

You can check every number yourself in [describe-penguins.ipynb](describe-penguins.ipynb).

## A routine to describe any number column

1. Count the values, and the gaps.
2. Find the mean and the median. If they are far apart, find out why.
3. Measure the spread: the range, the middle half and the standard deviation.
4. Draw a histogram and look at the shape: one hump or two, and a long tail or not.
5. Split by group and repeat.

## Where this lives on Azure

| Task | Azure service |
|---|---|
| Summary statistics and a histogram for every column, then the Python code | Data Wrangler in Microsoft Fabric notebooks |
| One line of code for the count, mean, standard deviation and quartiles | `df.describe()` in a Fabric notebook |
| Column statistics and a value distribution while you prepare data | Column profile in the Power Query editor (Power BI, Dataflow Gen2) |
| Average, median, minimum, maximum and standard deviation in a report | Power BI (a number field adds up by default; change it under Summarize) |

**Exam link:** "evaluate data, including data statistics and column properties" is one of the skills measured in the Power BI Data Analyst exam (PL-300).

## The story at the start

Around 1950, the US Air Force measured 4,063 of its flying personnel. Gilbert S. Daniels took ten body measurements used in clothing design and counted how many men were close to average on all ten, with close meaning anywhere in the middle 30% of the range. Not one was. Source: G. S. Daniels, [The "Average Man"?](https://apps.dtic.mil/sti/tr/pdf/AD0010203.pdf), Wright Air Development Center Technical Note 53-7, 1952.

## Homework

[assignment.md](assignment.md). Then check yourself with the [after-lesson quiz](quiz-post.md).

**Next:** lesson 1.3: Statistics 2: correlation, causation, sampling and bias.
