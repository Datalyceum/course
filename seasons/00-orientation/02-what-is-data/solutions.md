# Lesson 0.2: homework solutions

Try the [homework](assignment.md) first. The Stretch has exact answers. The Challenge depends on the dataset you chose, so below you'll find a worked example to compare with yours.

## Core

The answers to the [after-lesson quiz](quiz-post.md) are at the bottom of the quiz, under **Show answers**:

1. **B, 344 by 7.** Shape is always rows first, then columns.
2. **D, categorical and ordinal.** Small, medium and large are labels, and they have a natural order.
3. **B, semi-structured.** JSON has labels (keys) but no fixed table, and each record can carry different fields.

## Stretch: the penguin columns

| Column | Type | Note |
|---|---|---|
| `species` | Categorical, nominal | Adelie, Chinstrap or Gentoo. No order. |
| `island` | Categorical, nominal | Biscoe, Dream or Torgersen. No order. |
| `bill_length_mm` | Numerical, continuous | Measured, so any value is possible, like 39.1 or 39.15. |
| `bill_depth_mm` | Numerical, continuous | Measured. |
| `flipper_length_mm` | Numerical, continuous | Written as whole millimetres, but it's still a measurement, so it's continuous. |
| `body_mass_g` | Numerical, continuous | Weighed and rounded to the nearest 25 g. Rounding doesn't make it discrete. |
| `sex` | Categorical, nominal | Written as MALE or FEMALE in this file. |

That's four numerical and three categorical columns.

**Missing values.** Two penguins have no measurements at all: spreadsheet rows **5** and **341** (row 1 holds the column names). Eleven penguins have no value for `sex`: rows 5, 10, 11, 12, 13, 49, 248, 288, 326, 338 and 341. Finding any one of these was enough.

**Bonus.** Filtering `species` gives 152 Adelie, 124 Gentoo and 68 Chinstrap, 344 in total.

A common mistake: calling `flipper_length_mm` discrete because it has no decimals. Ask how the value was made. If it was counted (rooms, passengers), it's discrete. If it was measured and then rounded, it's continuous.

## Challenge: the five questions for a real dataset

Worked example with a sample of New York City taxi trips from March 2019. The file is [taxis.csv](https://github.com/mwaskom/seaborn-data/blob/master/taxis.csv) in the seaborn-data repository on GitHub. The trips come from the city's Taxi and Limousine Commission trip records.

1. **What is one row?** One taxi trip.
2. **What's the shape?** 6,433 by 14.
3. **What type is each column?**
   - Numerical: `passengers` (discrete, counted), and `distance`, `fare`, `tip`, `tolls` and `total` (continuous).
   - Categorical, nominal: `color` (yellow or green), `payment`, `pickup_zone`, `dropoff_zone`, `pickup_borough` and `dropoff_borough`.
   - Dates and times: `pickup` and `dropoff`. This is one of the two extra types the lesson mentioned.
4. **What's missing or strange?**
   - `payment` is empty for 44 trips, the pickup zone for 26 and the drop-off zone for 45.
   - 51 trips have a distance of 0, and 96 have 0 passengers.
   - 72 trips last less than a minute.
   - One trip starts on 28 February, although the file is meant to cover March.
5. **Where did it come from, and who collected it?** Equipment in each taxi recorded the trip (machine data). Technology providers pass these records to the Taxi and Limousine Commission, which publishes them as open data and notes that it can't guarantee their accuracy. This file is a small sample, not every trip in the city.

What the five questions already tell you: before using this data for anything, you'd want to decide what to do with the zero-distance and zero-passenger trips. Those are exactly the problems Lesson 1.1 deals with.

Post your own five answers in the [Lesson 0.2 homework thread](https://github.com/datalyceum/course/discussions/4).

## Think about it

**Delete the penguin, or fill in a guess?** It depends on what's missing and why.

- The two penguins with no measurements at all carry almost no information, so dropping them is reasonable.
- If only one value is missing, deleting the whole row throws away good data. Filling in a sensible guess, like the average for that species and sex, keeps it.
- Never fill a gap with 0. An empty cell means "unknown", not "nothing".
- Whatever you choose, write it down, so others know the data was changed.

Lesson 1.1, Dirty data, goes through these choices step by step.
